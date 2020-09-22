const dotenv = require('dotenv')
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const DBconnection = require('./config/dbconfig')
const cors = require("cors");

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")

// DB connect
dotenv.config({path:'./config/db.env'});
DBconnection();



// middleware
app.use(bodyParser.json());
app.use(cookieParser( ));
app.use(cors());

// routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)


// port
const port =  process.env.PORT || 8000;


// starting a server
app.listen(port,()=>{
    console.log(`app is running at ${port}`)
})