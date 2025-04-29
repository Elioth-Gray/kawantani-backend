import express from "express";
import { getAllUsers } from "../controller/userController";

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsers);

export default usersRouter;
