import { allPosts, getPostById } from "../queries/post/getPost.js";
import { createPost } from "../queries/post/createPost.js";
import { deletePost } from "../queries/post/deletePost.js";
import { updatePost } from "../queries/post/updatePost.js";

//Get all Posts}

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

//Delete Post
export const deletePostService = async (req, res) => {
  try {
    const post = await deletePost(req);
    res.send(JSON.stringify(post));
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Update Post

export const updatePostService = async (req, res) => {
  try {
    const post = await updatePost(req);
    res.send(JSON.stringify(post));
  } catch (error) {
    res.status(500).send(error.message);
  }
};
