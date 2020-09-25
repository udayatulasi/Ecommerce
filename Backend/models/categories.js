const mongoose = require('mongoose');




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
    
    image : {
        data : Buffer,
        contentType : String,
        
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("Category", categoriesSchema)