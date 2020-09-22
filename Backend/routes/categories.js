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


router.param('/:categoryId', getCategoryById);

// Both admin and user routes
router.get('/categories', getAllCategories);
router.get('/categories/:categoryId', getACategory);

// only admin routes
router.post('/category', createCategory);
router.put('/category/:categoryId', updateCategory);
router.delete('/category/:categoryId', deleteCategory);


module.exports = router