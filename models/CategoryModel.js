import mongoose from "mongoose";
import { nanoid } from "nanoid";

const categotySchema = new mongoose.Schema({
  id: {
    type: String,
    default: nanoid(),
  },
  name: String,
  image: String,
});
