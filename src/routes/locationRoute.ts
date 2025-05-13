import express from 'express';
import {
  getProvince,
  getProvinceId,
  getRegency,
  getRegencyId,
  getRegencyProvinceId,
} from '../controller/locationController';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';

const locationRoute = express.Router();

locationRoute.get(
  '/provinces',
  authMiddleware,
  roleMiddleware(['admin']),
  getProvince
);
locationRoute.get(
  '/provinces/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  getProvinceId
);
locationRoute.get(
  '/regencies',
  authMiddleware,
  roleMiddleware(['admin']),
  getRegency
);
locationRoute.get(
  '/regencies/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  getRegencyId
);
locationRoute.get(
  '/provinces/:id/regencies',
  authMiddleware,
  roleMiddleware(['admin']),
  getRegencyProvinceId
);

export default locationRoute;
