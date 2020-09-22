var express = require("express")
var router = express.Router()
const { check,validationResult } = require('express-validator');
const {isAdmin,isAuth,isSignedIn}= require("../../controllers/auth/auth"); 
const { updateDepartment,deleteDepartment,createDepartment,getAllDepartments } = require("../controllers/order");


router.post("/department/:userid",isSignedIn,isAuth,isAdmin,createDepartment)
router.post("/department/createCategory/:userid",isSignedIn,isAuth,isAdmin,createCategory)


router.get("/departments",getAllDepartments)
router.get("/department/:department",getAllCategories)

router.put("/departments/:department",isSignedIn,isAuth,isAdmin,updateDepartment)

router.delete("/department/:userid",isSignedIn,isAuth,isAdmin,deleteDepartment)
router.delete("/department/:categoryId",isSignedIn,isAuth,isAdmin,deleteCategory)




