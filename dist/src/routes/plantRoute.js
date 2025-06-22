"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const plantController_1 = require("../controller/plantController");
const plantRoute = express_1.default.Router();
plantRoute.get('/plants', plantController_1.getAll);
plantRoute.get('/plants/:id', authMiddleware_1.default, plantController_1.getById);
exports.default = plantRoute;
