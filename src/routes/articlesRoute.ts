import express from 'express';
import {
  create,
  deleteArtic,
  getAll,
  getById,
  toggle,
  verify,
} from '../controller/articlesController';
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
articlesRouter.get('/articles', getAll);
articlesRouter.get(
  '/articles/:id',
  authMiddleware,
  roleMiddleware(['user', 'admin']),
  getById,
);
articlesRouter.patch(
  '/articles/:id/verify',
  authMiddleware,
  roleMiddleware(['admin']),
  verify,
);
articlesRouter.delete(
  '/articles/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  deleteArtic,
);
articlesRouter.patch(
  '/articles/:id/toggle',
  authMiddleware,
  roleMiddleware(['user']),
  toggle,
);

export default articlesRouter;
