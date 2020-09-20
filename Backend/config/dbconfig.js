
const mongoose = require('mongoose');


const connectDB = async() =>{
    const conn = await mongoose.connect( process.env.MONGO_URI,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology: true 
    })
    console.log(`DB connected to ${ conn.connection.host}`)
}

module.exports = connectDB;