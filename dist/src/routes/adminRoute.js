"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const adminController_1 = require("../controller/adminController");
const roleMiddleware_1 = __importDefault(require("../middlewares/roleMiddleware"));
const adminRoute = express_1.default.Router();
adminRoute.get('/admin/me', authMiddleware_1.default, (0, roleMiddleware_1.default)(['admin']), adminController_1.me);
exports.default = adminRoute;
