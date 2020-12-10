const mongoose = require("mongoose")


const DepartmentsSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxlength:32,
        unique:true
    },
    photo:{
        data: Buffer,
        contentType: String
    }

},
{timestamps:true})




module.exports=mongoose.model("Departments",DepartmentsSchema)

