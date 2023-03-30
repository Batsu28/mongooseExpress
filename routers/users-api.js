import express from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import moment from "moment";
import jwt from "jsonwebtoken";

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
      const token = jwt.sign(
        { user_id: user._id, role: user.role },
        "MySuperDuperPrivateKey",
        {
          expiresIn: "30m",
        }
      );
      console.log(token);
      res.status(200).json({ token, username: user.username });
      return;
    }
    res.status(400).json({ message: "incorrect username or password" });
    return;
  } catch (err) {
    console.log(err);
  }
});

users_Routes.post("/registerUser", async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
});

export default users_Routes;
