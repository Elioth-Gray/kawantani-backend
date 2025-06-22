"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middlewares/roleMiddleware"));
const multer_1 = require("../utils/multer/multer");
const usersRoute = express_1.default.Router();
const uploadUserAvatar = (0, multer_1.createMulterUploader)('users');
usersRoute.get('/users/me', authMiddleware_1.default, userController_1.me);
usersRoute.get('/users', authMiddleware_1.default, (0, roleMiddleware_1.default)(['admin']), userController_1.getAllUsers);
usersRoute.get('/users/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['admin']), userController_1.getUserById);
usersRoute.put('/users/me/update', authMiddleware_1.default, (0, roleMiddleware_1.default)(['user']), uploadUserAvatar.single('avatar'), userController_1.updateProfile);
usersRoute.put('/users/edit/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['admin']), uploadUserAvatar.single('avatar'), userController_1.update);
usersRoute.delete('/users/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['admin', 'user']), userController_1.deleteUs);
exports.default = usersRoute;
