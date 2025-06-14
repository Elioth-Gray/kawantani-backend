import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import {
  getCategory,
  getCategoryId,
} from '../controller/plantCategoryController';

const plantCategoriesRoute = express.Router();

plantCategoriesRoute.get('/categories/plants', getCategory);
plantCategoriesRoute.get('/categories/plants/:id', getCategoryId);

export default plantCategoriesRoute;
