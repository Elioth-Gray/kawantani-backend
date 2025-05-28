import express from 'express';
import {
  create,
  deleteWorks,
  getAll,
  verify,
  getById,
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
workshopsRouter.get('/workshops', getAll);
workshopsRouter.get('/workshops/:id', authMiddleware, getById);
workshopsRouter.delete(
  '/workshops/:id',
  authMiddleware,
  roleMiddleware(['admin', 'facilitator']),
  deleteWorks,
);

export default workshopsRouter;
