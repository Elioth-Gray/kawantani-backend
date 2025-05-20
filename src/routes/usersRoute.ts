import express from 'express';
import {
  getAllUsers,
  getUserById,
  me,
  update,
  updateProfile,
} from '../controller/userController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';
import { createMulterUploader } from '../utils/multer/multer';

const usersRoute = express.Router();
const uploadUserAvatar = createMulterUploader("users")

usersRoute.get('/users/me', authMiddleware, me);

usersRoute.get(
  '/users',
  authMiddleware,
  roleMiddleware(['admin']),
  getAllUsers
);
usersRoute.get(
  '/users/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  getUserById
);

usersRoute.put(
  '/users/me/update',
  authMiddleware,
  roleMiddleware(['user']),
  uploadUserAvatar.single('avatar'),
  updateProfile
);
usersRoute.put(
  '/users/edit/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  update
);

export default usersRoute;