"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLIENT_HOST = exports.EMAIL_SMTP_SERVICE_NAME = exports.EMAIL_SMTP_HOST = exports.EMAIL_SMTP_PORT = exports.EMAIL_SMTP_USER = exports.EMAIL_SMTP_PASS = exports.EMAIL_SMTP_SECURE = exports.SECRET = exports.DATABASE_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DATABASE_URL = process.env.DATABASE_URL || "";
exports.SECRET = process.env.JWT_SECRET || "";
exports.EMAIL_SMTP_SECURE = Boolean(process.env.EMAIL_SMTP_SECURE) || false;
exports.EMAIL_SMTP_PASS = process.env.EMAIL_SMTP_PASS || "";
exports.EMAIL_SMTP_USER = process.env.EMAIL_SMTP_USER || "";
exports.EMAIL_SMTP_PORT = Number(process.env.EMAIL_SMTP_PORT) || 465;
exports.EMAIL_SMTP_HOST = process.env.EMAIL_SMTP_HOST || "";
exports.EMAIL_SMTP_SERVICE_NAME = process.env.EMAIL_SMTP_SERVICE_NAME || "";
exports.CLIENT_HOST = process.env.CLIENT_HOST || "http://localhost:3001";
