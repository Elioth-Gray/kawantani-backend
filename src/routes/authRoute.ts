import express from 'express';
import {
  register,
  verifyAccount,
  loginUserCredential,
  me,
  sendActivation,
} from '../controller/authController';
import authMiddleware from '../middlewares/authMiddleware';

const authRouter = express.Router();

authRouter.post('/auth/register', register);
authRouter.post('/auth/activate', authMiddleware, verifyAccount);
authRouter.post('/auth/login', loginUserCredential);
authRouter.get('/auth/me', authMiddleware, me);
authRouter.post('/auth/sendcode', authMiddleware, sendActivation);

export default authRouter;
