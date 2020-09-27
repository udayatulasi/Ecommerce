const express = require("express")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt")
const { check, validationResult } = require("express-validator")


exports.signup = async(req, res, next) => {
  
    try {
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            // return res.status(404).json({success: false, data:  errors.array()[0].msg})
            const error = new Error(errors.array()[0].msg)
            error.statusCode = 400;
            throw error
        }
        const user = await User.create(req.body)
        if(!user) {
            // return res.status(400).json({success: false, data: "unable to signup"})
            const error = new Error("cannot create user")
            error.statusCode = 400;
            throw error
        }
        res.status(200).json({success: true, data: user})
    }
    catch (err){
        
        // return res.status(400).json({success: false, data: err})
        if(!err.statusCode) {
            err.statusCode = 500;
            err.message = "email already registered"
        }
        next(err);
     }
}


exports.signin = async(req, res) => {
    
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            // return res.status(404).json({success: false, data:  errors.array()[0].msg})
            const error = new Error(errors.array()[0].msg)
            error.statusCode = 400;
            throw error
        }
        const user = await User.findOne({email:req.body.email})
        if(!user) {
            // return res.status(400).json({success: false, data: "user does not exist"})
            const error = new Error("User not registered")
            error.statusCode = 400;
            throw error
        }
        if(!user.authenticate(req.body.password)) {
            // return res.status(400).json({success: false, data: "password does not match"})
            const error = new Error("password does not match")
            error.statusCode = 400;
            throw error
        }
        // create token
        const token = await jwt.sign({id: user._id,role: user.role}, "ecommerce", {expiresIn : 60* 60});

        // keeping token in cookie
         await res.cookie("token", token)

        const { _id, name, email, role } = user
        res.json({token, user: {_id, name, email, role }})
        

    }
    catch (err){
       
        // return res.status(400).json({success: false, data: err})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
     }
}


exports.signout = async (req, res) => {

  try {
    res.clearCookie("token")
    return res.status(200).json({success: true,  data: "user signout successfully" }) 
    
  } 
  catch (err){
    // return res.status(400).json({success: false, data: err})
    if(!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
  }

}


exports.isSignedIn = (req,res,next)=>{

    const authHeader = req.get('Authorization');
    if (!authHeader) {
      const error = new Error('Not authenticated...');
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.SECRET);
    } catch (err) {
      err.statusCode = 500;
      throw err;
    }
    if (!decodedToken) {
      const error = new Error('Not authenticated.');
      error.statusCode = 401;
      throw error;
    }
    req.auth = decodedToken;
next()
}

// middlewares
exports.isAuth = async(req, res, next) => {
       if(req.auth.role !== 1){
    let auth =  req.user && req.auth && req.user._id == req.auth.id 
    if(!auth) {
        // return res.status(400).json({success: false, data: "Access Denied"})
        const error = new Error("Access denied please signin")
        error.statusCode = 400;
        throw error
    }}
    next()
  
}

// exports.isAdmin = async(req, res, next) => {
    
//     try {
//         if(req.user.role === 0) {
//             // return res.status(400).json({success: false, data: "You are not an admin"})
//             const error = new Error("you are not admin")
//             error.statusCode = 400;
//             throw error
//         }
//         next();
//     }
//     catch(err) {
//     //    return res.status(400).json({success: false, data: "unable to find admin or user"})
//     if(!err.statusCode) {
//         err.statusCode = 500;
//     }
//     next(err);
//     }
// }