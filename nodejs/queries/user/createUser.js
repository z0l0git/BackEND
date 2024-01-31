//Create user

import fs from "fs";

// const userDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/users.json";
const userDB = "./models/users.json";

export const createNewUser = async (req, res) => {
  const { username, email, password, followers, following, profile_pic } =
    req.body;
  try {
    if (
      !username ||
      !email ||
      !password ||
      !followers ||
      !following ||
      !profile_pic
    ) {
      throw new Error("Please fill all the fields");
    }
    const newUserFile = await fs.readFileSync(userDB, "utf-8");

    console.log(newUserFile);
    const data = JSON.parse(newUserFile);
    if (data.find((user) => user.email === email)) {
      throw new Error("User already exists");
    }
    data.push({
      username,
      email,
      password,
      followers,
      following,
      profile_pic,
    });
    await fs.writeFileSync(userDB, JSON.stringify(data));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};
