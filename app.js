import express from "express";
import cors from "cors";
import "./config/mongoose-config.js";
import products_routes from "./routers/products.js";
import moviesRoutes from "./routers/movie-api.js";

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

app.use(products_routes);
app.use(moviesRoutes);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
