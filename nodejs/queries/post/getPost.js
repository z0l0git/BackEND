import fs from "fs";

// const postDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/posts.json";
const postDB = "/Users/23LP5833/Desktop/backend/nodejs/models/posts.json";

//Get All Posts

export const allPosts = async (req, res) => {
  try {
    const posts = await fs.readFileSync(postDB, "utf-8");
    const parsedPosts = JSON.parse(posts);
    return parsedPosts;
  } catch (error) {
    throw new Error(error.message);
  }
};

//Get Post By userID

export const getPostById = async (req, res) => {
  try {
    const { userID } = req.params;
    const allPosts = await fs.readFileSync(postDB, "utf-8");
    const parsedPosts = JSON.parse(allPosts);
    if (!parsedPosts) {
      return null;
    }
    const post = parsedPosts.filter((post) => post.userID === userID);
    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};
