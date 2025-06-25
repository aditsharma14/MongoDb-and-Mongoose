import mongoose from "mongoose";
const connectDB=async (DATABASE_URL)=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Database Connected.....");
        
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB;
//index.js
// import express from "express";
// import connectDB from "./db/connectdb.js";
// const app=express();
// const port=process.env.PORT || 8000;
// const  DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schooldb";
// connectDB(DATABASE_URL);
// app.listen(port,()=>{
//     console.log(`Database running on port ${port}`);
    
// })