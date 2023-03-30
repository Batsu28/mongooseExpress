import * as Cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

Cloudinary.config({
  cloud_name: "ddqfzghbl",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

export default Cloudinary;
