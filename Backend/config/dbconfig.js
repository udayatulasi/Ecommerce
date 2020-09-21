
const mongoose = require('mongoose');


const connectDB = async(res,err) =>{
    try{
    const conn = await mongoose.connect( process.env.MONGO_URI,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology: true 
    })
    console.log(`DB connected to ${ conn.connection.host}`)
}
catch{
    console.log(err)
}
}

module.exports = connectDB;