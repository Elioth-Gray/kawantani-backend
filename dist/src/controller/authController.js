"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginFacilitatorCredential = exports.loginAdminCredential = exports.loginUserCredential = exports.sendActivation = exports.verifyAccount = exports.register = void 0;
const authService_1 = require("../services/authService");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const data = Object.assign(Object.assign({}, req.body), { avatar: fileName });
    try {
        const result = yield (0, authService_1.registerUser)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil daftar akun!',
            data: {
                token: result.token,
                user: result.user,
            },
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'users', fileName);
            fs_1.default.unlink(filePath, (err) => {
                if (err)
                    console.error('Gagal menghapus file avatar:', err.message);
            });
        }
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.register = register;
const verifyAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { verificationCode } = req.body;
    try {
        const result = yield (0, authService_1.verifyUser)({ user, verificationCode });
        res.status(200).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.verifyAccount = verifyAccount;
const sendActivation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.user;
    try {
        const result = yield (0, authService_1.sendActivationCode)(data);
        res.status(200).json({
            success: true,
            message: result.message,
        });
    }
    catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.sendActivation = sendActivation;
const loginUserCredential = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield (0, authService_1.loginUser)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil login!',
            data: {
                token: result.token,
                user: result.user,
            },
        });
    }
    catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.loginUserCredential = loginUserCredential;
const loginAdminCredential = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield (0, authService_1.loginAdmin)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil login!',
            data: {
                token: result.token,
                user: result.user,
            },
        });
    }
    catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.loginAdminCredential = loginAdminCredential;
const loginFacilitatorCredential = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const result = yield (0, authService_1.loginFacilitator)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil login!',
            data: {
                token: result.token,
                user: result.facilitator,
            },
        });
    }
    catch (error) {
        const statusCode = error.status || 500;
        const message = error.message || 'Terjadi kesalahan pada server.';
        return res.status(statusCode).json({
            success: false,
            message,
            data: null,
        });
    }
});
exports.loginFacilitatorCredential = loginFacilitatorCredential;
