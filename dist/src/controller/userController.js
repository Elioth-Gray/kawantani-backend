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
exports.deleteUs = exports.updateProfile = exports.me = exports.update = exports.getUserById = exports.getAllUsers = void 0;
const userServices_1 = require("../services/userServices");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userServices_1.getAll)();
        res.status(200).json({
            message: 'Data user berhasil diambil!',
            data: users,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield (0, userServices_1.getById)(id);
        res.status(200).json({
            message: 'Pengguna ditemukan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getUserById = getUserById;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const data = Object.assign({ id: req.params.id, user: req.user, avatar: fileName }, req.body);
    try {
        const result = yield (0, userServices_1.updateUser)(data);
        res.status(200).json({
            message: 'Akun pengguna berhasil diperbarui!',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.update = update;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const result = yield (0, userServices_1.getById)(user.id);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan user!',
            data: {
                user: result,
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
exports.me = me;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const fileName = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    const data = Object.assign({ user: req.user, avatar: fileName }, req.body);
    try {
        const result = yield (0, userServices_1.updateUserProfile)(data);
        res.status(200).json({
            message: 'Akun berhasil diperbarui!',
            data: result,
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
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.updateProfile = updateProfile;
const deleteUs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = {
        id,
        user,
    };
    try {
        const result = yield (0, userServices_1.deleteUser)(data);
        res.status(200).json({
            message: 'Pengguna berhasil dihapus',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.deleteUs = deleteUs;
