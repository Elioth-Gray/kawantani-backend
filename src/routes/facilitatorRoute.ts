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
import { createMulterUploader } from '../utils/multer/multer';

const facilitatorRoute = express.Router();
const uploadFacilitatorAvatar = createMulterUploader('facilitators');

facilitatorRoute.get(
  '/facilitator',
  authMiddleware,
  roleMiddleware(['admin']),
  get,
);
facilitatorRoute.get(
  '/facilitator/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  getById,
);
facilitatorRoute.post(
  '/facilitator/register',
  authMiddleware,
  roleMiddleware(['admin']),
  uploadFacilitatorAvatar.single('avatar'),
  register,
);
facilitatorRoute.put(
  '/facilitator/:id',
  authMiddleware,
  roleMiddleware(['admin', 'facilitator']),
  uploadFacilitatorAvatar.single('avatar'),
  update,
);
facilitatorRoute.delete('/facilitator/:id', authMiddleware, deleteFac);

export default facilitatorRoute;
