import connectdb from "./inserting a schema and a model/database activation/db.js";
import moviemodel from "./inserting a schema and a model/model/model.js";
import express from "express";
const app=express();
const port=process.env.PORT|| 8000;
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schooldb";
connectdb(DATABASE_URL);
app.listen(8000,()=>{
    console.log("Server is running....");
    
})