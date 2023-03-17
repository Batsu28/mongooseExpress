import express from "express";
import cors from "cors";
import "./config/mongoose-config.js";
import users_Routes from "./routers/users-api.js";
import products_Routes from "./routers/products-api.js";
const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

app.use(users_Routes);
app.use(products_Routes);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
