// const express = require("express");
import express from "express";
import dotenv  from "dotenv";
import cors from "cors";
import db from "./Utilities/db.js";

//import all routes 
  import  userRoutes from "./routes/user.routes.js"


dotenv.config();

const app = express();

app.use(
  cors({
    origin:"http://localhost:3000",
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization']
  })
);

app.use(express.json( ));   
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 4000;

app.get("/", (req , res) => { 
  res.send("Cohort !");
});
app.get("/yash", (req , res) => {
  res.send("hello Yash !");
});

app.get("/hitesh",(req , res)=>{
    res.send("Hey people !");
    
});
// conect to db 
db();
//user routes 
  app.use("/api/v1/users/",userRoutes)
  
console.log(process.env);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
