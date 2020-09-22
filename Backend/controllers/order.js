const Order = require('../models/Order')

// Get a product by Id
exports.getOrderById = async (req,res,next,id) => {
    try{
    let order = await Order.findById(id)
    if(!order){
        return res.status(400).json({success:false,data:'Unable to find order'})
    }
    req.order = order
    next()
}catch(error){
    return res.status(400).json({success : false,data: 'Unable to get A order'})
    
}
}


// Get a product
exports.getAOrder = () => {
        let order = req.order;
        return res.status(200).json({success:false,data:order})
}



// // Get all products
// exports.getAllOrders = async( req, res) => {

//     try {
//         const order = await Order.find()
//         if(!order) {
//             return res.status(400).json({success : false,data: 'Unable to get all order'})

//         }
//        return res.status(200).json({ success: true, data:})

//     }

//     catch( err){
//         return res.status(400).json({success : false,data: 'Unable to get all order'})
       
//     }

// }


// Create product
exports.createOrder = async( req, res) => {

    try {
        const order = await Order.create(req.body)
        if(!order) {
            return res.status(400).json({success : false,data: 'order creation failed'})

        }
        return res.status(200).json({ success: true, data: order})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'order creation failed'})
       
    }

}


// Update product
exports.updateOrder = async( req, res) => {

    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body)
        if(!order) {
            return res.status(400).json({success : false,data: 'Order updation failed'
            })

        }
      return res.status(200).json({ success: true, data:order})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Order updation failed'})
       
    }

}


// Delete product
exports.deleteOrder = async( req, res) =>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order) {
            return res.status(400).json({success : false,data: 'Order deletion failed'})

        }

       return res.status(200).json({ success: true, data:order})

    }

    catch( err){
        return res.status(400).json({success : false,data: 'Order deletion failed'})
       
    }
}

exports.changeOrderstatus = async (req,res) =>{
    try{
        
    }
    catch(error){

    }
}