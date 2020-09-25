const Category = require('../models/categories');
const Product = require("../models/products")
// Get a category by Id
exports.getCategoryById = async(req, res, next, id) => {
 
    try {
      
        const category = await Category.findById(id)
       
        if(!category) {
            return res.status(400).json({ success: false, data:'cannot get category'})
        }

        req.category = category
        next();

    }
    
    catch(err) {
        return res.status(400).json({ success: false, data:'cannot get category'})
    }


}


// Get a category

exports.getACategory = (req, res) => {
        return res.status(200).json({ success: true, data: req.category})
}




// Get all categories
exports.getAllCategories = async( req, res) => {

    try {
        const category = await Category.find()
        if(!category) {
            return res.status(400).json({success : false,data: 'Unable to get all categories'
            })

        }
        
        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Unable to get all categories'})
       
    }

}


// Create categories
exports.createCategory = async( req, res) => {

    try {
        const category = await Category.create(req.body)
        if(!category) {
            return res.status(400).json({success : false,data: 'Category creation failed'})
        }
        res.status(200).json({ success: true, data:category})
    }

    catch( err){
        return res.status(400).json({success : false,data: err})
       
    }
    
}


// Update category
exports.updateCategory = async( req, res) => {
    
    try {
        
        const category = await Category.findByIdAndUpdate(req.params.categoryId, {$push : req.body},{
            new : true,
            useFindAndModify : false
        })
        if(!category) {
            return res.status(400).json({success : false,data: 'Category updation failed'
            })

        }
        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: err})
       
    }

}


// Delete category
exports.deleteCategory = async( req, res) =>{

    try {

        const product = Product.find({category:req.params.categoryId})
        if(product){
            return res.status(400).json({success : false,data: "delete asscociated products to delete category"})

        }
        const category = await Category.findByIdAndDelete(req.params.categoryId)
        if(!category) {
            return res.status(400).json({success : false,data: 'Category deletion failed'})
        }      
        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Category deletion failed'})
       
    }

}