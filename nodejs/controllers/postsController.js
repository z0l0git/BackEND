import { allPosts, getPostById } from "../queries/post/getPost.js";
import { createPost } from "../queries/post/createPost.js";

//Get all Posts

export const getAllPostsService = async (req, res) => {
  try {
    const posts = await allPosts(req);
    res.send(JSON.stringify(posts));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Get Post by userID

export const getPostByIdService = async (req, res) => {
  try {
    const post = await getPostById(req);
    res.send(JSON.stringify(post));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Create Post

export const createPostService = async (req, res) => {
  try {
    const post = await createPost(req);
    res.send(JSON.stringify(post));
  } catch (error) {
    res.status(500).send(error.message);
  }
};
