const Order = require('../models/Order')
const Category = require('../models/categories');

const Departments = require('../models/Departments')
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
            return res.status(400).json({success : false,data: 'Category creation failed'
            })
        }
    
        let category_id = {  category_id : category._id }
        const department = await Departments.findByIdAndUpdate(req.params.departmentId, {$push: {categories : category_id }}, {new: true, useFindAndModify:false})
        if(!department){
            return res.status(400).json({success : false,data: 'unable to add category to department'})
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

        if(req.category.products.length > 0 ){
            return res.status(400).json({success : false,data: 'Delete all products before deleting category'})

        }
        const category = await Category.findByIdAndDelete(req.params.categoryId)
        if(!category) {
            return res.status(400).json({success : false,data: 'Category deletion failed'})
        }

        let index = req.department.categories.findIndex(category => req.params.categoryId === category.category_id);
        req.department.categories.splice(index, 1)
        let department = await Departments.findByIdAndUpdate(req.params.departmentId, {$set:req.department}, {new:true, useFindAndModify: false})
        if(!department){
            return res.status(400).json({success : false,data: 'category deletion failed  in department'})

        }
        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Category deletion failed'})
       
    }

}