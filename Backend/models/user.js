const mongoose = require("mongoose")
const  uuidv1  =  require('uuid/v4');
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:true,
        maxlength: 32 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    encry_password: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        contentType: String
    },
    salt: String,
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: Number,
        default: 0,
        required: true
    }

}, {timestamps: true})

userSchema
 .virtual('password')
 .set(function(password) {
  this._password = password
  this.salt = uuidv1();
  this.encry_password = this.encryptPassword(password)

 })

 userSchema.methods = {

    authenticate: function(plainpassword) {

         return  this.encryptPassword(plainpassword) === this.encry_password

    },

    encryptPassword: function(plainpassword) {

     if(!plainpassword) return ""   
     try {
        
        return crypto.createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
     }
     catch (error) {
        return error
     }
    }
 }

 module.exports = mongoose.model("User", userSchema)