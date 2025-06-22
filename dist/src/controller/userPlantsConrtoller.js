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
Object.defineProperty(exports, "__esModule", { value: true });
exports.note = exports.finish = exports.getToday = exports.updateTask = exports.getDailyTasks = exports.getPlantDetail = exports.getPlant = exports.create = void 0;
const userPlantsService_1 = require("../services/userPlantsService");
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { plantId, customName } = req.body;
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const data = {
        plantId,
        user,
        customName,
    };
    try {
        const plant = yield (0, userPlantsService_1.createUserPlant)(data);
        res.status(200).json({
            message: 'Tanaman berhasil dibuat!',
            data: plant,
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
exports.create = create;
const getPlant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    try {
        const plant = yield (0, userPlantsService_1.getUserPlant)(user);
        res.status(200).json({
            message: 'Tanaman berhasil didapatkan',
            data: plant,
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
exports.getPlant = getPlant;
const getPlantDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const { id } = req.params;
    const data = {
        user,
        userPlantId: id,
    };
    try {
        const plant = yield (0, userPlantsService_1.getUserPlantDetail)(data);
        res.status(200).json({
            message: 'Tanaman berhasil didapatkan',
            data: plant,
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
exports.getPlantDetail = getPlantDetail;
const getDailyTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = req.body;
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const { id } = req.params;
    const data = {
        userPlantId: id,
        date,
        user,
    };
    try {
        const plant = yield (0, userPlantsService_1.getUserDailyTasks)(data);
        res.status(200).json({
            message: 'Tugas Harian berhasil didapatkan',
            data: plant,
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
exports.getDailyTasks = getDailyTasks;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userPlantId, taskId } = req.params;
    const { doneStatus } = req.body;
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const data = {
        userPlantId,
        taskId: parseInt(taskId, 10),
        user,
        doneStatus,
    };
    try {
        const plant = yield (0, userPlantsService_1.updateTaskProgress)(data);
        res.status(200).json({
            message: 'Berhasil mengupdate tugas',
            data: plant,
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
exports.updateTask = updateTask;
const getToday = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    try {
        const plant = yield (0, userPlantsService_1.getTodayTasks)(user);
        res.status(200).json({
            message: 'Berhasil mendapatkan tugas',
            data: plant,
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
exports.getToday = getToday;
const finish = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const data = {
        id,
        user,
    };
    try {
        const plant = yield (0, userPlantsService_1.finishPlant)(data);
        res.status(200).json({
            message: 'Tanaman berhasil diselesaikan',
            data: plant,
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
exports.finish = finish;
const note = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { plantDayId, userPlantId } = req.params;
    const user = req.user;
    const { note } = req.body;
    if (!user) {
        throw { status: 400, message: 'Invalid' };
    }
    const parsedId = parseInt(plantDayId, 10);
    const data = {
        plantId: userPlantId,
        dayId: parsedId,
        user,
        note,
    };
    try {
        const plant = yield (0, userPlantsService_1.addDailyNote)(data);
        res.status(200).json({
            message: 'Catatan berhasil di',
            data: plant,
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
exports.note = note;
