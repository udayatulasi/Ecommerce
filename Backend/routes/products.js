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
} = require("../controllers/products");




router.param('productId', getProductById);

// Both admin and user routes
router.get('/products', getAllProducts);
router.get('/products/:productId', getAProduct);

// only admin routes
router.post('/product', createProduct);
router.put('/product/:productId', updateProduct);
router.delete('/product/:productId', deleteProduct);


module.exports = router