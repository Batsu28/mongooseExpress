import express from "express";

const BrandRoutes = express.Router();

BrandRoutes.get("/brands", async (req, res) => {
  console.log("brand", res.body);
});

BrandRoutes.put("/brand", async (req, res) => {
  console.log("edit brand", res.body);
});

BrandRoutes.post("/brand", async (req, res) => {
  console.log("add new brand", res.body);
});

BrandRoutes.delete("/brand", async (req, res) => {
  console.log("delete brand", res.body);
});

export default BrandRoutes;
