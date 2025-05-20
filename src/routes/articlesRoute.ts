import express from 'express';
import { create } from '../controller/articlesController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';
import { createMulterUploader } from '../utils/multer/multer';

const articlesRouter = express.Router();
const uploadArticleImage = createMulterUploader('articles');

articlesRouter.post(
  '/articles/create',
  authMiddleware,
  roleMiddleware(['user']),
  uploadArticleImage.single('image'),
  create,
);

export default articlesRouter;
