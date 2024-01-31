import fs from "fs";
const userDB = "./models/users.json";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error("Please provide email and password");
    }
    const users = await JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) {
      throw new Error("Invalid email or password");
    } else {
      return user;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
