import express from 'express';
import { create, deleteWorks } from '../controller/workshopController';
import authMiddleware from '../middlewares/authMiddleware';
import { createMulterUploader } from '../utils/multer/multer';
import roleMiddleware from '../middlewares/roleMiddleware';
import { get } from '../controller/facilitatorController';
import { getById } from '../services/userServices';

const wokrshopRouter = express.Router();
const uploadWorkshopImage = createMulterUploader('users');

wokrshopRouter.post(
  '/workshops/create',
  authMiddleware,
  roleMiddleware(['facilitator']),
  uploadWorkshopImage.single('avatar'),
  create,
);
wokrshopRouter.get('/workshops', get);
wokrshopRouter.get('/workshops/:id', authMiddleware, getById);
wokrshopRouter.delete(
  '/workshops/:id',
  authMiddleware,
  roleMiddleware(['admin', 'facilitator']),
  deleteWorks,
);

export default wokrshopRouter;
