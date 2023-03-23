import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import moment from "moment";

const users_Routes = express.Router();

users_Routes.get("/login", async (req, res) => {
  try {
    const { username, password } = req.query;
    console.log(username);
    console.log(password);

    if (!(username && password)) {
      res.status(400).send({
        status: "Утгуудаа бүрэн оруулна уу.",
      });
      return;
    }

    const user = await UserModel.findOne({
      $or: [{ username }, { email: username }],
    });
    console.log(user);
    if (user && (await bcrypt.compare(password, user?.password))) {
      console.log("correct");
      return;
    }
    return;
  } catch {}
});

users_Routes.post("/registerUser", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (hashedPassword) {
    const user = new UserModel({
      ...req.body,
      password: hashedPassword,
      registerDate: moment().format("LLL"),
    });
    const result = await user.save();
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send("err");
  }
});

export default users_Routes;
