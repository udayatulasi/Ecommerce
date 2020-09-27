const Category = require('../models/categories');
const Product = require("../models/products")
// Get a category by Id
exports.getCategoryById = async(req, res, next) => {
 
    try {
      
        const category = await Category.findById(req.params.categoryId).populate('department')
       
        if(!category) {
            // return res.status(400).json({ success: false, data:'cannot get category'})
            const error = new Error('cannot get category')
            error.statusCode = 400;
            throw error
        }

        req.category = category
        next();

    }
    
    catch(err) {
        // return res.status(400).json({ success: false, data:'cannot get category'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }


}


// Get a category

exports.getACategory = (req, res) => {
    
        return res.status(200).json({ success: true, data: req.category})
}




// Get all categories
exports.getAllCategories = async( req, res) => {

    try {
        const category = await Category.find().populate("department")
        if(!category) {
            // return res.status(400).json({success : false,data: 'Unable to get all categories'})
            const error = new Error('Unable to get all categories')
            error.statusCode = 400;
            throw error
        }
        
        return res.status(200).json({ success: true, data:category})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Unable to get all categories'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);  
    }

}

exports.getAllDepartmentCategories = async( req, res) => {

    try {
        const category = await Category.find(req.params.departmentId)
        if(!category) {
            // return res.status(400).json({success : false,data: 'Unable to get all categories'})
            const error = new Error('Unable to get all categories')
            error.statusCode = 400;
            throw error
        }
        
        return res.status(200).json({ success: true, data:category})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Unable to get all categories'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);  
    }

}


// Create categories
exports.createCategory = async( req, res) => {

    try {
        const category = await Category.create(req.body)
        if(!category) {
            // return res.status(400).json({success : false,data: 'Category creation failed'})
            const error = new Error('Category creation failed')
            error.statusCode = 400;
            throw error
        }
        return res.status(200).json({ success: true, data:category})
    }

    catch( err){
        // return res.status(400).json({success : false,data: err})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
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
            // return res.status(400).json({success : false,data: 'Category updation failed'})
            const error = new Error('Category updation failed')
            error.statusCode = 400;
            throw error

        }
       return  res.status(200).json({ success: true, data:category})

    }

    catch( err){
        // return res.status(400).json({success : false,data: err})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
    }

}


// Delete category
exports.deleteCategory = async( req, res) =>{

    try {

        const product = Product.find({category:req.params.categoryId})
        if(product.length >0){
            // return res.status(400).json({success : false,data: "delete asscociated products to delete category"})
            const error = new Error("delete asscociated products to delete category")
            error.statusCode = 400;
            throw error

        }
        const category = await Category.findByIdAndDelete(req.params.categoryId)
        if(!category) {
            // return res.status(400).json({success : false,data: 'Category deletion failed'})
            const error = new Error('Category deletion failed')
            error.statusCode = 400;
            throw error
        }      
        return res.status(200).json({ success: true, data:category})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Category deletion failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
       
    }

}