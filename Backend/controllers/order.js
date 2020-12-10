const Order = require('../models/Order')

// Get a product by Id
exports.getOrderById = async (req,res,next,id) => {
    try{
    let order = await Order.findById(id)
    if(!order){
        // return res.status(400).json({success:false,data:'Unable to find order'})
        const error = new Error('cannot get order')
        error.statusCode = 400;
        throw error
    }
    req.order = order
    next()
}catch(error){
    // return res.status(400).json({success : false,data: 'Unable to get A order'})
    if(!err.statusCode) {
        err.statusCode = 500;
    }
    next(err);
    
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
            // return res.status(400).json({success : false,data: 'order creation failed'})
            const error = new Error('cannot get create order ')
            error.statusCode = 400;
            throw error
        }
        return res.status(200).json({ success: true, data: order})
    }
    catch( err){
        // return res.status(400).json({success : false,data: 'order creation failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}


// Update product
exports.updateOrder = async( req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, {$set:req.body},{useFindAndModify:false})
        if(!order) {
            // return res.status(400).json({success : false,data: 'Order updation failed'})
            const error = new Error('cannot get update order')
            error.statusCode = 400;
            throw error

        }
      return res.status(200).json({ success: true, data:order})
    }
    catch( err){
        // return res.status(400).json({success : false,data: 'Order updation failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }

}


// Delete product
exports.deleteOrder = async( req, res) =>{
    try {
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order) {
            // return res.status(400).json({success : false,data: 'Order deletion failed'})
            const error = new Error('cannot get delete order ')
            error.statusCode = 400;
            throw error

        }

       return res.status(200).json({ success: true, data:order})
    }

    catch( err){
        // return res.status(400).json({success : false,data: 'Order deletion failed'})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    
        
    }
}

exports.changeOrderstatus = async (req,res) =>{
    try{
        let orderStatus = await Order.findByIdAndUpdate(req.body.orderId,{$set:{status:req.body.orderStatus}},{upsert:true,new:true,setDefaultsOnInsert:true})
        if(!orderStatus)
        {
            const error = new Error('unable to change orderstatus ')
            error.statusCode = 400;
            throw error
        }
        return res.status(201).json({success:true,data:orderStatus})
    }
    catch(error){
        // return res.status(400).json({success:false,data:"orderStatus updatation failed"})
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}