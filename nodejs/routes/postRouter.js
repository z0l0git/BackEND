import express from "express";
import {
  getAllPostsService,
  getPostByIdService,
  createPostService,
} from "../controllers/postsController.js";

const postRouter = express.Router();

//Get Functions
postRouter.get("/posts", getAllPostsService);
postRouter.get("/posts/:userID", getPostByIdService);

//Post Functions
postRouter.post("/posts", createPostService);

//Put Functions

//Delete Functions
export default postRouter;
