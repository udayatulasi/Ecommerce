    const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({
    name : {
        type : String,
        maxlength : 64,
        unique : true,
        required : true,
        trim : true
    },
    description : {
        type : String,
        maxlength : 2000,
        required : true
    },
//    It should be an array
    // size : {
    //     type : String,
    //     maxlength : 32,
    //     default : 'S',
    //     enum : ["XXL","XL","L","M","S"],
    //     required : true
    // },

    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Category"
    },
    price : {
        type : Number,
        required : true,
        trim : true
    },
    sold : {
        type : Number,
        trim : true,
        default : 0
    },
    stock : {
        type : Number,
        trim : true,
        required : true
    },
    image : {
        data : Buffer,
        contentType : String,  
    },
}, {
    timestamps : true
})



module.exports = mongoose.model("Products",productsSchema)