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
exports.deleteUser = exports.updateUserProfile = exports.updateUser = exports.getById = exports.getAll = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const userSchema = Yup.object({
    id: Yup.string().required('Id user harus diisi!'),
});
const updateProfileSchema = Yup.object({
    firstName: Yup.string().required('Nama depan harus diisi!'),
    lastName: Yup.string().required('Nama belakang harus diisi!'),
    email: Yup.string().email().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    dateOfBirth: Yup.string().required('Tanggal lahir harus diisi!'),
    password: Yup.string(),
    gender: Yup.string().required('Jenis kelamin harus diisi!'),
    confirmPassword: Yup.string(),
});
const updateUserSchema = Yup.object({
    firstName: Yup.string().required('Nama depan harus diisi!'),
    lastName: Yup.string().required('Nama belakang harus diisi!'),
    email: Yup.string().email().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    dateOfBirth: Yup.string().required('Tanggal lahir harus diisi!'),
    password: Yup.string(),
    gender: Yup.string().required('Jenis kelamin harus diisi!'),
    confirmPassword: Yup.string(),
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prismaClient_1.default.pengguna.findMany({
            select: {
                id_pengguna: true,
                nama_depan_pengguna: true,
                nama_belakang_pengguna: true,
                email_pengguna: true,
                nomor_telepon_pengguna: true,
                status_verfikasi: true,
            },
            where: {
                status_aktif: true,
            },
        });
        if (!users) {
            throw new Error('Tidak ada user dalam database!');
        }
        return users;
    }
    catch (error) {
        const err = error;
        throw err;
    }
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prismaClient_1.default.pengguna.findFirst({
            where: {
                id_pengguna: id,
                status_aktif: true,
            },
            select: {
                id_pengguna: true,
                nama_depan_pengguna: true,
                nama_belakang_pengguna: true,
                email_pengguna: true,
                nomor_telepon_pengguna: true,
                jenisKelamin: true,
                avatar: true,
                status_verfikasi: true,
                tanggal_lahir_pengguna: true,
            },
        });
        if (!user) {
            throw new Error('Pengguna tidak ditemukan!');
        }
        return user;
    }
    catch (error) {
        const err = error;
        throw err;
    }
});
exports.getById = getById;
const updateUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, firstName, lastName, email, phoneNumber, dateOfBirth, password, confirmPassword, gender, avatar, } = data;
    try {
        yield updateUserSchema.validate(data);
        const existing = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                id_pengguna: id,
            },
        });
        if (!existing) {
            throw { status: 404, message: 'Terjadi kesalahan!' };
        }
        const existingEmail = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                email_pengguna: email,
            },
        });
        if (existingEmail && existingEmail.id_pengguna !== id) {
            throw {
                status: 400,
                message: 'Email tidak telah digunakan oleh pengguna lain!',
            };
        }
        const existingPhoneNumber = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                nomor_telepon_pengguna: phoneNumber,
            },
        });
        if (existingPhoneNumber && existingPhoneNumber.id_pengguna !== id) {
            throw {
                status: 400,
                message: 'Nomor telepon sudah digunakan oleh pengguna lain!',
            };
        }
        if (password) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            yield prismaClient_1.default.pengguna.update({
                where: {
                    id_pengguna: id,
                },
                data: {
                    password_pengguna: hashedPassword,
                },
            });
        }
        const dateOfBirthNew = new Date(dateOfBirth);
        if (avatar) {
            if (existing.avatar) {
                const oldAvatarPath = path_1.default.join(process.cwd(), 'uploads', 'users', existing.avatar);
                fs_1.default.unlink(oldAvatarPath, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file avatar lama:', err.message);
                    }
                });
            }
            yield prismaClient_1.default.pengguna.update({
                where: { id_pengguna: id },
                data: {
                    avatar: avatar,
                },
            });
        }
        const result = yield prismaClient_1.default.pengguna.update({
            where: { id_pengguna: id },
            data: {
                nama_depan_pengguna: firstName,
                nama_belakang_pengguna: lastName,
                email_pengguna: email,
                nomor_telepon_pengguna: phoneNumber,
                tanggal_lahir_pengguna: dateOfBirthNew,
                jenisKelamin: parseInt(gender, 10),
            },
        });
        return {
            pengguna: {
                id: result.id_pengguna,
                fistName: result.nama_depan_pengguna,
                lastName: result.nama_belakang_pengguna,
                email: result.email_pengguna,
                phoneNumber: result.nomor_telepon_pengguna,
                gender: result.jenisKelamin,
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
exports.updateUser = updateUser;
const updateUserProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, firstName, lastName, email, phoneNumber, dateOfBirth, password, confirmPassword, gender, avatar, } = data;
    try {
        yield updateProfileSchema.validate(data);
        const existing = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                id_pengguna: user.id,
            },
        });
        if (!existing) {
            throw { status: 404, message: 'Terjadi kesalahan!' };
        }
        if (email !== existing.email_pengguna) {
            throw { status: 400, message: 'Email tidak boleh diubah!' };
        }
        const existingPhoneNumber = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                nomor_telepon_pengguna: phoneNumber,
            },
        });
        if (existingPhoneNumber && existingPhoneNumber.id_pengguna !== user.id) {
            throw {
                status: 400,
                message: 'Nomor telepon sudah digunakan oleh pengguna lain!',
            };
        }
        if (password) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            yield prismaClient_1.default.pengguna.update({
                where: {
                    id_pengguna: user.id,
                },
                data: {
                    password_pengguna: hashedPassword,
                },
            });
        }
        const dateOfBirthNew = new Date(dateOfBirth);
        if (avatar) {
            if (existing.avatar) {
                const oldAvatarPath = path_1.default.join(process.cwd(), 'uploads', 'users', existing.avatar);
                fs_1.default.unlink(oldAvatarPath, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file avatar lama:', err.message);
                    }
                });
            }
            yield prismaClient_1.default.pengguna.update({
                where: { id_pengguna: user.id },
                data: {
                    avatar: avatar,
                },
            });
        }
        const result = yield prismaClient_1.default.pengguna.update({
            where: { id_pengguna: user.id },
            data: {
                nama_depan_pengguna: firstName,
                nama_belakang_pengguna: lastName,
                email_pengguna: email,
                nomor_telepon_pengguna: phoneNumber,
                tanggal_lahir_pengguna: dateOfBirthNew,
                jenisKelamin: parseInt(gender, 10),
            },
        });
        return {
            pengguna: {
                id: result.id_pengguna,
                firstName: result.nama_depan_pengguna,
                lastName: result.nama_belakang_pengguna,
                email: result.email_pengguna,
                phoneNumber: result.nomor_telepon_pengguna,
                gender: result.jenisKelamin,
                avatar: result.avatar,
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
exports.updateUserProfile = updateUserProfile;
const deleteUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    console.log(user);
    try {
        const pengguna = yield prismaClient_1.default.pengguna.findUnique({
            where: {
                id_pengguna: id,
            },
        });
        if (!pengguna) {
            throw { status: 404, message: 'Pengguna tidak ditemukan' };
        }
        const isOwner = pengguna.id_pengguna === user.id;
        const isAdmin = user.role === 'admin';
        if (!isOwner && !isAdmin) {
            throw { status: 403, message: 'Tidak diizinkan menghapus pengguna ini' };
        }
        const result = yield prismaClient_1.default.pengguna.update({
            where: { id_pengguna: id },
            data: {
                status_aktif: false,
            },
        });
        return result;
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
exports.deleteUser = deleteUser;
