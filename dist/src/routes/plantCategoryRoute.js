"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plantCategoryController_1 = require("../controller/plantCategoryController");
const plantCategoriesRoute = express_1.default.Router();
plantCategoriesRoute.get('/categories/plants', plantCategoryController_1.getCategory);
plantCategoriesRoute.get('/categories/plants/:id', plantCategoryController_1.getCategoryId);
exports.default = plantCategoriesRoute;
