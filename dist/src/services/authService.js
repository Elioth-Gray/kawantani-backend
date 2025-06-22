"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.loginFacilitator = exports.loginAdmin = exports.loginUser = exports.sendActivationCode = exports.verifyUser = exports.registerUser = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../utils/jwt");
const mail_1 = require("../utils/mail/mail");
const activationCode_1 = require("../utils/activationCode/activationCode");
const registerSchema = Yup.object({
    firstName: Yup.string().required('Nama depan harus diisi!'),
    lastName: Yup.string().required('Nama belakang harus diisi!'),
    email: Yup.string().email().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    dateOfBirth: Yup.string().required('Tanggal lahir harus diisi!'),
    password: Yup.string()
        .required('Password harus diisi!')
        .min(6, 'Password minimal 6 karakter!'),
    gender: Yup.string().required('Jenis kelamin harus diisi!'),
    confirmPassword: Yup.string()
        .required('Konfirmasi password harus diisi!')
        .oneOf([Yup.ref('password')], 'Password harus sama!'),
});
const verificationSchema = Yup.object({
    user: Yup.object().required('User invalid!'),
    verificationCode: Yup.string().required('Kode verifikasi harus diisi!'),
});
const loginSchema = Yup.object({
    email: Yup.string().required('Email harus diisi!'),
    password: Yup.string().required('Password harus diisi!'),
});
const codeSchema = Yup.object({
    id: Yup.string().required('User invalid!'),
});
const registerUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, phoneNumber, dateOfBirth, password, confirmPassword, gender, avatar, } = data;
    try {
        yield registerSchema.validate(data, { abortEarly: false });
        const verifikasiKode = yield (0, activationCode_1.generateUniqueVerificationCode)();
        const dateOfBirthNew = new Date(dateOfBirth);
        if (isNaN(dateOfBirthNew.getTime())) {
            throw { status: 400, message: 'Tanggal lahir tidak valid!' };
        }
        const tanggalPembuatanAkun = new Date();
        tanggalPembuatanAkun.setHours(0, 0, 0, 0);
        const existingEmail = yield prismaClient_1.default.pengguna.findUnique({
            where: { email_pengguna: email },
        });
        if (existingEmail) {
            throw { status: 400, message: 'Email telah terdaftar!' };
        }
        const existingPhone = yield prismaClient_1.default.pengguna.findFirst({
            where: { nomor_telepon_pengguna: phoneNumber },
        });
        if (existingPhone) {
            throw { status: 400, message: 'Nomor telepon telah terdaftar!' };
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const result = yield prismaClient_1.default.pengguna.create({
            data: {
                nama_depan_pengguna: firstName,
                nama_belakang_pengguna: lastName,
                email_pengguna: email,
                nomor_telepon_pengguna: phoneNumber,
                tanggal_lahir_pengguna: dateOfBirthNew,
                password_pengguna: hashedPassword,
                tanggal_pembuatan_akun: tanggalPembuatanAkun,
                kode_verifikasi: verifikasiKode,
                status_verfikasi: false,
                jenisKelamin: parseInt(gender),
                avatar: avatar,
            },
        });
        const token = (0, jwt_1.generateToken)({
            id: result.id_pengguna,
            email: result.email_pengguna,
            firstName: result.nama_depan_pengguna,
            lastName: result.nama_belakang_pengguna,
            avatar: result.avatar,
            role: 'user',
        });
        if (result) {
            const contentMail = yield (0, mail_1.renderMailHtml)('registrationSuccess.ejs', {
                fullname: result.nama_depan_pengguna + result.nama_belakang_pengguna,
                email: result.email_pengguna,
                createdAt: result.tanggal_pembuatan_akun,
                activationCode: result.kode_verifikasi,
            });
            yield (0, mail_1.sendEmail)({
                from: 'kawantani@zohomail.com',
                to: result.email_pengguna,
                subject: 'Aktivasi Akun Anda',
                html: contentMail,
            });
        }
        return {
            token,
            user: {
                id: result.id_pengguna,
                firstName: result.nama_depan_pengguna,
                lastName: result.nama_belakang_pengguna,
                gender: result.jenisKelamin,
                email: result.email_pengguna,
                phoneNumber: result.nomor_telepon_pengguna,
                dateOfBirth: result.tanggal_lahir_pengguna,
            },
            verificationCode: verifikasiKode,
        };
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
exports.registerUser = registerUser;
const verifyUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, verificationCode } = data;
    try {
        yield verificationSchema.validate(data, { abortEarly: false });
        const userRecord = yield prismaClient_1.default.pengguna.findUnique({
            where: { email_pengguna: user.email },
        });
        if (!userRecord) {
            throw { status: 400, message: 'User tidak ditemukan!' };
        }
        if (userRecord.kode_verifikasi !== verificationCode) {
            throw { status: 400, message: 'Kode aktivasi tidak sesuai!' };
        }
        yield prismaClient_1.default.pengguna.update({
            where: { email_pengguna: user.email },
            data: { status_verfikasi: true },
        });
        return { message: 'Akun berhasil diverifikasi!' };
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
exports.verifyUser = verifyUser;
const sendActivationCode = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = data;
    try {
        yield codeSchema.validate({ id });
        const user = yield prismaClient_1.default.pengguna.findFirst({
            where: { id_pengguna: id },
        });
        if (!user) {
            throw { status: 400, message: 'User not found' };
        }
        const verificationCode = yield (0, activationCode_1.generateUniqueVerificationCode)();
        const updatedUser = yield prismaClient_1.default.pengguna.update({
            where: { id_pengguna: id },
            data: { kode_verifikasi: verificationCode },
        });
        const contentMail = yield (0, mail_1.renderMailHtml)('registrationSuccess.ejs', {
            fullname: updatedUser.nama_depan_pengguna +
                ' ' +
                updatedUser.nama_belakang_pengguna,
            email: updatedUser.email_pengguna,
            createdAt: updatedUser.tanggal_pembuatan_akun,
            activationCode: verificationCode,
        });
        yield (0, mail_1.sendEmail)({
            from: 'kawantani@zohomail.com',
            to: updatedUser.email_pengguna,
            subject: 'Aktivasi Akun Anda',
            html: contentMail,
        });
        return { message: 'Kode aktivasi baru telah dikirim ke email pengguna' };
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
exports.sendActivationCode = sendActivationCode;
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    try {
        yield loginSchema.validate(data, { abortEarly: false });
        const user = yield prismaClient_1.default.pengguna.findUnique({
            where: { email_pengguna: email },
        });
        const isMatch = user && (yield bcryptjs_1.default.compare(password, user.password_pengguna));
        if (!user || !isMatch) {
            throw { status: 401, message: 'Credential invalid!' };
        }
        const token = (0, jwt_1.generateToken)({
            id: user.id_pengguna,
            email: user.email_pengguna,
            firstName: user.nama_depan_pengguna,
            lastName: user.nama_belakang_pengguna,
            avatar: user.avatar,
            role: 'user',
        });
        if (user.status_verfikasi !== true) {
            const verificationCode = yield (0, activationCode_1.generateUniqueVerificationCode)();
            const updatedUser = yield prismaClient_1.default.pengguna.update({
                where: { email_pengguna: email },
                data: { kode_verifikasi: verificationCode },
            });
            const contentMail = yield (0, mail_1.renderMailHtml)('registrationSuccess.ejs', {
                fullname: updatedUser.nama_depan_pengguna +
                    ' ' +
                    updatedUser.nama_belakang_pengguna,
                email: updatedUser.email_pengguna,
                createdAt: updatedUser.tanggal_pembuatan_akun,
                activationCode: verificationCode,
            });
            yield (0, mail_1.sendEmail)({
                from: 'kawantani@zohomail.com',
                to: updatedUser.email_pengguna,
                subject: 'Aktivasi Akun Anda',
                html: contentMail,
            });
        }
        return {
            token,
            user: {
                id: user.id_pengguna,
                firstName: user.nama_depan_pengguna,
                lastName: user.nama_belakang_pengguna,
                gender: user.jenisKelamin,
                email: user.email_pengguna,
                phoneNumber: user.nomor_telepon_pengguna,
                dateOfBirth: user.tanggal_lahir_pengguna,
                verificationSchema: user.status_verfikasi,
                verificationCode: user.kode_verifikasi,
            },
        };
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
exports.loginUser = loginUser;
const loginAdmin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    try {
        yield loginSchema.validate(data, { abortEarly: false });
        const user = yield prismaClient_1.default.admin.findUnique({
            where: { email_admin: email },
        });
        const isMatch = user && (yield bcryptjs_1.default.compare(password, user.password_admin));
        if (!user || !isMatch) {
            throw { status: 401, message: 'Credential invalid!' };
        }
        const token = (0, jwt_1.generateToken)({
            id: user.id_admin,
            email: user.email_admin,
            firstName: user.nama_depan_admin,
            lastName: user.nama_belakang_admin,
            avatar: user.avatar,
            role: 'admin',
        });
        return {
            token,
            user: {
                id: user.id_admin,
                firstName: user.nama_depan_admin,
                lastName: user.nama_belakang_admin,
                email: user.email_admin,
            },
        };
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
exports.loginAdmin = loginAdmin;
const loginFacilitator = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    try {
        yield loginSchema.validate(data, { abortEarly: false });
        const facilitator = yield prismaClient_1.default.facilitator.findUnique({
            where: { email_facilitator: email },
        });
        const isMatch = facilitator &&
            (yield bcryptjs_1.default.compare(password, facilitator.password_facilitator));
        if (!facilitator || !isMatch) {
            throw { status: 401, message: 'Credential invalid!' };
        }
        const token = (0, jwt_1.generateToken)({
            id: facilitator.id_facilitator,
            email: facilitator.email_facilitator,
            firstName: facilitator.nama_facilitator,
            lastName: 'Facilitator',
            avatar: facilitator.avatar,
            role: 'facilitator',
        });
        return {
            token,
            facilitator: {
                id: facilitator.id_facilitator,
                firstName: facilitator.nama_facilitator,
                email: facilitator.email_facilitator,
            },
        };
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
exports.loginFacilitator = loginFacilitator;
