// routes/userPlantsRoutes.ts
import express from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import roleMiddleware from '../middlewares/roleMiddleware';
import {
  create,
  getPlant,
  getPlantDetail,
  getDailyTasks,
  updateTask,
  getToday,
  finish,
  note,
} from '../controller/userPlantsConrtoller';

const usePlantsRoute = express.Router();

usePlantsRoute.post(
  '/user-plants',
  authMiddleware,
  roleMiddleware(['user']),
  create,
);
usePlantsRoute.get(
  '/user-plants',
  authMiddleware,
  roleMiddleware(['user']),
  getPlant,
);
usePlantsRoute.get(
  '/user-plants/:id',
  authMiddleware,
  roleMiddleware(['user']),
  getPlantDetail,
);
usePlantsRoute.patch(
  '/user-plants/:id/finish',
  authMiddleware,
  roleMiddleware(['user']),
  finish,
);
usePlantsRoute.get(
  '/user-plants/:id/daily-tasks',
  authMiddleware,
  roleMiddleware(['user']),
  getDailyTasks,
);
usePlantsRoute.get(
  '/today-tasks',
  authMiddleware,
  roleMiddleware(['user']),
  getToday,
);
usePlantsRoute.patch(
  '/user-plants/:userPlantId/tasks/:taskId',
  authMiddleware,
  roleMiddleware(['user']),
  updateTask,
);
usePlantsRoute.post(
  '/user-plants/:userPlantId/:plantDayId',
  authMiddleware,
  roleMiddleware(['user']),
  note,
);

export default usePlantsRoute;
