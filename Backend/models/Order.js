const mongoose = require("mongoose")
const{ObjectId} = mongoose.Schema;

const OrderItemsSchema = new mongoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name: String,
    count:Number,
    price:Number,
    status:{
        type:String,
        default:"Recieved",
        enum:["Cancelled","Delivered","Shipped","Processing","Recieved"]
    },

})


const Cart = mongoose.model("Cart",CartSchema)



const OrderSchema = new mongoose.Schema({
    orders:[OrderItemsSchema],
    transaction_Deatils:{},
    amount:{type:Number},
    address: {
        type:String,
        required:true
    },
    user:{
        type:ObjectId,
        ref:"User"
    },
    pincode:{
        type:Number,
        min:6,
        max:6,
        required:true,
    }

},{timestamps:true});

const Order = mongoose.model("Order",OrderSchema)


module.exports = {Order,Cart}