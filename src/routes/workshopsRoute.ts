import express from 'express';
import { create, deleteWorks } from '../controller/workshopController';
import authMiddleware from '../middlewares/authMiddleware';
import { createMulterUploader } from '../utils/multer/multer';
import roleMiddleware from '../middlewares/roleMiddleware';
import { get } from '../controller/facilitatorController';
import { getById } from '../services/userServices';

const workshopsRouter = express.Router();
const uploadWorkshopImage = createMulterUploader('users');

workshopsRouter.post(
  '/workshops/create',
  authMiddleware,
  roleMiddleware(['facilitator']),
  uploadWorkshopImage.single('avatar'),
  create,
);
workshopsRouter.get('/workshops', get);
workshopsRouter.get('/workshops/:id', authMiddleware, getById);
workshopsRouter.delete(
  '/workshops/:id',
  authMiddleware,
  roleMiddleware(['admin', 'facilitator']),
  deleteWorks,
);

export default workshopsRouter;
