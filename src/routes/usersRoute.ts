import express from 'express';
import {
  getAllUsers,
  getUserById,
  update,
  updateProfile,
} from '../controller/userController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';

const usersRoute = express.Router();

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
  '/users/me/edit',
  authMiddleware,
  roleMiddleware(['user']),
  updateProfile
);
usersRoute.put(
  '/users/edit/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  update
);

export default usersRoute;
