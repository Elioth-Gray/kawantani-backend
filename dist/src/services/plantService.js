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
exports.getPlantById = exports.getAllPlants = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const getAllPlants = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.tanaman.findMany();
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
exports.getAllPlants = getAllPlants;
const getPlantById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.tanaman.findFirst({
            where: {
                id_tanaman: id,
            },
            include: {
                kategori: true,
                instruksi_tanaman: {
                    orderBy: {
                        urutan: 'asc',
                    },
                },
                hari_penanaman: {
                    include: {
                        tugas_penanaman: {
                            orderBy: {
                                id_tugas: 'asc',
                            },
                        },
                    },
                    orderBy: {
                        hari_ke: 'asc',
                    },
                },
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
exports.getPlantById = getPlantById;
