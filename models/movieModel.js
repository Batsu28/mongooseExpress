import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    type: String,
    year: Date,
  },
  {
    collection: "movies",
  }
);

const Movies = mongoose.model("Movies", movieSchema, "movies");
export default Movies;
