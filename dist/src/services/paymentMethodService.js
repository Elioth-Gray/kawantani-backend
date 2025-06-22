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
exports.getMethodById = exports.getAllMethod = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAllMethod = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prismaClient_1.default.metodePembayaran.findMany();
        return categories;
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
exports.getAllMethod = getAllMethod;
const getMethodById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield prismaClient_1.default.metodePembayaran.findFirst({
            where: {
                id_metode_pembayaran: id,
            },
        });
        if (!categories) {
            throw { status: 400, message: 'Kategori tidak ditemukan!' };
        }
        return categories;
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
exports.getMethodById = getMethodById;
