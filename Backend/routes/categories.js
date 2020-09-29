const express = require("express");
const router = express.Router();

// Importing categories controller
const {
  getCategoryById,
  getACategory,
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllDepartmentCategories,
} = require("../controllers/categories");

// Importing auth controller
const {  isSignedIn, isAuth} = require('../controllers/auth');
const { getDepartmentById } = require("../controllers/department");


router.param('categoryId', getCategoryById);
router.param('departmentId', getDepartmentById);


// Both admin and user routes
router.get('/categories', getAllCategories);
router.get('/categories/:departmentId',getAllDepartmentCategories)
router.get('/category/:categoryId', getACategory);

// only admin routes
// router.post('/category/:departmentId', isSignedIn, isAuth,createCategory);
 router.post('/category', isSignedIn, isAuth,createCategory);

router.put('/category/:categoryId', isSignedIn, isAuth, updateCategory);
router.delete('/category/:categoryId', isSignedIn, isAuth,deleteCategory);


module.exports = router