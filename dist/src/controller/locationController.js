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
exports.getRegencyProvinceId = exports.getRegencyId = exports.getRegency = exports.getProvinceId = exports.getProvince = void 0;
const locationService_1 = require("../services/locationService");
const getProvince = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, locationService_1.getAllProvince)();
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data provinsi',
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
exports.getProvince = getProvince;
const getProvinceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numberId = Number(id);
    try {
        const result = yield (0, locationService_1.getProvinceById)(numberId);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data provinsi',
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
exports.getProvinceId = getProvinceId;
const getRegency = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, locationService_1.getAllRegency)();
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data provinsi',
            data: {
                regencies: result,
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
exports.getRegency = getRegency;
const getRegencyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numberId = Number(id);
    try {
        const result = yield (0, locationService_1.getRegencyById)(numberId);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data provinsi',
            data: {
                regencies: result,
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
exports.getRegencyId = getRegencyId;
const getRegencyProvinceId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const numberId = Number(id);
    try {
        const result = yield (0, locationService_1.getRegencyByProvinceId)(numberId);
        res.status(200).json({
            success: true,
            message: 'Berhasil mendapatkan data kabupaten',
            data: {
                regencies: result,
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
exports.getRegencyProvinceId = getRegencyProvinceId;
