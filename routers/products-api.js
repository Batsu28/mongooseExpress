import express from "express";
import cloudinary from "../config/cloudinary-config.js";
import { getProducts } from "../services/prod-service.js";

const products_Routes = express.Router();

const res = cloudinary.v2.uploader.upload(
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }
);

res
  .then((data) => {
    console.log(data);
    console.log(data.secure_url);
  })
  .catch((err) => {
    console.log(err);
  });

products_Routes.get("/products", async (req, res) => {
  const result = await getProducts();
  result ? res.status(200).send(result) : res.send("asd");
});

export default products_Routes;
