import express from "express";
import { getMovie } from "../services/movie-service.js";

const moviesRoutes = express.Router();

moviesRoutes.get("/movies", async (req, res) => {
  const result = await getMovie();
  console.log(result);
  res.status(200).json(result);
});

// moviesRoutes.post("/movies", async (req, res) => {
//   const result = await Movies.insertMany([req.body]);
//   console.log(result);
//   res.status(200).json(result);
// });

export default moviesRoutes;
