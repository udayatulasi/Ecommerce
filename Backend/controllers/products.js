const Product = require('../models/products')

// Get a product by Id
exports.getProductById = () => {

}


// Get a product
exports.getAProduct = () => {

}



// Get all products
exports.getAllProducts = async( req, res) => {

    try {
        const product = await Product.find()
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
        res.status(200).json({ success: true, data: product})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'product creation failed'})
       
    }

}


// Update product
exports.updateProduct = async( req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        if(!product) {
            return res.status(400).json({success : false,data: 'Product updation failed'
            })

        }
        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Product updation failed'})
       
    }

}


// Delete product
exports.deleteProduct = async( req, res) =>{
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) {
            return res.status(400).json({success : false,data: 'Product deletion failed'})

        }

        res.status(200).json({ success: true, data:product})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Product deletion failed'})
       
    }
}