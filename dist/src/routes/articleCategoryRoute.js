"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const articleCategoryController_1 = require("../controller/articleCategoryController");
const articleCategoriesRoute = express_1.default.Router();
articleCategoriesRoute.get('/categories/article', authMiddleware_1.default, articleCategoryController_1.getCategory);
articleCategoriesRoute.get('/categories/article/:id', authMiddleware_1.default, articleCategoryController_1.getCategoryId);
exports.default = articleCategoriesRoute;
