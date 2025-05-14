import express from 'express';
import {
  deleteFac,
  get,
  register,
  update,
  getById,
} from '../controller/facilitatorController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';

const facilitatorRoute = express.Router();

facilitatorRoute.get(
  '/facilitator',
  authMiddleware,
  roleMiddleware(['admin']),
  get
);
facilitatorRoute.get(
  '/facilitator/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  getById
);
facilitatorRoute.post('/facilitator/register', authMiddleware, register);
facilitatorRoute.put('/facilitator/:id', authMiddleware, update);
facilitatorRoute.delete('/facilitator/:id', authMiddleware, deleteFac);

export default facilitatorRoute;
