import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { getMethod, getMethodId } from '../controller/paymentMethodController';

const paymentMethodRoute = express.Router();

paymentMethodRoute.get('/payments', authMiddleware, getMethod);
paymentMethodRoute.get('/payments/:id', authMiddleware, getMethodId);

export default paymentMethodRoute;
