import express from 'express';
import {
  getAllUsers,
  getUserById,
  updateProfile,
} from '../controller/userController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';

const usersRoute = express.Router();

usersRoute.get('/users', getAllUsers);
usersRoute.get('/users/:id', getUserById);
usersRoute.put(
  '/users/me/edit',
  authMiddleware,
  roleMiddleware(['user']),
  updateProfile
);

export default usersRoute;
