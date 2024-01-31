import { getUserByEmail, allUsers } from "../queries/user/getUser.js";
import { createNewUser } from "../queries/user/createUser.js";
import { updateUser } from "../queries/user/updateUser.js";
import { deleteUser } from "../queries/user/deleteUser.js";
import { loginUser } from "../queries/user/loginUser.js";
//Get user by Email

export const getUserByEmailService = async (req, res) => {
  try {
    const user = await getUserByEmail(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Get all users

export const getAllUsersService = async (req, res) => {
  try {
    const users = await allUsers(req);
    res.send(JSON.stringify(users));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Create user

export const createNewUserService = async (req, res) => {
  try {
    const user = await createNewUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Login user

export const loginUserService = async (req, res) => {
  try {
    const user = await loginUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Update user

export const updateUserService = async (req, res) => {
  try {
    const user = await updateUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//Delete user
export const deleteUserService = async (req, res) => {
  try {
    const user = await deleteUser(req);
    res.send(JSON.stringify(user));
  } catch (err) {
    res.status(500).send(err.message);
  }
};
