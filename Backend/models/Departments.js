const mongoose = require("mongoose")

const CategoryIdSchema = new mongoose.Schema({
   
    category:{
        type:ObjectId,
        ref:"Categories",
        required:true,
        unique:true
    }

})

module.exports=mongoose.model("Category",CategoryIdSchema)


const DepartmentsSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    categories: {
        categories:[CategoryIdSchema],
    },
    photo:{
        data: Buffer,
        contentType: String
    }

},
{timestamps:true})




module.exports=mongoose.model("Departments",DepartmentsSchema)