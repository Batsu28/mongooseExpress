import express from "express";

const CategoryRoutes = express.Router();

CategoryRoutes.get("/categories", async (req, res) => {
  console.log("category", res.body);
});

CategoryRoutes.put("/category", async (req, res) => {
  console.log("edit category", res.body);
});

CategoryRoutes.post("/category", async (req, res) => {
  console.log("add new category", res.body);
});

CategoryRoutes.delete("/category", async (req, res) => {
  console.log("delete category", res.body);
});

export default CategoryRoutes;
