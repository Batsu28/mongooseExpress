import express from "express";
import { nanoid } from "nanoid";
import cloudinary from "../config/cloudinary-config.js";
import { addProduct, getProducts } from "../services/prod-service.js";
import upload from "../util/multer.js";

const products_Routes = express.Router();

products_Routes.get("/products", async (req, res) => {
  const result = await getProducts();
  result ? res.status(200).json(result) : res.send("asd");
});

products_Routes.post("/product", upload.single("file"), async (req, res) => {
  let product = JSON.parse(req.body.product);
  const respond = await cloudinary.v2.uploader.upload(`${req.file.path}`, {
    folder: "",
  });
  product = await { ...product, image: respond?.secure_url, id: nanoid() };
  const result = await addProduct(product);
  res.status(200).send(result);
});

export default products_Routes;
