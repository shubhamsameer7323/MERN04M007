const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json()) // to parse json data from request body.

const port= process.env.PORT;

app.use("/user",userRoutes)

app.use("/api",(req,res)=>{
    res.send("welcome to backend !");
})

app.listen(port,()=>{
    console.log("My server is running",port);
})
