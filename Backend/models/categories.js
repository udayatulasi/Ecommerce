const mongoose = require('mongoose');


// const departmentSchema = new mongoose.Schema({
//     department : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref  : Departments
//     }
// })

// const productSchema = 

const categoriesSchema = new mongoose.Schema({
    name : {
        type: String,
        maxlength : 32,
        required : true,
        unique : true,
        trim : true
    },

    // department:[departmentSchema],

    products : {
        type : mongoose.Schema.Types.ObjectId,
        ref  : "Product"
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