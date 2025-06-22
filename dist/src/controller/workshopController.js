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
exports.allParticipants = exports.allSales = exports.popularWorkshops = exports.activeRegistrants = exports.getOwnWorkshop = exports.getParticipant = exports.register = exports.deleteWorks = exports.registeredDetail = exports.registered = exports.verify = exports.getById = exports.getAllActive = exports.getAll = exports.create = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const workshopService_1 = require("../services/workshopService");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const data = Object.assign({ user: req.user, image: fileName }, req.body);
    try {
        const result = yield (0, workshopService_1.createWorkshop)(data);
        res.status(200).json({
            message: 'Artikel berhasil dibuat',
            data: result,
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'workshops', fileName);
            fs_1.default.unlink(filePath, (err) => {
                if (err)
                    console.error('Gagal menghapus file avatar:', err.message);
            });
        }
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.create = create;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, workshopService_1.getAllWorkshops)();
        res.status(200).json({
            message: 'Workshop berhasil didapatkan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getAll = getAll;
const getAllActive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, workshopService_1.getActiveWorkshops)();
        res.status(200).json({
            message: 'Workshop berhasil didapatkan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getAllActive = getAllActive;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield (0, workshopService_1.getWorkshopById)(id);
        res.status(200).json({
            message: 'Workshop berhasil didapatkan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getById = getById;
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    const data = {
        id,
        status,
    };
    try {
        const result = yield (0, workshopService_1.verifyWorkshop)(data);
        res.status(200).json({
            message: 'Workshop berhasil diverifikasi',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.verify = verify;
const registered = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, workshopService_1.getRegisteredWorkshop)(user);
        res.status(200).json({
            message: 'Workshop berhasil didapatkan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.registered = registered;
const registeredDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const { id } = req.params;
    const data = {
        user,
        id,
    };
    try {
        const result = yield (0, workshopService_1.getRegisteredWorkshopDetail)(data);
        res.status(200).json({
            message: 'Partisipan workshop berhasil didapatkan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.registeredDetail = registeredDetail;
const deleteWorks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = {
        id,
        user,
    };
    try {
        const result = yield (0, workshopService_1.deleteWorkshop)(data);
        res.status(200).json({
            message: 'Workshop berhasil dihapus',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.deleteWorks = deleteWorks;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, workshopService_1.registerWorkshop)(data);
        res.status(200).json({
            message: 'Berhasil daftar workshop!',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.register = register;
// export const pay = async (req: IReqUser, res: Response) => {
//   const user = req.user;
//   if (!user) {
//     return res.status(401).json({ message: 'Unauthorized', data: null });
//   }
//   const data = {
//     user,
//     ...req.body,
//   };
//   try {
//     const result = await payRegistration(data);
//     res.status(200).json({
//       message: 'Berhasil membayar pendaftaran!',
//       data: result,
//     });
//   } catch (error) {
//     const err = error as unknown as Error;
//     res.status(400).json({
//       message: err.message,
//       data: null,
//     });
//   }
// };
const getParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, workshopService_1.getWorkshopParticipant)(user);
        res.status(200).json({
            message: 'Berhasil mendapatkan partisipan workshop!',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getParticipant = getParticipant;
const getOwnWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, workshopService_1.getWorkshopByFacilitator)(user);
        res.status(200).json({
            message: 'Berhasil mendapatkan data workshop!',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.getOwnWorkshop = getOwnWorkshop;
const activeRegistrants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, workshopService_1.getActiveRegistrants)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan peserta aktif',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.activeRegistrants = activeRegistrants;
const popularWorkshops = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, workshopService_1.getPopularWorkshops)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan data workshop populer',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.popularWorkshops = popularWorkshops;
const allSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, workshopService_1.getAllSales)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan data penjualan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.allSales = allSales;
const allParticipants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const id = user.id;
    try {
        const result = yield (0, workshopService_1.getAllParticipants)(id);
        res.status(200).json({
            message: 'Berhasil mendapatkan data penjualan',
            data: result,
        });
    }
    catch (error) {
        const err = error;
        res.status(400).json({
            message: err.message,
            data: null,
        });
    }
});
exports.allParticipants = allParticipants;
