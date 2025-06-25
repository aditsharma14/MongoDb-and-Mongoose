import connectdb from "./inserting a single document/database.js";
import createDoc from "./inserting a single document/schema.js";
import express from "express";
const app=express();
const port=process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/movies";
connectdb(DATABASE_URL);
createDoc();
app.listen(port,()=>{console.log("Server running succesfully.....")}
);