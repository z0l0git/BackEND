//Delete User

import fs from "fs";
const userDB =
  "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/users.json";
// const userDB = "/Users/23LP5833/Desktop/backend/nodejs/models/users.json";

export const deleteUser = async (req, res) => {
  const { email: upEmail } = req.body;
  try {
    const users = JSON.parse(fs.readFileSync(userDB));
    const user = users.find((user) => user.email === upEmail);
    if (!user) {
      throw new Error("User not found");
    }
    const newUsers = users.filter((user) => user.email !== upEmail);
    fs.writeFileSync(userDB, JSON.stringify(newUsers));
    return "deleted";
  } catch (err) {
    throw new Error(err.message);
  }
};
