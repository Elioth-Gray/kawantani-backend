"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const multer_1 = require("../utils/multer/multer");
const authRouter = express_1.default.Router();
const uploadUserAvatar = (0, multer_1.createMulterUploader)('users');
authRouter.post('/auth/register', uploadUserAvatar.single('avatar'), authController_1.register);
authRouter.post('/auth/activate', authMiddleware_1.default, authController_1.verifyAccount);
authRouter.post('/auth/login', authController_1.loginUserCredential);
authRouter.post('/auth/sendcode', authMiddleware_1.default, authController_1.sendActivation);
authRouter.post('/auth/admin/login', authController_1.loginAdminCredential);
authRouter.post('/auth/facilitator/login', authController_1.loginFacilitatorCredential);
authRouter.get('/api/auth/validate', authMiddleware_1.default, (req, res) => {
    res.json({ user: req.user });
});
exports.default = authRouter;
