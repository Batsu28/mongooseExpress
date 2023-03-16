import express from "express";

const products_routes = express.Router();

products_routes.get("/products", (req, res) => {
  console.log("testing");
});

export default products_routes;
