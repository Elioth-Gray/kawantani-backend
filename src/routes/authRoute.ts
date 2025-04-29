import express from "express";
import { register, verifyAccount, login } from "../controller/authController";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/verify", verifyAccount);
router.post("/auth/login", login);

export default router;
