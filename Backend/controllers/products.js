const Product = require('../models/products')
const Category = require('../models/categories')
// Get a product by Id
exports.getProductById = async( req, res,next) => {
    try {
        
        const product = await Product.findById(req.params.productId).populate('category')
       
        if(!product) {
            // return res.status(400).json({ success: false, data:'cannot get product'})

            const error = new Error('cannot get product')
            error.statusCode = 400;
            throw error
        }

        req.product = product
        next();

    }
    
    catch(err) {
        // return res.status(400).json({ success: false, data:err})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }


}


// Get a product
exports.getAProduct = (req, res) => {
    return res.status(200).json({ success: true, data: req.product})
}



// Get all products
exports.getAllProducts = async( req, res,next) => {

    try {
        const product = await Product.find().populate('category')
        if(!product) {
            // return res.status(400).json({success : false,data: 'Unable to get all products'})
            const error = new Error('cannot get All products')
            error.statusCode = 400;
            throw error

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Unable to get all products'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
    }
}

exports.getAllCategoryProducts = async( req, res,next) => {

    try {
        const product = await Product.find(req.params.categoryId)
        if(!product) {
            // return res.status(400).json({success : false,data: 'Unable to get all products'})
            const error = new Error('cannot get All category products')
            error.statusCode = 400;
            throw error

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Unable to get all products'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
    }

}


// Create product
exports.createProduct = async( req, res, next) => {

    try {
        
        const product = await Product.create(req.body)
        if(!product) {
            // return res.status(400).json({success : false,data: 'Product creation failed'})
            const error = new Error('cannot get create product')
            error.statusCode = 400;
            throw error

        }
        let products = {  product_id : product._id }        
        res.status(200).json({ success: true, data: products})

    }

    catch( err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
       
    }

}


// Update product
exports.updateProduct = async( req, res, next) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.productId, {$set : req.body},{
            new : true,
            useFindAndModify : false
        })
        if(!product) {
            // return res.status(400).json({success : false,data: 'Product updation faileddd'})
            const error = new Error('cannot get update product ')
            error.statusCode = 400;
            throw error
        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        // return res.status(400).json({success : false,data: err})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
    }

}


// Delete product
exports.deleteProduct = async( req, res, next) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.productId)
        if(!product) {
            // return res.status(400).json({success : false,data: 'Product deletion failed'})
            const error = new Error('cannot get delete product')
            error.statusCode = 400;
            throw error

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Product deletion failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
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

