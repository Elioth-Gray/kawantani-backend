"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userPlantsRoutes.ts
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middlewares/roleMiddleware"));
const userPlantsConrtoller_1 = require("../controller/userPlantsConrtoller");
const usePlantsRoute = express_1.default.Router();
usePlantsRoute.post('/user-plants', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.create);
usePlantsRoute.get('/user-plants', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.getPlant);
usePlantsRoute.get('/user-plants/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.getPlantDetail);
usePlantsRoute.patch('/user-plants/:id/finish', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.finish);
usePlantsRoute.get('/user-plants/:id/daily-tasks', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.getDailyTasks);
usePlantsRoute.get('/today-tasks', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.getToday);
usePlantsRoute.patch('/user-plants/:userPlantId/tasks/:taskId', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.updateTask);
usePlantsRoute.post('/user-plants/:userPlantId/:plantDayId', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), userPlantsConrtoller_1.note);
exports.default = usePlantsRoute;
