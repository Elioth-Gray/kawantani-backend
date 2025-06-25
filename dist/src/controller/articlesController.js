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
exports.getSaved = exports.unLike = exports.like = exports.unSave = exports.save = exports.comment = exports.deleteArtic = exports.toggle = exports.verify = exports.update = exports.create = exports.getById = exports.getOwnArticleById = exports.getOwnArticle = exports.getAllActive = exports.getAll = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const articlesService_1 = require("../services/articlesService");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, articlesService_1.getAllArticle)();
        res.status(200).json({
            message: 'Artikel berhasil didapatkan',
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
        const result = yield (0, articlesService_1.getActiveArticle)();
        res.status(200).json({
            message: 'Artikel berhasil didapatkan',
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
const getOwnArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, articlesService_1.getArticleByUser)(user);
        res.status(200).json({
            message: 'Berhasil mendapatkan data artikel!',
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
exports.getOwnArticle = getOwnArticle;
const getOwnArticleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    const { id } = req.params;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = {
        id,
        user,
    };
    try {
        const result = yield (0, articlesService_1.getArticleByUserById)(data);
        res.status(200).json({
            message: 'Berhasil mendapatkan data artikel!',
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
exports.getOwnArticleById = getOwnArticleById;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield (0, articlesService_1.getArticleById)(id);
        res.status(200).json({
            message: 'Artikel berhasil didapatkan',
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
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const fileName = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    const data = Object.assign({ user: req.user, image: fileName }, req.body);
    try {
        const result = yield (0, articlesService_1.createArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil dibuat',
            data: result,
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'articles', fileName);
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
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const fileName = (_b = req.file) === null || _b === void 0 ? void 0 : _b.filename;
    const { id } = req.params;
    const data = Object.assign({ user: req.user, image: fileName, id }, req.body);
    try {
        const result = yield (0, articlesService_1.updateArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil dihapus',
            data: result,
        });
    }
    catch (error) {
        if (fileName) {
            const filePath = path_1.default.join(__dirname, '..', 'uploads', 'articles', fileName);
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
exports.update = update;
const verify = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { status } = req.body;
    const data = {
        id,
        status,
    };
    try {
        const result = yield (0, articlesService_1.verifyArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil diverifikasi',
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
const toggle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield (0, articlesService_1.toggleArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil diperbarui',
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
exports.toggle = toggle;
const deleteArtic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield (0, articlesService_1.deleteArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil dihapus',
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
exports.deleteArtic = deleteArtic;
const comment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, articlesService_1.addComment)(data);
        res.status(200).json({
            message: 'Komentar berhasil dibuat!',
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
exports.comment = comment;
const save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, articlesService_1.saveArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil disimpan',
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
exports.save = save;
const unSave = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, articlesService_1.unsaveArticle)(data);
        res.status(200).json({
            message: 'Simpan artikel berhasil dibatalkan',
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
exports.unSave = unSave;
const like = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, articlesService_1.likeArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil disukai',
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
exports.like = like;
const unLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    const data = Object.assign({ id,
        user }, req.body);
    try {
        const result = yield (0, articlesService_1.unlikeArticle)(data);
        res.status(200).json({
            message: 'Artikel berhasil batalkan disukai',
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
exports.unLike = unLike;
const getSaved = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized', data: null });
    }
    try {
        const result = yield (0, articlesService_1.getSavedArticle)(user);
        res.status(200).json({
            message: 'Artikel berhasil didapatkan!',
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
exports.getSaved = getSaved;
