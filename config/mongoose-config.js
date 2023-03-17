import mongoose from "mongoose";

const mongodb_connection =
  "mongodb+srv://Batsu:panda0328@cluster0.drwdfkp.mongodb.net/ecommerce";
mongoose
  .connect(mongodb_connection)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err);
  });

export default mongoose.Connection;
