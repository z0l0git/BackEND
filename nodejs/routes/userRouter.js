import express from "express";
import { getUserByEmailService } from "../controllers/usersController.js";
import { getAllUsersService } from "../controllers/usersController.js";
import { createNewUserService } from "../controllers/usersController.js";
import { updateUserService } from "../controllers/usersController.js";
import { deleteUserService } from "../controllers/usersController.js";

const userRouter = express.Router();

//Get Functions

userRouter.get("/users/:email", getUserByEmailService);
userRouter.get("/users", getAllUsersService);

//Post Functions

userRouter.post("/users", createNewUserService);

//Update Functions

userRouter.put("/users/:email", updateUserService);

//Delete Functions

userRouter.delete("/users/:email", deleteUserService);

export default userRouter;
