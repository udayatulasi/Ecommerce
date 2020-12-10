const express = require("express");
const router = express.Router();

// Importing products controller
const {
  getProductById,
  getAllProducts,
  getAProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllCategoryProducts,
} = require("../controllers/products");

// Importing auth controller
const {  isSignedIn, isAuth} = require('../controllers/auth');
const { getCategoryById } = require("../controllers/categories");


router.param('productId', getProductById);
router.param('categoryId',getCategoryById)


// Both admin and user routes
router.get('/products', getAllProducts);
router.get('/products/:categoryId', getAllCategoryProducts);

router.get('/product/:productId', getAProduct);

// only admin routes
router.post('/product', isSignedIn, isAuth, createProduct);
router.put('/product/:productId', isSignedIn, isAuth, updateProduct);
router.delete('/product/:productId', isSignedIn, isAuth, deleteProduct);


module.exports = router