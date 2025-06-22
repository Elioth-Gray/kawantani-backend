"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (data) => {
    const tokenData = data;
    const SECRET = process.env.JWT_SECRET;
    if (!SECRET) {
        throw new Error('JWT_SECRET environment variable is not set.');
    }
    const token = jsonwebtoken_1.default.sign({
        id: tokenData.id,
        email: tokenData.email,
        firstName: tokenData.firstName,
        lastName: tokenData.lastName,
        avatar: tokenData.avatar,
        role: tokenData.role,
    }, SECRET, {
        expiresIn: '1d',
    });
    return token;
};
exports.generateToken = generateToken;
const decodeToken = (token) => {
    try {
        const SECRET = process.env.JWT_SECRET;
        if (!SECRET) {
            throw new Error('JWT_SECRET environment variable is not set.');
        }
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        if (typeof decoded === 'object' &&
            decoded.id &&
            decoded.email &&
            decoded.firstName &&
            decoded.lastName) {
            return {
                id: decoded.id,
                email: decoded.email,
                firstName: decoded.firstName,
                avatar: decoded.avatar,
                lastName: decoded.lastName,
                role: decoded.role,
            };
        }
        return null;
    }
    catch (err) {
        return null;
    }
};
exports.decodeToken = decodeToken;
