const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name : {
        type: String,
        maxlength : 32,
        required : true,
        unique : true,
        trim : true
    },

    products : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : Products
    },

    image : {
        data : Buffer,
        contentType : String,
        required : true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Categories", categoriesSchema)