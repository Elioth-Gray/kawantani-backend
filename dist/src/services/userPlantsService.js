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
exports.addDailyNote = exports.finishPlant = exports.getTodayTasks = exports.updateTaskProgress = exports.getUserDailyTasks = exports.getUserPlantDetail = exports.getUserPlant = exports.createUserPlant = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const createSchema = Yup.object({
    customName: Yup.string().required('Nama custom harus diisi!'),
});
const updateTaskSchema = Yup.object({
    doneStatus: Yup.boolean().required('Status selesai harus diisi!'),
});
const createUserPlant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { plantId, user, customName } = data;
    try {
        yield createSchema.validate({ customName });
        const tanaman = yield prismaClient_1.default.tanaman.findUnique({
            where: {
                id_tanaman: plantId,
            },
            include: {
                hari_penanaman: {
                    include: {
                        tugas_penanaman: true,
                    },
                },
            },
        });
        if (!tanaman) {
            throw { status: 400, message: 'Tanaman tidak ditemukan!' };
        }
        const tanggalPenanaman = new Date();
        const tanggalTargetPanen = new Date();
        tanggalTargetPanen.setDate(tanggalTargetPanen.getDate() + tanaman.durasi_penanaman);
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.create({
            data: {
                nama_custom: customName,
                tanggal_penanaman: tanggalPenanaman,
                tanggal_target_panen: tanggalTargetPanen,
                id_tanaman: plantId,
                id_pengguna: user.id,
            },
        });
        for (const hariPenanaman of tanaman.hari_penanaman) {
            const tanggalAktual = new Date(tanggalPenanaman);
            tanggalAktual.setDate(tanggalAktual.getDate() + hariPenanaman.hari_ke - 1);
            const hariTanamanPengguna = yield prismaClient_1.default.hariTanamanPengguna.create({
                data: {
                    hari_ke: hariPenanaman.hari_ke,
                    tanggal_aktual: tanggalAktual,
                    fase_penanaman: hariPenanaman.nama_fase,
                    total_tugas: hariPenanaman.tugas_penanaman.length,
                    id_tanaman_pengguna: tanamanPengguna.id_tanaman_pengguna,
                },
            });
            const tugasData = hariPenanaman.tugas_penanaman.map((tugas) => ({
                nama_tugas: tugas.nama_tugas,
                jenis_tugas: tugas.jenis_tugas,
                estimasi_waktu: tugas.estimasi_waktu,
                id_hari_tanaman_pengguna: hariTanamanPengguna.id_hari_tanaman_pengguna,
            }));
            if (tugasData.length > 0) {
                yield prismaClient_1.default.tugasPenanamanPengguna.createMany({
                    data: tugasData,
                });
            }
        }
        return {
            success: true,
            data: tanamanPengguna,
            message: 'Tanaman berhasil ditambahkan ke akun Anda',
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
exports.createUserPlant = createUserPlant;
const getUserPlant = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.findMany({
            where: {
                id_pengguna: user.id,
            },
            include: {
                tanaman: {
                    include: {
                        kategori: true,
                    },
                },
            },
            orderBy: {
                tanggal_penanaman: 'desc',
            },
        });
        return tanamanPengguna;
    }
    catch (error) {
        throw error;
    }
});
exports.getUserPlant = getUserPlant;
const getUserPlantDetail = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, userPlantId } = data;
    try {
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.findFirst({
            where: {
                id_pengguna: user.id,
                id_tanaman_pengguna: userPlantId,
            },
            include: {
                tanaman: {
                    include: {
                        kategori: true,
                        instruksi_tanaman: {
                            orderBy: { urutan: 'asc' },
                        },
                    },
                },
                hari_tanaman: {
                    include: {
                        tugas_penanaman: true,
                    },
                    orderBy: { id_hari_tanaman_pengguna: 'asc' },
                },
            },
        });
        if (!tanamanPengguna) {
            throw { status: 404, message: 'Tanaman tidak ditemukan!' };
        }
        return tanamanPengguna;
    }
    catch (error) {
        throw error;
    }
});
exports.getUserPlantDetail = getUserPlantDetail;
const getUserDailyTasks = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { userPlantId, date, user } = data;
    try {
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.findFirst({
            where: {
                id_tanaman_pengguna: userPlantId,
                id_pengguna: user.id,
            },
            select: {
                tanggal_penanaman: true,
            },
        });
        if (!tanamanPengguna) {
            throw new Error('Tanaman pengguna tidak ditemukan');
        }
        const endDate = date ? new Date(date + 'T23:59:59.999Z') : new Date();
        const startDate = new Date(tanamanPengguna.tanggal_penanaman);
        startDate.setHours(0, 0, 0, 0);
        const tugasHarian = yield prismaClient_1.default.hariTanamanPengguna.findMany({
            where: {
                id_tanaman_pengguna: userPlantId,
                tanggal_aktual: {
                    gte: startDate,
                    lte: endDate,
                },
                tanaman_pengguna: {
                    id_pengguna: user.id,
                },
            },
            include: {
                tugas_penanaman: true,
                tanaman_pengguna: {
                    include: {
                        tanaman: true,
                    },
                },
            },
            orderBy: {
                tanggal_aktual: 'asc',
            },
        });
        return tugasHarian;
    }
    catch (error) {
        throw error;
    }
});
exports.getUserDailyTasks = getUserDailyTasks;
const updateTaskProgress = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { userPlantId, taskId, doneStatus, user } = data;
    try {
        yield updateTaskSchema.validate({ doneStatus });
        const tugasUpdate = yield prismaClient_1.default.tugasPenanamanPengguna.update({
            where: {
                id_tugas_penanaman_pengguna: taskId,
                hari_tanaman: {
                    tanaman_pengguna: {
                        id_pengguna: user.id,
                    },
                },
            },
            data: {
                status_selesai: doneStatus,
                tanggal_selesai: doneStatus ? new Date() : null,
            },
            include: {
                hari_tanaman: true,
            },
        });
        if (!tugasUpdate) {
            throw {
                status: 400,
                message: 'Tugas tidak ditemukan!',
            };
        }
        const hariTanaman = yield prismaClient_1.default.hariTanamanPengguna.findUnique({
            where: {
                id_hari_tanaman_pengguna: tugasUpdate.id_hari_tanaman_pengguna,
            },
            include: {
                tugas_penanaman: true,
            },
        });
        if (hariTanaman) {
            const tugasSelesai = hariTanaman.tugas_penanaman.filter((tugas) => tugas.status_selesai).length;
            const totalTugas = hariTanaman.tugas_penanaman.length;
            const progressHari = totalTugas > 0 ? (tugasSelesai / totalTugas) * 100 : 0;
            yield prismaClient_1.default.hariTanamanPengguna.update({
                where: {
                    id_hari_tanaman_pengguna: hariTanaman.id_hari_tanaman_pengguna,
                },
                data: {
                    tugas_selesai: tugasSelesai,
                    progress_hari_persen: progressHari,
                    status_hari: progressHari === 100
                        ? 'SELESAI'
                        : progressHari > 0
                            ? 'SEDANG_BERJALAN'
                            : 'BELUM_DIMULAI',
                },
            });
        }
        yield updatePlantProgress(userPlantId);
        return tugasUpdate;
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
exports.updateTaskProgress = updateTaskProgress;
const updatePlantProgress = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hariTanaman = yield prismaClient_1.default.hariTanamanPengguna.findMany({
            where: { id_tanaman_pengguna: id },
        });
        if (hariTanaman.length > 0) {
            const totalProgress = hariTanaman.reduce((sum, hari) => sum + hari.progress_hari_persen, 0);
            const averageProgress = totalProgress / hariTanaman.length;
            yield prismaClient_1.default.tanamanPengguna.update({
                where: { id_tanaman_pengguna: id },
                data: { progress_persen: averageProgress },
            });
        }
    }
    catch (error) {
        throw error;
    }
});
const getTodayTasks = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        const tugasHariIni = yield prismaClient_1.default.hariTanamanPengguna.findMany({
            where: {
                tanaman_pengguna: {
                    id_pengguna: user.id,
                },
                tanggal_aktual: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
            include: {
                tugas_penanaman: true,
                tanaman_pengguna: {
                    include: {
                        tanaman: true,
                    },
                },
            },
        });
        return tugasHariIni;
    }
    catch (error) {
        throw error;
    }
});
exports.getTodayTasks = getTodayTasks;
const finishPlant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, user } = data;
    try {
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.update({
            where: { id_tanaman_pengguna: id, id_pengguna: user.id },
            data: {
                status_penanaman: 'SELESAI',
                progress_persen: 100,
            },
        });
        return {
            success: true,
            data: tanamanPengguna,
            message: 'Selamat! Tanaman Anda telah berhasil dipanen',
        };
    }
    catch (error) {
        console.error('Error selesaikan tanaman:', error);
        throw new Error('Gagal menyelesaikan tanaman');
    }
});
exports.finishPlant = finishPlant;
const addDailyNote = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, dayId, plantId, note } = data;
    try {
        // First, verify the plant belongs to the user
        const tanamanPengguna = yield prismaClient_1.default.tanamanPengguna.findFirst({
            where: {
                id_tanaman_pengguna: plantId,
                id_pengguna: user.id,
            },
        });
        if (!tanamanPengguna) {
            throw {
                status: 404,
                message: 'Tanaman pengguna tidak ditemukan atau tidak memiliki akses',
            };
        }
        // Then find the specific day
        const hari = yield prismaClient_1.default.hariTanamanPengguna.findFirst({
            where: {
                id_hari_tanaman_pengguna: dayId,
                id_tanaman_pengguna: plantId,
            },
        });
        if (!hari) {
            throw {
                status: 404,
                message: 'Hari tanaman pengguna tidak ditemukan',
            };
        }
        const updatedHari = yield prismaClient_1.default.hariTanamanPengguna.update({
            where: {
                id_hari_tanaman_pengguna: dayId,
            },
            data: { catatan_harian: note },
        });
        return {
            success: true,
            data: updatedHari,
            message: 'Catatan harian berhasil ditambahkan.',
        };
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            throw { status: 400, message: error.errors.join(', ') };
        }
        throw error;
    }
});
exports.addDailyNote = addDailyNote;
