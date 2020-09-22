const dotenv = require('dotenv')
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const DBconnection = require('./config/dbconfig')
const cors = require("cors");

// importing routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products') 

// DB connect
dotenv.config({path:'./config/db.env'});
DBconnection();



// middleware
app.use(bodyParser.json());
app.use(cookieParser( ));
app.use(cors());

// Routes
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);


// port
const port =  process.env.PORT || 8000;


// starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})