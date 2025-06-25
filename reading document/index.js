import connectDB from "./MongoDb-and-Mongoose/activating database/connectdb.js";
import express from "express";
//import singledoc from "./reading document/singledoc.js";
//import alldocs from "./reading document/alldocs.js";
import limitdoc from "./reading document/limitdoc.js";
const app=express();
const port=process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/movies";
connectDB(DATABASE_URL);
//alldocs();
//singledoc()
limitdoc()
app.listen(port,()=>{console.log("Server running succesfully.....")}
);