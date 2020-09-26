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
} = require("../controllers/categories");

// Importing auth controller
const {  isSignedIn, isAuth} = require('../controllers/auth')

const { getDepartmentById} = require('../controllers/department')

router.param('categoryId', getCategoryById);
router.param('deparmentId', getDepartmentById);

// Both admin and user routes
router.get('/categories', getAllCategories);
router.get('/category/:categoryId', getACategory);

// only admin routes
router.post('/category/:departmentId', isSignedIn, isAuth,createCategory);
router.put('/category/:departmentId/:categoryId', isSignedIn, isAuth, updateCategory);
router.delete('/category/:departmentId/:categoryId', isSignedIn, isAuth,deleteCategory);


module.exports = router