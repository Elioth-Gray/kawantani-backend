import express from "express";
import { register, verifyAccount, login } from "../controller/authController";

const authRouter = express.Router();

authRouter.post("/auth/register", register);
authRouter.post("/auth/verify", verifyAccount);
authRouter.post("/auth/login", login);

export default authRouter;
