//Update User

import fs from "fs";
import { makeHash } from "../../utils/passwordHash.js";
// const userDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/users.json";
const userDB = "./models/users.json";

export const updateUser = async (req, res) => {
  const {
    email: upEmail,
    password,
    username,
    followers,
    following,
    profile_pic,
  } = req.body;

  try {
    if (
      !upEmail ||
      !password ||
      !username ||
      !followers ||
      !following ||
      !profile_pic
    ) {
      throw new Error("Please fill all the fields");
    }
    const users = JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = users.find((user) => user.email === upEmail);
    if (!user) {
      throw new Error("User not found");
    }
    const index = users.findIndex((user) => user.email === upEmail);
    const updatedUser = {
      ...user,
      password: makeHash(password),
      username,
      followers,
      following,
      profile_pic,
    };
    users[index] = updatedUser;
    fs.writeFileSync(userDB, JSON.stringify(users));
    return "User updated successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
