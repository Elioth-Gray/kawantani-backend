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
exports.getLatestSales = exports.getTotalTicketsSold = exports.getTotalRevenue = exports.deleteFacilitator = exports.updateFacilitator = exports.registerFacilitator = exports.getAllFacilitatorById = exports.getAllFacilitator = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const registerSchema = Yup.object({
    name: Yup.string().required('Nama depan harus diisi!'),
    email: Yup.string().email().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    password: Yup.string()
        .required('Password harus diisi!')
        .min(6, 'Password minimal 6 karakter!'),
    confirmPassword: Yup.string()
        .required('Konfirmasi password harus diisi!')
        .oneOf([Yup.ref('password')], 'Password harus sama!'),
    fullAddress: Yup.string().required('Alamat lengkap harus diisi!'),
    regencyId: Yup.number().required('Provinsi harus diisi!'),
});
const updateSchema = Yup.object({
    name: Yup.string().required('Nama depan harus diisi!'),
    email: Yup.string().email().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    password: Yup.string(),
    confirmPassword: Yup.string(),
    fullAddress: Yup.string().required('Alamat lengkap harus diisi!'),
    regencyId: Yup.number().required('Provinsi harus diisi!'),
});
const getAllFacilitator = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facilitators = yield prismaClient_1.default.facilitator.findMany({
            where: {
                status_aktif: true,
            },
        });
        return facilitators;
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
exports.getAllFacilitator = getAllFacilitator;
const getAllFacilitatorById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facilitator = yield prismaClient_1.default.facilitator.findUnique({
            where: {
                id_facilitator: id,
                status_aktif: true,
            },
            select: {
                nama_facilitator: true,
                email_facilitator: true,
                nomor_telepon_facilitator: true,
                avatar: true,
                alamat_lengkap_facilitator: true,
                kabupaten: {
                    select: {
                        nama_kabupaten: true,
                        type: true,
                        provinsi: {
                            select: {
                                nama_provinsi: true,
                            },
                        },
                    },
                },
            },
        });
        if (!facilitator) {
            throw { status: 400, message: 'Facilitator tidak ditemukan!' };
        }
        return facilitator;
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
exports.getAllFacilitatorById = getAllFacilitatorById;
const registerFacilitator = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, phoneNumber, password, confirmPassword, fullAddress, regencyId, avatar, } = data;
    try {
        yield registerSchema.validate(data, { abortEarly: false });
        const tanggalPembuatanAkun = new Date();
        tanggalPembuatanAkun.setHours(0, 0, 0, 0);
        const existingEmail = yield prismaClient_1.default.facilitator.findUnique({
            where: { email_facilitator: email },
        });
        if (existingEmail) {
            throw { status: 400, message: 'Email telah digunakan facilitator lain!' };
        }
        const existingPhone = yield prismaClient_1.default.facilitator.findFirst({
            where: { nomor_telepon_facilitator: phoneNumber },
        });
        if (existingPhone) {
            throw {
                status: 400,
                message: 'Nomor telepon telah digunakan facilitator lain!',
            };
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const result = yield prismaClient_1.default.facilitator.create({
            data: {
                nama_facilitator: name,
                email_facilitator: email,
                nomor_telepon_facilitator: phoneNumber,
                password_facilitator: hashedPassword,
                tanggal_pembuatan_akun: tanggalPembuatanAkun,
                alamat_lengkap_facilitator: fullAddress,
                id_kabupaten: parseInt(regencyId, 10),
                avatar: avatar,
            },
        });
        return {
            facilitator: {
                id: result.id_facilitator,
                name: result.nama_facilitator,
                email: result.email_facilitator,
                phoneNumber: result.nomor_telepon_facilitator,
                fullAddress: result.alamat_lengkap_facilitator,
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
exports.registerFacilitator = registerFacilitator;
const updateFacilitator = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, email, phoneNumber, fullAddress, regencyId, password, confirmPassword, avatar, } = data;
    try {
        yield updateSchema.validate({
            name,
            email,
            phoneNumber,
            fullAddress,
            regencyId,
            password,
            confirmPassword,
        }, { abortEarly: false });
        const existing = yield prismaClient_1.default.facilitator.findUnique({
            where: {
                id_facilitator: id,
            },
        });
        if (!existing) {
            throw { status: 404, message: 'Facilitator tidak ditemukan!' };
        }
        const existingEmail = yield prismaClient_1.default.facilitator.findUnique({
            where: { email_facilitator: email },
        });
        if (existingEmail && existingEmail.id_facilitator !== id) {
            throw {
                status: 400,
                message: 'Email sudah digunakan oleh facilitator lain!',
            };
        }
        const existingPhoneNumber = yield prismaClient_1.default.facilitator.findUnique({
            where: {
                nomor_telepon_facilitator: phoneNumber,
            },
        });
        if (existingPhoneNumber && existingPhoneNumber.id_facilitator !== id) {
            throw {
                status: 400,
                message: 'Nomor telepon sudah digunakan oleh facilitator lain!',
            };
        }
        if (password) {
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
            yield prismaClient_1.default.facilitator.update({
                where: {
                    id_facilitator: id,
                },
                data: {
                    password_facilitator: hashedPassword,
                },
            });
        }
        if (avatar) {
            if (existing.avatar) {
                const oldAvatarPath = path_1.default.join(process.cwd(), 'uploads', 'facilitators', existing.avatar);
                fs_1.default.unlink(oldAvatarPath, (err) => {
                    if (err) {
                        console.error('Gagal menghapus file avatar lama:', err.message);
                    }
                });
            }
            yield prismaClient_1.default.facilitator.update({
                where: { id_facilitator: id },
                data: {
                    avatar: avatar,
                },
            });
        }
        const result = yield prismaClient_1.default.facilitator.update({
            where: { id_facilitator: id },
            data: {
                nama_facilitator: name,
                email_facilitator: email,
                nomor_telepon_facilitator: phoneNumber,
                alamat_lengkap_facilitator: fullAddress,
                id_kabupaten: parseInt(regencyId, 10),
            },
        });
        return {
            facilitator: {
                id: result.id_facilitator,
                name: result.nama_facilitator,
                email: result.email_facilitator,
                phoneNumber: result.nomor_telepon_facilitator,
                fullAddress: result.alamat_lengkap_facilitator,
                regencyId: result.id_kabupaten,
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
exports.updateFacilitator = updateFacilitator;
const deleteFacilitator = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const id = data;
    try {
        const availableFacilitator = yield prismaClient_1.default.facilitator.findUnique({
            where: {
                id_facilitator: id,
            },
        });
        if (!availableFacilitator) {
            throw { status: 400, message: 'Facilitator tidak ditemukan' };
        }
        const result = yield prismaClient_1.default.facilitator.update({
            where: {
                id_facilitator: id,
            },
            data: {
                status_aktif: false,
            },
        });
        return {
            facilitator: {
                id: result.id_facilitator,
                name: result.nama_facilitator,
                email: result.email_facilitator,
                phoneNumber: result.nomor_telepon_facilitator,
                fullAddress: result.alamat_lengkap_facilitator,
                regencyId: result.id_kabupaten,
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
exports.deleteFacilitator = deleteFacilitator;
const getTotalRevenue = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const revenue = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                status_pembayaran: true,
                workshop: id ? { id_facilitator: id } : {},
            },
            include: {
                workshop: {
                    select: {
                        harga_workshop: true,
                    },
                },
            },
        });
        const total = revenue.reduce((sum, item) => {
            return sum + Number(item.workshop.harga_workshop);
        }, 0);
        const finalRevenue = Number(total);
        return finalRevenue;
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
exports.getTotalRevenue = getTotalRevenue;
const getTotalTicketsSold = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalTickets = yield prismaClient_1.default.workshopTerdaftar.count({
            where: {
                status_pembayaran: true,
                workshop: {
                    id_facilitator: id,
                },
            },
        });
        return totalTickets;
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
exports.getTotalTicketsSold = getTotalTicketsSold;
const getLatestSales = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, limit = 10) {
    try {
        const latestSales = yield prismaClient_1.default.workshopTerdaftar.findMany({
            take: limit,
            orderBy: {
                tanggal_pendaftaran: 'desc',
            },
            include: {
                workshop: {
                    select: {
                        judul_workshop: true,
                        harga_workshop: true,
                        gambar_workshop: true,
                        id_facilitator: true,
                    },
                },
                pengguna: {
                    select: {
                        nama_depan_pengguna: true,
                        nama_belakang_pengguna: true,
                        avatar: true,
                    },
                },
            },
            where: {
                status_pembayaran: true,
                workshop: {
                    id_facilitator: id,
                },
            },
        });
        return {
            sales: latestSales.map((sale) => ({
                id: sale.id_pendaftaran,
                participantName: `${sale.nama_depan_peserta} ${sale.nama_belakang_peserta}`,
                workshopTitle: sale.workshop.judul_workshop,
                amount: sale.workshop.harga_workshop,
                formattedAmount: `Rp.${Number(sale.workshop.harga_workshop).toLocaleString('id-ID')}`,
                registrationDate: sale.tanggal_pendaftaran,
                avatar: sale.pengguna.avatar,
                workshopImage: sale.workshop.gambar_workshop,
                facilitator: sale.workshop.id_facilitator,
            })),
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
exports.getLatestSales = getLatestSales;
