const mongoose = require('mongoose');


const productsSchema = new mongoose.Schema({
    product_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Products"
    }
})

module.exports = mongoose.model("productId", productsSchema)


const categoriesSchema = new mongoose.Schema({
    name : {
        type: String,
        maxlength : 32,
        required : true,
        unique : true,
        trim : true
    },

    department:{
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Department",
       
    },

    
    products : [ productsSchema],
    
    image : {
        data : Buffer,
        contentType : String,
        
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Category", categoriesSchema)