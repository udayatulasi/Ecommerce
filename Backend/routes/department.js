var express = require("express")
var router = express.Router()
const { check,validationResult } = require('express-validator');
// const {isAdmin,isAuth,isSignedIn}= require("../../controllers/auth/auth"); 
const { updateDepartment,deleteDepartment,createDepartment,getAllDepartments } = require("../controllers/department");


router.post("/department",createDepartment)
// router.post("/department/createCategory/:userid",createCategory)


router.get("/department",getAllDepartments)
// router.get("/department/:department",getAllCategories)

router.put("/department/:departmentId",updateDepartment)

router.delete("/department/:deparmentId",deleteDepartment)
// router.delete("/department/:categoryId",deleteCategory)

module.exports = router



