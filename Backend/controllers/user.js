const User = require("../models/user")
const Order = require("../models/Order")
const { getOrderById } = require("../controllers/order")

exports.getUserId = async(req, res, next, id)  => {
    try {
        const user = await User.findById(id)
        if(!user) {
            // return res.status(400).json({success: false, data: "unable to get user"})
            const error = new Error("Unable to get the user")
            error.statusCode = 400;
            throw error
        }
        req.user = user
        next()
    }
    catch (err){
    //    return res.status(400).json({success: false, data: "unable to get user"})
    if(!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
    }
}
exports.getAorderbyId = async(req, res,next) => {
    // should get get orderById param
     try {
         const order = await Order.findById(req.params.orderId)
         if(!order) {
            //  return res.status(400).json({success: false, data: "unable to get order"})
            const error = new Error("Unable to find the Order")
            error.statusCode = 400;
            throw error
         }
         req.order = order
         next()
     }
     catch (err){
        //  return res.status(400).json({success: false, data: "unable to get order"})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
      }
     
 }

 exports.userOrder =(req,res)=>{
     res.status(200).json({success:true,data:req.order})
 }

exports.getUser = async(req, res) => {
 // should make some of fields as undefined
    
        req.user.salt = undefined;
        req.user.encry_password = undefined;
        req.user.createdAt = undefined;
        req.user.updatedAt = undefined;
        return res.json(req.user)
}

exports.updateUser = async(req, res,next) => {
   
    try {
        let user = await User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {
            new: true,
            useFindAndModify: false
        })
        if(!user) {
            // return res.status(400).json({success: false, data: "unable to get user"})
            const error = new Error("Unable to update the user")
            error.statusCode = 400;
            throw error
        }
        req.user.salt = undefined;
        req.user.encry_password = undefined;
        res.status(200).json({success: true, data: user})
    }
    catch (err){
        // return res.status(400).json({success: false, data: "unable to get user"})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
     }
}

exports.userOrderList = async(req, res,next) => {
   
    try {
        const order = await Order.find({user:req.params.userId})
        if(!order) {
            // return res.status(400).json({success: false, data: "unable to get user"})
            //error handling
            const error = new Error("Unable to find the Orders")
            error.statusCode = 400;
            throw error
        }
        res.status(200).json({success: true, data: order})
    }
    catch (err){
        // return res.status(400).json({success: false, data: "unable to get user"})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
     }
}



exports.deleteUser = async(req, res,next) => {
   
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
        if(!order) {
            // return res.status(400).json({success: false, data: "unable to get"})
            const error = new Error("Unable to Delete the user")
            error.statusCode = 400;
            throw error

        }
        res.status(200).json({success: true, data: "user deleted successfully"})
    }
    catch (err){
        // return res.status(400).json({success: false, data: "unable to get user"})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
     }
}