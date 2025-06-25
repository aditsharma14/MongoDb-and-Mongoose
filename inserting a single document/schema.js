import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});
const MovieModel = mongoose.model("Movie", movieSchema);
const createDoc=async ()=>{
    const m1=new MovieModel({
        name:"Animal",
        ratings:4.8,
        money:3500,
        genre:["Violent","Thriller","Suspense","Family Drama"],
        isActive:true,
        comments:[{value:"That was one of it's kind...."}],
    })
    const result=await m1.save();
    console.log(result);
    
};
export default createDoc;