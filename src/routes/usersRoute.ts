import express from "express";
import { getAllUsers, getUserById } from "../controller/userController";

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsers);
usersRouter.get("/users/:id", getUserById);

export default usersRouter;
