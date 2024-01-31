import fs from "fs";
import { v4 } from "uuid";
// const postDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/posts.json";

const postDB = "./models/posts.json";

const date = new Date();

let currentDay = String(date.getDate()).padStart(2, "0");

let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

let currentYear = date.getFullYear();

export const createPost = async (req, res) => {
  const { ...params } = req.body;
  try {
    if (!params.userID || !params.post_imgs) {
      throw new Error("Please provide atleast userID and post image");
    }
    const newPost = await fs.readFileSync(postDB, "utf-8");
    const data = JSON.parse(newPost);
    data.push({
      userID: params.userID,
      id: v4(),
      post_imgs: params.post_imgs,
      likes: params.likes,
      created_at: `${currentYear}-${currentMonth}-${currentDay}`,
      comments: params.comments,
    });
    await fs.writeFileSync(postDB, JSON.stringify(data));
    return "Post created successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
