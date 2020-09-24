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

})


module.exports = mongoose.model("Cart",OrderItemsSchema)



const OrderSchema = new mongoose.Schema({
    products:[OrderItemsSchema],
    transaction_Deatils:{},
    total_amount:{type:Number},
    address: {
        type:String,
        required:true
    },
    user:{
        type:ObjectId,
        ref:"User"
    },
    pincode:{
        type: String,
        min:6,
        max:6,
        required:true,
    },
    status:{
        type:String,
        default:"Recieved",
        enum:["Cancelled","Delivered","Shipped","Processing","Recieved","PaymentRequired"]
    },
},{timestamps:true});

module.exports = mongoose.model("Order",OrderSchema)