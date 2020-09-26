const Departments = require('../models/Departments')
const Category = require("../models/categories")

// Get a product by Id
exports.getDepartmentById = async (req,res,next,id) => {
    try{
       
    let department = await Departments.findById(id)
    
    if(!department){
        // return res.status(400).json({success:false,data:'Unable to find Department'})
        const error = new Error("unale to find Department")
        error.statusCode = 400;
        throw error
    }
    req.department = department
    next()
}
    catch(error){
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

    }
}


// Get a product
exports.getADepartment = async(req, res) => {
     
        return res.status(200).json({success:true,data:req.department})
}



// Get all products
exports.getAllDepartments = async( req, res) => {

    try {
        const department = await Departments.find()
        if(!department) {
            // return res.status(400).json({success : false,data: 'No departments are created'})
            const error = new Error("no department are created")
            error.statusCode = 400;
            throw error

        }
       return res.status(200).json({ success: true, data:department})

    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Unable to get all departments'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}


// Create product
exports.createDepartment = async( req, res) => {
    try {
        let createdDepartment = Departments.find({name:req.body.name})
        if(!createdDepartment){
            const error = new Error("Department already existed")
            error.statusCode = 400;
            throw error
        }
        const department = await Departments.create(req.body)
        if(!department) {
            // return res.status(400).json({success : false,data: 'Department1 creation failed'})
            const error = new Error("Department unable to created")
            error.statusCode = 400;
            throw error
        }
        return res.status(200).json({ success: true, data: department})
    }

    catch(err){
        
        // return res.status(400).json({success : false,data: 'Department creation failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

       
    }

}


// Update product
exports.updateDepartment = async( req, res) => {

    try {
        
        const department = await Departments.findByIdAndUpdate(req.params.departmentId,{$set:req.body},{new : true,useFindAndModify:false} )
        if(!department) {
            // return res.status(400).json({success : false,data: 'Department1 updation failed'})
            const error = new Error("Unable to update the department")
            error.statusCode = 400;
            throw error
        }
      return res.status(200).json({ success: true, data:department})
    }
    catch( err){
        
        // return res.status(400).json({success : false,data: 'Department updation failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

       
    }

}


exports.deleteDepartment = async( req, res) =>{
    try {
        let categories = await Category.find({department:req.params.departmentId})
        if(categories.length>0){
        //    return res.status(200).json({ success: false, data:"Delete Categories related to this department"})
           const error = new Error("delete Categories related to this department")
           error.statusCode = 400;
           throw error
        }

        const department = await Departments.findByIdAndDelete(req.params.deparmentId)
        if(!department) {
                // return res.status(400).json({success : false,data: 'Department not avaliable'})
                const error = new Error("Department not avaliable")
                error.statusCode = 400;
                throw error
            }
                return res.status(200).json({ success: true, data:department})
    }

    catch(err){
    
        // return res.status(400).json({success : false,data: 'department deletion failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);

       
    }
}