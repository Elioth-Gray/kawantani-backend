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
exports.me = exports.recentSales = exports.ticketsSold = exports.totalRevenue = exports.deleteFac = exports.update = exports.register = exports.getById = exports.get = void 0;
const facilitatorService_1 = require("../services/facilitatorService");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, facilitatorService_1.getAllFacilitator)();
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data facilitator',
            data: {
                facilitator: result,
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
exports.get = get;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield (0, facilitatorService_1.getAllFacilitatorById)(id);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data facilitator unik',
            data: {
                facilitator: result,
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
exports.getById = getById;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const data = Object.assign(Object.assign({}, req.body), { avatar: fileName });
    try {
        const result = yield (0, facilitatorService_1.registerFacilitator)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil membuat akun facilitator',
            data: {
                facilitator: result.facilitator,
            },
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'facilitators', fileName);
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
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const fileName = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    const { id } = req.params;
    const data = Object.assign(Object.assign({}, req.body), { avatar: fileName, id: id });
    try {
        const result = yield (0, facilitatorService_1.updateFacilitator)(data);
        res.status(200).json({
            success: true,
            message: 'Berhasil mengedit akun facilitator',
            data: {
                facilitator: result.facilitator,
            },
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'facilitators', fileName);
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
exports.update = update;
const deleteFac = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield (0, facilitatorService_1.deleteFacilitator)(id);
        res.status(200).json({
            success: true,
            message: 'Berhasil menghapus akun facilitator',
            data: {
                facilitator: result.facilitator,
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
exports.deleteFac = deleteFac;
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, facilitatorService_1.getTotalRevenue)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan total keuntungan',
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
exports.totalRevenue = totalRevenue;
const ticketsSold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, facilitatorService_1.getTotalTicketsSold)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan total tiket terjual',
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
exports.ticketsSold = ticketsSold;
const recentSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, facilitatorService_1.getLatestSales)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan tiket terjual',
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
exports.recentSales = recentSales;
const me = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, facilitatorService_1.getAllFacilitatorById)(user.id);
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
