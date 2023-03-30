import mongoose from "mongoose";
import { nanoid } from "nanoid";

const categotySchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: nanoid(),
    },
    name: String,
    image: String,
  },
  { collection: "Categories" }
);

const CategoryModel = mongoose.model("Category", categotySchema);

export default CategoryModel;
