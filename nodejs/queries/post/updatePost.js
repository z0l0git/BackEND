import fs from "fs";

// const postDB =
//   "C:/Users/zolba/OneDrive/Desktop/Projects/Backend/BackEND/nodejs/models/posts.json";
const postDB = "/Users/23LP5833/Desktop/backend/nodejs/models/posts.json";

export const updatePost = async (req, res) => {
  const { post_imgs, likes, comments } = req.body;
  const { id } = req.params;
  try {
    if (!id || !post_imgs || !likes || !comments) {
      throw new Error("Please fill all the fields");
    }
    const data = await fs.readFileSync(postDB, "utf-8");
    const posts = JSON.parse(data);
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new Error("Post not found");
    }
    post.post_imgs = post_imgs;
    post.likes = likes;
    post.comments = comments;
    await fs.writeFileSync(postDB, JSON.stringify(posts));
    return "Post updated successfully";
  } catch (error) {
    throw new Error(error.message);
  }
};
