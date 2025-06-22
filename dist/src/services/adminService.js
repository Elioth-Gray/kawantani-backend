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
exports.getAdminById = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAdminById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const admin = yield prismaClient_1.default.admin.findUnique({
            where: {
                id_admin: id,
            },
            select: {
                nama_depan_admin: true,
                nama_belakang_admin: true,
                email_admin: true,
                avatar: true,
            },
        });
        if (!admin) {
            throw { status: 400, message: 'Admin tidak ditemukan!' };
        }
        return admin;
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
exports.getAdminById = getAdminById;
