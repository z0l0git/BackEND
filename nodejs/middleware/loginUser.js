import fs from "fs";
const userDB = "./models/users.json";

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
    if (user.password === password) {
      next();
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.send(error.message);
  }
};
