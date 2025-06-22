"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const locationController_1 = require("../controller/locationController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const roleMiddleware_1 = __importDefault(require("../middlewares/roleMiddleware"));
const locationRoute = express_1.default.Router();
locationRoute.get('/provinces', authMiddleware_1.default, (0, roleMiddleware_1.default)(['facilitator', 'admin', 'user']), locationController_1.getProvince);
locationRoute.get('/provinces/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['facilitator', 'admin', 'user']), locationController_1.getProvinceId);
locationRoute.get('/regencies', authMiddleware_1.default, (0, roleMiddleware_1.default)(['facilitator', 'admin', 'user']), locationController_1.getRegency);
locationRoute.get('/regencies/:id', authMiddleware_1.default, (0, roleMiddleware_1.default)(['facilitator', 'admin', 'user']), locationController_1.getRegencyId);
locationRoute.get('/provinces/:id/regencies', authMiddleware_1.default, (0, roleMiddleware_1.default)(['facilitator', 'admin', 'user']), locationController_1.getRegencyProvinceId);
exports.default = locationRoute;
