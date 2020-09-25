const Departments = require('../models/Departments')
const Category = require("../models/categories")

// Get a product by Id
exports.getDepartmentById = async (req,res,next,id) => {
    let department = await Departments.findById(id)
    if(!departments){
        return res.status(400).json({success:false,data:'Unable to find Department'})
    }
    req.department = department
    next()
}


// Get a product
exports.getADepartment = () => {
        let department = req.department;
        return res.status(200).json({success:false,data:department})
}



// Get all products
exports.getAllDepartments = async( req, res) => {

    try {
        const department = await Departments.find()
        if(!department) {
            return res.status(400).json({success : false,data: 'No departments are created'})

        }
       return res.status(200).json({ success: true, data:department})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Unable to get all departments'})
       
    }

}


// Create product
exports.createDepartment = async( req, res) => {

    try {
        const department = await Departments.create(req.body)
        if(!department) {
            return res.status(400).json({success : false,data: 'Department1 creation failed'})

        }
        return res.status(200).json({ success: true, data: department})

    }

    catch( err){
        console.log(err)
        return res.status(400).json({success : false,data: 'Department creation failed'})
       
    }

}


// Update product
exports.updateDepartment = async( req, res) => {

    try {

        const department = await Departments.findByIdAndUpdate(req.params.departmentId,{$set:req.body},{useFindAndModify:false} )
        if(!department) {
            return res.status(400).json({success : false,data: 'Department1 updation failed'
            })

        }
      return res.status(200).json({ success: true, data:department})
    }
    catch( err){
        console.log(err)
        return res.status(400).json({success : false,data: 'Department updation failed'})
       
    }

}


// Delete product
exports.deleteDepartment = async( req, res) =>{
    try {
        let categories = await Category.find({department:req.params.departmentId})
        if(categories){
           return res.status(200).json({ success: false, data:"Delete Categories related to this department"})
        }

        const department = await Departments.findByIdAndDelete(req.params.deparmentId)
        if(!department) {
                return res.status(400).json({success : false,data: 'Department not avaliable'})
            }
                return res.status(200).json({ success: true, data:department})
    }

    catch(err){
        console.log(err)
        return res.status(400).json({success : false,data: 'department deletion failed'})
       
    }
}