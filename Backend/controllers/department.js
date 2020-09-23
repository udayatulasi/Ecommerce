const Departments = require('../models/Departments')

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
            return res.status(400).json({success : false,data: 'Department creation failed'})

        }
        return res.status(200).json({ success: true, data: department})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Department creation failed'})
       
    }

}


// Update product
exports.updateDepartment = async( req, res) => {

    try {
        const department = await Product.findByIdAndUpdate(req.params.id,{$set:req.body} )
        if(!department) {
            return res.status(400).json({success : false,data: 'Department updation failed'
            })

        }
      return res.status(200).json({ success: true, data:department})
    }
    catch( err){
        return res.status(400).json({success : false,data: 'Department updation failed'})
       
    }

}


// Delete product
exports.deleteDepartment = async( req, res) =>{
    try {
        const department = await Departments.findByIdAndDelete(req.params.id)
        if(!department) {
            return res.status(400).json({success : false,data: 'Department deletion failed'})

        }
        if(department.categories.length >0){
            return res.status(400).json({success : false,data: 'Delete Categories related to this department to delete this department'})
            
        }

       return res.status(200).json({ success: true, data:department})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Product deletion failed'})
       
    }
}