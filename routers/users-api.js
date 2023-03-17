import express from "express";

const users_Routes = express.Router();

users_Routes.get("/users", (req, res) => {
  console.log("testing user");
});

export default users_Routes;
