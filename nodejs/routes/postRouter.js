import express from "express";
import {
  getAllPostsService,
  getPostByIdService,
  createPostService,
  deletePostService,
  updatePostService,
} from "../controllers/postsController.js";

const postRouter = express.Router();

//Get Functions
postRouter.get("/posts", getAllPostsService);
postRouter.get("/posts/:userID", getPostByIdService);

//Post Functions
postRouter.post("/posts", createPostService);

//Put Functions
postRouter.put("/posts/:id", updatePostService);

//Delete Functions
postRouter.delete("/posts/:id", deletePostService);

export default postRouter;
