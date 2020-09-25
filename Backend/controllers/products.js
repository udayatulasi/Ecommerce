const Product = require('../models/products')
const Category = require('../models/categories')
// Get a product by Id
exports.getProductById = async( req, res,next,id) => {
    try {
        
        const product = await Product.findById(id).populate('category')
       
        if(!product) {
            return res.status(400).json({ success: false, data:'cannot get product'})
        }

        req.product = product
        next();

    }
    
    catch(err) {
        return res.status(400).json({ success: false, data:err})
    }


}


// Get a product
exports.getAProduct = (req, res) => {
    return res.status(200).json({ success: true, data: req.product})
}



// Get all products
exports.getAllProducts = async( req, res) => {

    try {
        const product = await Product.find().populate('category')
        if(!product) {
            return res.status(400).json({success : false,data: 'Unable to get all products'})

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Unable to get all products'})
       
    }

}


// Create product
exports.createProduct = async( req, res) => {

    try {
        const product = await Product.create(req.body)
        if(!product) {
            return res.status(400).json({success : false,data: 'Product creation failed'})

        }
        let products = {  product_id : product._id }
        const category = await Category.findByIdAndUpdate(req.params.categoryId, {$push: {products : products }}, {new: true, useFindAndModify:false})
        if(!category){
            return res.status(400).json({success : false,data: 'unable to add products to category'})
        }

        res.status(200).json({ success: true, data: product})

    }

    catch( err){
        return res.status(400).json({success : false,data: err})
       
    }

}


// Update product
exports.updateProduct = async( req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, {$set : req.body},{
            new : true,
            useFindAndModify : false
        })
        if(!product) {
            return res.status(400).json({success : false,data: 'Product updation faileddd'
            })
        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        return res.status(400).json({success : false,data: err})
       
    }

}


// Delete product
exports.deleteProduct = async( req, res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.productId)
        if(!product) {
            return res.status(400).json({success : false,data: 'Product deletion failed'})

        }
        
        let index = req.category.products.findIndex(product => req.params.productId === product.product_id);
        req.department.categories.splice(index, 1)
        let department = await Depatments.findByIdAndUpdate(req.params.departmentId, {$set:req.department}, {new:true, useFindAndModify: false})
        if(!department){
            return res.status(400).json({success : false,data: 'category deletion failed  in department'})

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Product deletion failed'})
       
    }
}



// Stock and sold updation
// exports.updateStock = async( req, res, next) => {

//         const stockOperations = req.body.order.orders.map( order =>{
//             return{
//                 updateOne : {
//                     filter : { _id : order._id},
//                     update : { $inc : { stock : -order.count , sold : +order.count}}
//                 }
//             }
//         })
        
//         const updatedResult = await Product.bulkWrite(stockOperations)
//         if(!updatedResult)  {
//             return res.status(400).json({ success: false, data:"unable to update the stock"})
//         }   
    
//     }

