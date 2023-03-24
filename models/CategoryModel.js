import mongoose from "mongoose";
import { nanoid } from "nanoid";

const categotySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: nanoid(),
    },
    name: String,
    image: String,
  },
  { collection: "categories" }
);

const CategoryModel = mongoose.model("category", categotySchema);

export default CategoryModel;
