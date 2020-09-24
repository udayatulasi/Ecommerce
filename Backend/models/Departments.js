const mongoose = require("mongoose")
const{ObjectId} = mongoose.Schema;


const CategoryIdSchema = new mongoose.Schema({
    category_id:{
        type:ObjectId,
        ref:"Categories"
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




module.exports=mongoose.model("Departments",DepartmentsSchema)

// module.exports = {Departments,Category}