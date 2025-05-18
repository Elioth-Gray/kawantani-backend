import express from 'express';
import {
  register,
  verifyAccount,
  loginUserCredential,
  me,
  sendActivation,
  loginAdminCredential,
} from '../controller/authController';
import authMiddleware from '../middlewares/authMiddleware';
import { createMulterUploader } from '../utils/multer/multer';

const authRouter = express.Router();
const uploadUserAvatar = createMulterUploader('users');

authRouter.post('/auth/register', uploadUserAvatar.single('avatar'), register);
authRouter.post('/auth/activate', authMiddleware, verifyAccount);
authRouter.post('/auth/login', loginUserCredential);
authRouter.get('/auth/me', authMiddleware, me);
authRouter.post('/auth/sendcode', authMiddleware, sendActivation);
authRouter.post('/auth/admin/login', loginAdminCredential);

export default authRouter;
