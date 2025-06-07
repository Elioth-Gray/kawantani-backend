import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { getAll, getById } from '../controller/plantController';

const plantRoute = express.Router();

plantRoute.get('/plants', getAll);
plantRoute.get('/plants/:id', authMiddleware, getById);

export default plantRoute;
