var express = require("express")
var router = express.Router()
const { check,validationResult } = require('express-validator');
const {isAdmin,isAuth,isSignedIn}= require("../../controllers/auth/auth"); 
const { updateDepartment,deleteDepartment,createDepartment,getAllDepartments } = require("../controllers/order");


router.post("/department/:userid",createDepartment)
// router.post("/department/createCategory/:userid",createCategory)


router.get("/departments",getAllDepartments)
// router.get("/department/:department",getAllCategories)

router.put("/departments/:department",updateDepartment)

router.delete("/department/:userid",deleteDepartment)
// router.delete("/department/:categoryId",deleteCategory)




