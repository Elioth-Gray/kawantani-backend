import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {
  getCategory,
  getCategoryId,
} from '../controller/articleCategoryController';

const articleCategoriesRoute = express.Router();

articleCategoriesRoute.get('/categories/article', authMiddleware, getCategory);
articleCategoriesRoute.get(
  '/categories/article/:id',
  authMiddleware,
  getCategoryId,
);

export default articleCategoriesRoute;
