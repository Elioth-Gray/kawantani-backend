"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const paymentMethodController_1 = require("../controller/paymentMethodController");
const paymentMethodRoute = express_1.default.Router();
paymentMethodRoute.get('/payments', authMiddleware_1.default, paymentMethodController_1.getMethod);
paymentMethodRoute.get('/payments/:id', authMiddleware_1.default, paymentMethodController_1.getMethodId);
exports.default = paymentMethodRoute;
