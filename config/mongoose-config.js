import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_CONNECTION_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose.Connection;
