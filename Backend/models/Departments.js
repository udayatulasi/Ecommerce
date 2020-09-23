const mongoose = require("mongoose")

const CategoryIdSchema = new mongoose.Schema({
   
    category:{
        type:ObjectId,
        ref:"Categories",
        unique:true
    }

})

const Category=mongoose.model("Category",CategoryIdSchema)


const DepartmentsSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    categories: [CategoryIdSchema],
    photo:{
        data: Buffer,
        contentType: String
    }

},
{timestamps:true})




const Departments=mongoose.model("Departments",DepartmentsSchema)

module.exports = {Departments,Category}