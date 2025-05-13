import express from 'express';
import {
  register,
  verifyAccount,
  login,
  me,
  sendActivation,
} from '../controller/authController';
import authMiddleware from '../middlewares/authMiddleware';

const authRouter = express.Router();

authRouter.post('/auth/register', register);
authRouter.post('/auth/verify', authMiddleware, verifyAccount);
authRouter.post('/auth/login', login);
authRouter.get('/auth/me', authMiddleware, me);
authRouter.post('/auth/sendcode', authMiddleware, sendActivation);

export default authRouter;
