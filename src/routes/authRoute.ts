import express from "express";
import { register, verifyAccount } from "../controller/authController";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/verify", verifyAccount);

export default router;
