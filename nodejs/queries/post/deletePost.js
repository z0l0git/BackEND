import fs from "fs";

const postDB = "/Users/23LP5833/Desktop/backend/nodejs/models/posts.json";

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await fs.readFile(postDB, (err, data) => {
      if (err) {
        throw new Error("error while reading file");
      } else {
        const posts = JSON.parse(data);
        const newPosts = posts.filter((post) => post.id !== id);
        fs.writeFile(postDB, JSON.stringify(newPosts), (err) => {
          if (err) {
            throw new Error("error while writing file");
          } else {
            return "Post deleted successfully";
          }
        });
      }
    });

    return "Post deleted successfully";
  } catch (err) {
    throw new Error(err.message);
  }
};
