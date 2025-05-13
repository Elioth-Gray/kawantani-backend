import express from 'express';
import { getAllUsers, getUserById } from '../controller/userController';

const usersRoute = express.Router();

usersRoute.get('/users', getAllUsers);
usersRoute.get('/users/:id', getUserById);

export default usersRoute;
