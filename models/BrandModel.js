import mongoose from "mongoose";
import { nanoid } from "nanoid";

const brandSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: nanoid(),
    },
    name: String,
    image: String,
  },
  {
    collection: "brands",
  }
);

const BrandModel = mongoose.model("brand", brandSchema);
export default BrandModel;
