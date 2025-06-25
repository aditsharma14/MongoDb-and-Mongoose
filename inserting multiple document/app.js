import connectdb from "./inserting multiple document/database.js";
import express from "express";
import insertmanydocs from "./inserting multiple document/schema.js";
const app=express();
const port=process.env.PORT||8000;
const DATABASE_URL=process.env.DATABASE_URL|| "mongodb://127.0.0.1:27017/movies";
connectdb(DATABASE_URL);
insertmanydocs()
app.listen(port,()=>{console.log("Server running succesfully.....")}
);