import express from 'express';
import {
  register,
  verifyAccount,
  loginUserCredential,
  sendActivation,
  loginAdminCredential,
  loginFacilitatorCredential,
} from '../controller/authController';
import authMiddleware from '../middlewares/authMiddleware';
import { createMulterUploader } from '../utils/multer/multer';

const authRouter = express.Router();
const uploadUserAvatar = createMulterUploader('users');

authRouter.post('/auth/register', uploadUserAvatar.single('avatar'), register);
authRouter.post('/auth/activate', authMiddleware, verifyAccount);
authRouter.post('/auth/login', loginUserCredential);
authRouter.post('/auth/sendcode', authMiddleware, sendActivation);
authRouter.post('/auth/admin/login', loginAdminCredential);
authRouter.post('/auth/facilitator/login', loginFacilitatorCredential);

export default authRouter;
