var express = require("express")
var router = express.Router()
const { check,validationResult } = require('express-validator');
const {isAuth,isAdmin,isSignedIn}= require("../../controllers/auth/auth"); 
const { createOrder,getAllOrders,getAOrder,changeOrderstatus,deleteOrder } = require("../controllers/order");


router.post("/order/create/:userid",isSignedIn,iSAuth,createOrder)



// router.get("/orders/:userid",isSignedIn,isAuth,getAllOrders)
// router.get("/orders/:orderid/:userid",isSignedIn,isAuth,getAOrder)



router.put("/orders/:orderid/:userid",isSignedIn,isAuth,isAdmin,changeOrderstatus)

router.delete("/orders/:orderid/:userid",isSignedIn,isAuth,isAdmin,deleteOrder)

