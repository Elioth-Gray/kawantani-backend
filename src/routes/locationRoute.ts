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
  roleMiddleware(['facilitator', 'admin']),
  getProvince,
);
locationRoute.get(
  '/provinces/:id',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getProvinceId,
);
locationRoute.get(
  '/regencies',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getRegency,
);
locationRoute.get(
  '/regencies/:id',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getRegencyId,
);
locationRoute.get(
  '/provinces/:id/regencies',
  authMiddleware,
  roleMiddleware(['facilitator', 'admin']),
  getRegencyProvinceId,
);

export default locationRoute;
