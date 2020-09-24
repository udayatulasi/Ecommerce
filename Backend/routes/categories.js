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
const { isAdmin, isSignedIn, isAuth} = require('../controllers/auth')

const { getDepartmentById} = require('../controllers/department')

router.param('categoryId', getCategoryById);
router.param('deparmentId', getDepartmentById);

// Both admin and user routes
router.get('/categories', getAllCategories);
router.get('/category/:categoryId', getACategory);

// only admin routes
router.post('/category/:departmentId', isSignedIn, isAuth, isAdmin,createCategory);
router.put('/category/:departmentId/:categoryId', isSignedIn, isAuth, isAdmin, updateCategory);
router.delete('/category/:departmentId/:categoryId', isSignedIn, isAuth, isAdmin,deleteCategory);


module.exports = router