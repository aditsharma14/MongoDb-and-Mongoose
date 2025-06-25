//will read only a single document from the collection
import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 40000,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
});
const MovieModel=mongoose.model("movies",movieSchema);
const singledoc=async ()=>{
  try {
    const result=await MovieModel.findById("685bcb129e94ba1a63b9fbc6");
      console.log(result.name);
      console.log(result.ratings);
      console.log(result.money);
    
  } catch (error) {
    console.log(error);
    
  };

}
export default singledoc;
