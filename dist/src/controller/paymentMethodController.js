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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMethodId = exports.getMethod = void 0;
const paymentMethodService_1 = require("../services/paymentMethodService");
const getMethod = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, paymentMethodService_1.getAllMethod)();
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data metode pembayaran',
            data: {
                provinces: result,
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
exports.getMethod = getMethod;
const getMethodId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numberId = Number(id);
    try {
        const result = yield (0, paymentMethodService_1.getMethodById)(numberId);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan kategori artikel',
            data: {
                provinces: result,
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
exports.getMethodId = getMethodId;
