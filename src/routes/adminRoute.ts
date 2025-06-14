import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { me } from '../controller/adminController';
import roleMiddleware from '../middlewares/roleMiddleware';

const adminRoute = express.Router();

adminRoute.get('/admin/me', authMiddleware, roleMiddleware(['admin']), me);

export default adminRoute;
