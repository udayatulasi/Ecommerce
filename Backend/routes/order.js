var express = require("express")
var router = express.Router()
// const { check,validationResult } = require('express-validator');
// const {isAuth,isAdmin,isSignedIn}= require("../../controllers/auth/auth"); 
const { createOrder,changeOrderstatus,deleteOrder } = require("../controllers/order");
const { getAorder, getUserId, getAorderbyId } = require("../controllers/user");



router.param("orderId",getAorderbyId)
router.param("userId",getUserId)

router.post("/order/create/:userId",isSignedIn,isAuth,createOrder)

// router.get("/orders/:userid",isSignedIn,isAuth,getAllOrders)
// router.get("/orders/:orderid/:userid",isSignedIn,isAuth,getAOrder)

router.put("/orders/:userId/:orderId",isSignedIn,isAuth,isAdmin,changeOrderstatus)

router.delete("/orders/:userId/:orderId",isSignedIn,isAuth,isAdmin,deleteOrder)

module.exports = router