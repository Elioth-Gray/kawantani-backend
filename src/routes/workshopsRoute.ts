import express from 'express';
import {
  create,
  deleteWorks,
  getAll,
  verify,
  getById,
  register,
  pay,
  getOwnWorkshop,
  getParticipant,
  getAllActive,
} from '../controller/workshopController';
import authMiddleware from '../middlewares/authMiddleware';
import { createMulterUploader } from '../utils/multer/multer';
import roleMiddleware from '../middlewares/roleMiddleware';

const workshopsRouter = express.Router();
const uploadWorkshopImage = createMulterUploader('workshops');

workshopsRouter.post(
  '/workshops/create',
  authMiddleware,
  roleMiddleware(['facilitator']),
  uploadWorkshopImage.single('image'),
  create,
);
workshopsRouter.put(
  '/workshops/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  verify,
);
workshopsRouter.get(
  '/workshops',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getAll,
);
workshopsRouter.get('/workshops/verified', getAllActive);
workshopsRouter.get(
  '/workshops/own',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getOwnWorkshop,
);
workshopsRouter.get(
  '/workshops/participants',
  authMiddleware,
  roleMiddleware(['facilitator']),
  getParticipant,
);
workshopsRouter.get('/workshops/:id', authMiddleware, getById);
workshopsRouter.delete(
  '/workshops/:id',
  authMiddleware,
  roleMiddleware(['admin', 'facilitator']),
  deleteWorks,
);
workshopsRouter.post(
  '/workshops/:id/register',
  authMiddleware,
  roleMiddleware(['user']),
  register,
);
workshopsRouter.patch(
  '/workshops/:id/register',
  authMiddleware,
  roleMiddleware(['user']),
  pay,
);

export default workshopsRouter;
