import express from "express";
import { getProducts } from "../services/prod-service.js";

const products_Routes = express.Router();

products_Routes.get("/products", async (req, res) => {
  const result = await getProducts();
  result ? res.status(200).send(result) : res.send("asd");
});

export default products_Routes;
