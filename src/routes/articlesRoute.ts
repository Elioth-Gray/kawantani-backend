import express from 'express';
import {
  comment,
  create,
  deleteArtic,
  getAll,
  getById,
  getOwnArticle,
  getSaved,
  like,
  save,
  toggle,
  unLike,
  unSave,
  verify,
  getAllActive,
  update,
  getOwnArticleById,
} from '../controller/articlesController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';
import { createMulterUploader } from '../utils/multer/multer';

const articlesRouter = express.Router();
const uploadArticleImage = createMulterUploader('articles');

articlesRouter.get(
  '/articles/saved',
  authMiddleware,
  roleMiddleware(['user']),
  getSaved,
);

articlesRouter.post(
  '/articles/create',
  authMiddleware,
  roleMiddleware(['user']),
  uploadArticleImage.single('image'),
  create,
);

articlesRouter.get(
  '/articles',
  authMiddleware,
  roleMiddleware(['admin']),
  getAll,
);
articlesRouter.get('/articles/active', getAllActive);
articlesRouter.get(
  '/articles/own',
  authMiddleware,
  roleMiddleware(['user', 'admin']),
  getOwnArticle,
);
articlesRouter.get(
  '/articles/own/:id',
  authMiddleware,
  roleMiddleware(['user', 'admin']),
  getOwnArticleById,
);

articlesRouter.get(
  '/articles/:id',
  authMiddleware,
  roleMiddleware(['user', 'admin']),
  getById,
);
articlesRouter.put(
  '/articles/:id',
  authMiddleware,
  roleMiddleware(['user']),
  uploadArticleImage.single('image'),
  update,
);
articlesRouter.patch(
  '/articles/:id',
  authMiddleware,
  roleMiddleware(['user']),
  verify,
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
  roleMiddleware(['admin', 'user']),
  deleteArtic,
);
articlesRouter.patch(
  '/articles/:id/toggle',
  authMiddleware,
  roleMiddleware(['user']),
  toggle,
);
articlesRouter.post(
  '/articles/:id/comments',
  authMiddleware,
  roleMiddleware(['user']),
  comment,
);
articlesRouter.post(
  '/articles/:id/save',
  authMiddleware,
  roleMiddleware(['user']),
  save,
);
articlesRouter.delete(
  '/articles/:id/save',
  authMiddleware,
  roleMiddleware(['user']),
  unSave,
);
articlesRouter.post(
  '/articles/:id/like',
  authMiddleware,
  roleMiddleware(['user']),
  like,
);
articlesRouter.delete(
  '/articles/:id/like',
  authMiddleware,
  roleMiddleware(['user']),
  unLike,
);

export default articlesRouter;
