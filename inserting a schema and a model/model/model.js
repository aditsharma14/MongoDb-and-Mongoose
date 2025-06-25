import mongoose from "mongoose";
import { type } from "os";
const movieschema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    ratings:{type:Number,required:true,min:1,max:5},
    money:{
        type:mongoose.Decimal128,
        required:true,
        validate:(v)=>v>100,
    },
    genre:{type:Array},
    isActive: { type: Boolean },
    comments: [
        { value: { type: String }, publish: { type: Date, default: Date.now } },
    ],
})
const moviemodel=mongoose.model("movie",movieschema);
const createDoc = async () => {
  try {
    // Creating new document
    const m1 = new moviemodel({
      name: "Extraction 2",
      ratings: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
const result = await m1.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default moviemodel;