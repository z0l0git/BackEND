import fs from "fs";
const userDB = "./models/users.json";
import { compareHash } from "../utils/passwordHash.js";

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.send("Please provide email and password");
    }
    const users = await JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = users.find((user) => user.email === email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const checkPassword = compareHash(password, user.password);

    if (checkPassword) {
      req.userData = user;
      next();
    } else {
      res.send("Invalid email or password");
    }
  } catch (error) {
    res.send(error.message);
  }
};
