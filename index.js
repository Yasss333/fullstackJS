// const express = require("express");
import express from "express";
import dotenv  from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req , res) => {
  res.send("Cohort !");
});
app.get("/yash", (req , res) => {
  res.send("hello Yash !");
});

app.get("/hitesh",(req , res)=>{
    res.send("Hey people !");
    
});

console.log(process.env);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
