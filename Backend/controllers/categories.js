const Category = require('../models/categories');

// Get a category by Id
exports.getCategoryById = (req, res, next, id) => {

  

}


// Get a category

exports.getACategory = () => {

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
        res.status(200).json({ success: true, data:category})
    }

    catch( err){
        return res.status(400).json({success : false,data: 'Category creation failed'})
       
    }
    
}


// Update category
exports.updateCategory = async( req, res) => {

    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body)
        if(!category) {
            return res.status(400).json({success : false,data: 'Category updation failed'
            })

        }
        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Category updation failed'})
       
    }

}


// Delete category
exports.deleteCategory = async( req, res) =>{

    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        if(!category) {
            return res.status(400).json({success : false,data: 'Category deletion failed'})

        }

        res.status(200).json({ success: true, data:category})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Category deletion failed'})
       
    }

}