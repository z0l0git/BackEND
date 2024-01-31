import fs from "fs";

// const userDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/users.json";

const userDB = "./models/users.json";

//Get logged in user

export const getLoggedInUser = async (req, res) => {
  const { email } = req.body;
  try {
    const allUsers = await JSON.parse(fs.readFileSync(userDB, "utf-8"));
    const user = allUsers.find((user) => user.email === email);
    if (!user) {
      throw new Error("Email or Password incorrect");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get user by email

export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const allUsers = await fs.readFileSync(userDB, "utf-8");
    const parsedUsers = JSON.parse(allUsers);
    if (!parsedUsers) {
      return null;
    }
    const user = parsedUsers.find((user) => user.email === email);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

//Get all users

export const allUsers = async (req, res) => {
  try {
    const data = fs.readFileSync(userDB, "utf-8");
    const parsedData = JSON.parse(data);
    return parsedData;
  } catch (error) {
    throw new Error(error);
  }
};
