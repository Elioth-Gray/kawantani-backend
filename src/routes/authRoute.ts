import express from "express";
import {
  register,
  verifyAccount,
  login,
  me,
} from "../controller/authController";
import authMiddleware from "../middlewares/authMiddleware";

const authRouter = express.Router();

authRouter.post("/auth/register", register);
authRouter.post("/auth/verify", verifyAccount);
authRouter.post("/auth/login", login);
authRouter.get("/auth/me", authMiddleware, me);

export default authRouter;
