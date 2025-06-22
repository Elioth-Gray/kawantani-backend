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
exports.getRegencyByProvinceId = exports.getRegencyById = exports.getAllRegency = exports.getProvinceById = exports.getAllProvince = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAllProvince = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provinces = yield prismaClient_1.default.provinsi.findMany();
        return provinces;
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw {
                status: 400,
                message: error.errors.join(', '),
            };
        }
        throw error;
    }
});
exports.getAllProvince = getAllProvince;
const getProvinceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provinces = yield prismaClient_1.default.provinsi.findFirst({
            where: {
                id_provinsi: id,
            },
        });
        if (!provinces) {
            throw { status: 400, message: 'Provinsi tidak ditemukan!' };
        }
        return provinces;
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw {
                status: 400,
                message: error.errors.join(', '),
            };
        }
        throw error;
    }
});
exports.getProvinceById = getProvinceById;
const getAllRegency = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regency = yield prismaClient_1.default.kabupaten.findMany();
        return regency;
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw {
                status: 400,
                message: error.errors.join(', '),
            };
        }
        throw error;
    }
});
exports.getAllRegency = getAllRegency;
const getRegencyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regency = yield prismaClient_1.default.kabupaten.findFirst({
            where: {
                id_kabupaten: id,
            },
        });
        if (!regency) {
            throw { status: 400, message: 'Kabupaten/Kota tidak ditemukan!' };
        }
        return regency;
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw {
                status: 400,
                message: error.errors.join(', '),
            };
        }
        throw error;
    }
});
exports.getRegencyById = getRegencyById;
const getRegencyByProvinceId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regency = yield prismaClient_1.default.kabupaten.findMany({
            where: {
                id_provinsi: id,
            },
        });
        if (!regency) {
            throw { status: 400, message: 'Kabupaten/Kota tidak ditemukan!' };
        }
        return regency;
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw {
                status: 400,
                message: error.errors.join(', '),
            };
        }
        throw error;
    }
});
exports.getRegencyByProvinceId = getRegencyByProvinceId;
