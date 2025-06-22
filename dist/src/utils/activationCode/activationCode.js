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
exports.generateUniqueVerificationCode = void 0;
const prismaClient_1 = __importDefault(require("../../prisma/prismaClient"));
function generateUniqueVerificationCode() {
    return __awaiter(this, arguments, void 0, function* (length = 4) {
        const generateCode = () => {
            const min = Math.pow(10, length - 1);
            const max = Math.pow(10, length) - 1;
            return Math.floor(min + Math.random() * (max - min + 1)).toString();
        };
        let verificationCode = generateCode();
        let codeExists = yield prismaClient_1.default.pengguna.findFirst({
            where: { kode_verifikasi: verificationCode },
        });
        while (codeExists) {
            verificationCode = generateCode();
            codeExists = yield prismaClient_1.default.pengguna.findFirst({
                where: { kode_verifikasi: verificationCode },
            });
        }
        return verificationCode;
    });
}
exports.generateUniqueVerificationCode = generateUniqueVerificationCode;
