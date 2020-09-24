var express = require("express")
var router = express.Router()
const { check,validationResult } = require('express-validator');
const {isAdmin,isAuth,isSignedIn}= require("../controllers/auth"); 
const { updateDepartment,deleteDepartment,createDepartment,getAllDepartments, getDepartmentById } = require("../controllers/department");

router.param('departmentId',getDepartmentById)

router.post("/department",isSignedIn,isAuth,isAdmin,createDepartment)
// router.post("/department/createCategory/:userid",createCategory)


router.get("/departments",getAllDepartments)
// router.get("/department/:department",getAllCategories)

router.put("/department/:departmentId",isSignedIn,isAuth,isAdmin,updateDepartment)

router.delete("/department/:deparmentId",isSignedIn,isAuth,isAdmin,deleteDepartment)
// router.delete("/department/:categoryId",deleteCategory)

module.exports = router



