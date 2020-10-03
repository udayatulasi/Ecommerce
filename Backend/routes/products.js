const express = require("express");
const router = express.Router();
const multer = require("multer")
const path =require("path")
const fs = require("fs")
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

const fileStorage = multer.diskStorage({
  destination:(req,file,cb)=>{
    const dir =`./images/${req.body.name}`
    const exist =fs.existsSync(dir)
    if(!exist){
        return fs.mkdir(dir, error => cb(null, dir))
    }
    return cb(null,dir)
},
  filename:(req,file,cb)=>{
      cb(null,file.fieldname + "-" +Date.now()+ path.extname(file.originalname))  
  }
})



const upload = multer({storage:fileStorage})

router.param('productId', getProductById);
router.param('categoryId',getCategoryById)


// Both admin and user routes
router.get('/products', getAllProducts);
router.get('/products/:categoryId', getAllCategoryProducts);

router.get('/product/:productId', getAProduct);

// only admin routes
router.post('/product',upload.array("images",10), createProduct);
router.put('/product/:productId', isSignedIn, isAuth, updateProduct);
router.delete('/product/:productId', isSignedIn, isAuth, deleteProduct);


module.exports = router