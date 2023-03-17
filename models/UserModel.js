import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userName: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    registerDate: Date,
  },
  { collection: "users" }
);

const UserModel = mongoose.model("UserModel", userSchema, "users");

export default UserModel;
