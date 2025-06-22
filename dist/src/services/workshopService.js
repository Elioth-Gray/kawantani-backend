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
exports.getAllParticipants = exports.getAllSales = exports.getPopularWorkshops = exports.getActiveRegistrants = exports.getWorkshopByFacilitator = exports.getWorkshopParticipant = exports.getRegisteredWorkshopDetail = exports.getRegisteredWorkshop = exports.registerWorkshop = exports.deleteWorkshop = exports.verifyWorkshop = exports.getWorkshopById = exports.getActiveWorkshops = exports.getAllWorkshops = exports.createWorkshop = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const client_1 = require("@prisma/client");
const createSchema = Yup.object({
    title: Yup.string().required('Judul workshop harus diisi!'),
    date: Yup.string().required('tanggal workshop harus diisi!'),
    address: Yup.string().required('alamat workshop harus diisi!'),
    description: Yup.string().required('Gambar artikel harus diisi!'),
    price: Yup.string().required('Kategori artikel harus diisi!'),
    capacity: Yup.string().required('Kapasitas workshop harus diisi!'),
    image: Yup.string().required('Gambar workshop harus diisi!'),
    lat: Yup.string().required('Koordinat harus lengkap'),
    long: Yup.string().required('Koordinat harus lengkap!'),
    regency: Yup.string().required('Kabupaten harus diisi!'),
});
const registerScehma = Yup.object({
    firstName: Yup.string().required('Nama Depan harus diisi!'),
    lastName: Yup.string().required('Nama belakang harus diisi!'),
    email: Yup.string().required('Email harus diisi!'),
    phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
    gender: Yup.number().required('Jenis kelmain harus diisi!'),
    paymentMethod: Yup.number().required('Metode pembayaran harus diisi!'),
});
function simpleSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}
const createWorkshop = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, title, description, date, address, image, price, capacity, lat, long, regency, startTime, endTime, } = data;
    try {
        yield createSchema.validate(data);
        const kategoriSlug = simpleSlug(user.firstName);
        const count = yield prismaClient_1.default.workshop.count({
            where: { id_facilitator: user.id },
        });
        const nomorUrut = String(count + 1).padStart(3, '0');
        const id_workshop = `${kategoriSlug}-${nomorUrut}`;
        const workshop = yield prismaClient_1.default.workshop.create({
            data: {
                id_workshop: id_workshop,
                judul_workshop: title,
                tanggal_workshop: date,
                alaamt_lengkap_workshop: address,
                deskripsi_workshop: description,
                harga_workshop: parseFloat(price),
                kapasitas: parseInt(capacity, 10),
                lat_lokasi: parseFloat(lat),
                long_lokasi: parseFloat(long),
                gambar_workshop: image,
                id_kabupaten: parseInt(regency),
                id_facilitator: user.id,
                waktu_berakhir: endTime,
                waktu_mulai: startTime,
                status_verifikasi: client_1.StatusVerifikasiWorkshop.MENUNGGU,
            },
        });
        return workshop;
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
exports.createWorkshop = createWorkshop;
const getAllWorkshops = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshops = yield prismaClient_1.default.workshop.findMany({
            where: {
                status_aktif: true,
            },
            select: {
                id_workshop: true,
                judul_workshop: true,
                tanggal_workshop: true,
                status_verifikasi: true,
                status_aktif: true,
                gambar_workshop: true,
                facilitator: {
                    select: {
                        nama_facilitator: true,
                    },
                },
            },
        });
        if (!workshops) {
            throw { status: 400, message: 'Artikel tidak ditemukan!' };
        }
        return workshops;
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
exports.getAllWorkshops = getAllWorkshops;
const getActiveWorkshops = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshops = yield prismaClient_1.default.workshop.findMany({
            where: {
                status_aktif: true,
                status_verifikasi: client_1.StatusVerifikasiWorkshop.DIVERIFIKASI,
            },
            select: {
                id_workshop: true,
                judul_workshop: true,
                tanggal_workshop: true,
                status_verifikasi: true,
                status_aktif: true,
                gambar_workshop: true,
                alaamt_lengkap_workshop: true,
                harga_workshop: true,
                waktu_berakhir: true,
                waktu_mulai: true,
                facilitator: {
                    select: {
                        nama_facilitator: true,
                    },
                },
                kabupaten: {
                    select: {
                        nama_kabupaten: true,
                        provinsi: {
                            select: {
                                nama_provinsi: true,
                            },
                        },
                    },
                },
            },
        });
        if (!workshops) {
            throw { status: 400, message: 'Artikel tidak ditemukan!' };
        }
        return workshops;
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
exports.getActiveWorkshops = getActiveWorkshops;
const getWorkshopById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.workshop.findUnique({
            where: {
                id_workshop: id,
            },
            include: {
                facilitator: {
                    include: {
                        kabupaten: {
                            include: {
                                provinsi: true,
                            },
                        },
                    },
                },
                kabupaten: {
                    include: {
                        provinsi: true,
                    },
                },
            },
        });
        if (!result) {
            throw { status: 400, message: 'Workshop tidak ditemukan' };
        }
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
exports.getWorkshopById = getWorkshopById;
const verifyWorkshop = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!['MENUNGGU', 'DIVERIFIKASI', 'DITOLAK'].includes(data.status)) {
            throw {
                status: 400,
                message: 'Status verifikasi tidak valid!',
            };
        }
        let verify;
        (data === null || data === void 0 ? void 0 : data.status) === client_1.StatusVerifikasiWorkshop.DIVERIFIKASI
            ? (verify = client_1.StatusVerifikasiWorkshop.DIVERIFIKASI)
            : (verify = client_1.StatusVerifikasiWorkshop.DITOLAK);
        const result = yield prismaClient_1.default.workshop.update({
            where: {
                id_workshop: data.id,
            },
            data: {
                status_verifikasi: verify,
            },
        });
        if (!result) {
            throw {
                status: 400,
                message: 'Workshop tidak ditemukan',
            };
        }
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
exports.verifyWorkshop = verifyWorkshop;
const deleteWorkshop = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, user } = data;
    try {
        const workshop = yield prismaClient_1.default.workshop.findUnique({
            where: {
                id_workshop: id,
            },
        });
        if (!workshop) {
            throw { status: 404, message: 'Workshop tidak ditemukan' };
        }
        console.log(`Id fac artikel ${workshop.id_facilitator}`);
        console.log(user.id);
        const isOwner = workshop.id_facilitator === user.id;
        const isAdmin = user.role === 'admin';
        if (!isOwner && !isAdmin) {
            throw { status: 403, message: 'Tidak diizinkan menghapus workshop ini' };
        }
        const result = yield prismaClient_1.default.workshop.update({
            where: { id_workshop: id },
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
exports.deleteWorkshop = deleteWorkshop;
const registerWorkshop = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, user, firstName, lastName, email, phoneNumber, gender, paymentMethod, } = data;
    try {
        yield registerScehma.validate(data);
        const available = yield prismaClient_1.default.workshop.findFirst({
            where: {
                id_workshop: id,
                status_aktif: true,
            },
        });
        if (!available) {
            throw { status: 300, message: 'Workshop tidak ditemukan!' };
        }
        const registrationDate = new Date();
        registrationDate.setHours(0, 0, 0, 0);
        const cleanId = id.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const random = Math.random().toString(36).substring(2, 7).toUpperCase();
        const nomorTiket = `TKT-${cleanId}-${date}-${random}`;
        const result = yield prismaClient_1.default.workshopTerdaftar.create({
            data: {
                nama_depan_peserta: firstName,
                nama_belakang_peserta: lastName,
                email_peserta: email,
                nomor_telepon_peserta: phoneNumber,
                jenis_kelamin_peserta: gender,
                tanggal_pendaftaran: registrationDate,
                nomor_tiket: nomorTiket,
                id_pengguna: user.id,
                id_workshop: id,
                id_metode_pembayaran: paymentMethod,
                status_pembayaran: true,
            },
        });
        if (!result) {
            throw { status: 400, message: 'Ada kesalahan!' };
        }
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
exports.registerWorkshop = registerWorkshop;
const getRegisteredWorkshop = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registered = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                id_pengguna: user.id,
            },
            distinct: ['id_workshop'],
        });
        return registered;
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
exports.getRegisteredWorkshop = getRegisteredWorkshop;
const getRegisteredWorkshopDetail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    try {
        const registered = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                id_pengguna: user.id,
                id_workshop: id,
            },
        });
        return registered;
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
exports.getRegisteredWorkshopDetail = getRegisteredWorkshopDetail;
// export const payRegistration = async (data: TPayWorkshop) => {
//   const { ticketNumber, user } = data;
//   try {
//     const available = await prisma.workshopTerdaftar.findUnique({
//       where: {
//         nomor_tiket: ticketNumber,
//         id_pengguna: user.id,
//       },
//     });
//     if (!available) {
//       throw { status: 400, message: 'Pendaftaran tidak ditemukan!' };
//     }
//     const result = await prisma.workshopTerdaftar.update({
//       where: {
//         nomor_tiket: ticketNumber,
//         id_pengguna: user.id,
//       },
//       data: {
//         status_pembayaran: true,
//       },
//     });
//     return result;
//   } catch (error: any) {
//     if (error.name === 'ValidationError') {
//       throw {
//         status: 400,
//         message: error.errors.join(', '),
//       };
//     }
//     throw error;
//   }
// };
const getWorkshopParticipant = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                workshop: {
                    id_facilitator: user.id,
                },
            },
            include: {
                workshop: true,
                pengguna: true,
                metode_pembayaran: true,
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
exports.getWorkshopParticipant = getWorkshopParticipant;
const getWorkshopByFacilitator = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = yield prismaClient_1.default.workshop.findMany({
            where: {
                id_facilitator: user.id,
                status_aktif: true,
            },
        });
        return workshop;
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
exports.getWorkshopByFacilitator = getWorkshopByFacilitator;
const getActiveRegistrants = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activeRegistrants = yield prismaClient_1.default.workshopTerdaftar.count({
            where: {
                workshop: Object.assign(Object.assign({}, (id ? { id_facilitator: id } : {})), { tanggal_workshop: {
                        gte: new Date(),
                    }, status_aktif: true }),
            },
        });
        return activeRegistrants;
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
exports.getActiveRegistrants = getActiveRegistrants;
const getPopularWorkshops = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, limit = 10) {
    try {
        const popularWorkshops = yield prismaClient_1.default.workshop.findMany({
            take: limit,
            include: {
                _count: {
                    select: {
                        pendaftaran: {
                            where: {
                                status_pembayaran: true,
                            },
                        },
                    },
                },
                facilitator: {
                    select: {
                        nama_facilitator: true,
                    },
                },
            },
            where: Object.assign(Object.assign({}, (id ? { id_facilitator: id } : {})), { status_aktif: true }),
            orderBy: {
                pendaftaran: {
                    _count: 'desc',
                },
            },
        });
        return {
            workshops: popularWorkshops.map((workshop, index) => ({
                rank: index + 1,
                id: workshop.id_workshop,
                title: workshop.judul_workshop,
                date: workshop.tanggal_workshop,
                formattedDate: workshop.tanggal_workshop.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                }),
                participantCount: workshop._count.pendaftaran,
                facilitator: workshop.facilitator.nama_facilitator,
                facilitatorId: workshop.id_facilitator,
                capacity: workshop.kapasitas,
                price: workshop.harga_workshop,
                image: workshop.gambar_workshop,
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
exports.getPopularWorkshops = getPopularWorkshops;
const getAllSales = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSales = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                workshop: {
                    id_facilitator: id,
                },
                status_pembayaran: true,
            },
            include: {
                workshop: true,
            },
        });
        return allSales;
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
exports.getAllSales = getAllSales;
const getAllParticipants = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSales = yield prismaClient_1.default.workshopTerdaftar.findMany({
            where: {
                workshop: {
                    id_facilitator: id,
                },
            },
            include: {
                workshop: true,
            },
        });
        return allSales;
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
exports.getAllParticipants = getAllParticipants;
