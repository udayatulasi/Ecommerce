const dotenv = require('dotenv')
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const DBconnection = require('./config/dbconfig')
const cors = require("cors");

<<<<<<< HEAD
// importing routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products') 
=======

// const orderRoutes = require("./routes/order")


>>>>>>> 332e369e5999b9472a933b50950c03d21dcbf273

// DB connect
dotenv.config({path:'./config/db.env'});
DBconnection();



// middleware
app.use(bodyParser.json());
app.use(cookieParser( ));
app.use(cors());

<<<<<<< HEAD
// Routes
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
=======

// routes

app.use("/ecommerce",authRoutes)
app.use("/ecommerce",orderRoutes)



>>>>>>> 332e369e5999b9472a933b50950c03d21dcbf273


// port
const port =  process.env.PORT || 8000;


// starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})