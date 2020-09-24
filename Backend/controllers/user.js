const User = require("../models/user")
const Order = require("../models/Order")

exports.getUserId = async(req, res, next, id)  => {
    try {
        const user = await User.findById(id)
        if(!user) {
            return res.status(400).json({success: false, data: "unable to get user"})
        }
        req.user = user
        next()
    }
    catch (err){
       return res.status(400).json({success: false, data: "unable to get user"})
    }
}

exports.getUser = async(req, res) => {
 // should make some of fields as undefined
    
    try {
        req.user.salt = undefined;
        req.user.encry_password = undefined;
        req.user.createdAt = undefined;
        req.user.updatedAt = undefined;
        return res.json(req.user) 
    }
    catch(err) {
       return res.status(400).json({success: false, data: "unable to retrieve user"})
    }
  
}

exports.updateUser = async(req, res) => {
   
    try {
        let user = await User.findByIdAndUpdate(req.params.userId, {$set: req.body}, {
            new: true,
            useFindAndModify: false
        })
        if(!user) {
            return res.status(400).json({success: false, data: "unable to get user"})
        }
        req.user.salt = undefined;
        req.user.encry_password = undefined;
        res.status(200).json({success: true, data: user})
    }
    catch (err){
        return res.status(400).json({success: false, data: "unable to get user"})
     }
}

exports.userOrderList = async(req, res) => {
   
    try {
        const order = await Order.find()
        if(!order) {
            return res.status(400).json({success: false, data: "unable to get user"})
        }
        res.status(200).json({success: true, data: order})
    }
    catch (err){
        return res.status(400).json({success: false, data: "unable to get user"})
     }
}

exports.userOrder = async(req, res) => {
   // should get get orderById param
    try {
        const order = await Order.findById()
        if(!order) {
            return res.status(400).json({success: false, data: "unable to get order"})
        }
        res.status(200).json({success: true, data: order})
    }
    catch (err){
        return res.status(400).json({success: false, data: "unable to get order"})
     }
}

exports.deleteUser = async(req, res) => {
   
    try {
        const user = await User.findByIdAndDelete(req.params.userId)
        if(!order) {
            return res.status(400).json({success: false, data: "unable to get"})
        }
        res.status(200).json({success: true, data: "user deleted successfully"})
    }
    catch (err){
        return res.status(400).json({success: false, data: "unable to get user"})
     }
}