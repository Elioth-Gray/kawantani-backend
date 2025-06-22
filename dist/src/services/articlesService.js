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
exports.getArticleByUserById = exports.getArticleByUser = exports.getSavedArticle = exports.unlikeArticle = exports.likeArticle = exports.unsaveArticle = exports.saveArticle = exports.addComment = exports.deleteArticle = exports.toggleArticle = exports.verifyArticle = exports.updateArticle = exports.createArticle = exports.getArticleById = exports.getActiveArticle = exports.getAllArticle = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
const Yup = __importStar(require("yup"));
const client_1 = require("@prisma/client");
const createSchema = Yup.object({
    title: Yup.string().required('Judul artikel harus diisi!'),
    description: Yup.string().required('Deskripsi artikel harus diisi!'),
    content: Yup.string().required('Konten artikel harus diisi!'),
    image: Yup.string().required('Gambar artikel harus diisi!'),
    category: Yup.string().required('Kategori artikel harus diisi!'),
    articleStatus: Yup.mixed()
        .oneOf(['DRAFT', 'PUBLISHED'])
        .required('Status artikel tidak valid!'),
});
const updateSchema = Yup.object({
    title: Yup.string().required('Judul artikel harus diisi!'),
    description: Yup.string().required('Deskripsi artikel harus diisi!'),
    content: Yup.string().required('Konten artikel harus diisi!'),
    image: Yup.string().notRequired(),
    articleStatus: Yup.mixed()
        .oneOf(['DRAFT', 'PUBLISHED'], 'Status artikel tidak valid!')
        .required('Status artikel tidak boleh kosong!'),
});
const commentSchema = Yup.object({
    id: Yup.string().required('ID artikel harus diisi!'),
    content: Yup.string().required('Komentar harus ada isinya!'),
});
function simpleSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
}
const getAllArticle = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield prismaClient_1.default.artikel.findMany({
            where: {
                status_aktif: true,
            },
            select: {
                id_artikel: true,
                judul_artikel: true,
                kategori: {
                    select: {
                        nama_kategori_artikel: true,
                    },
                },
                pengguna: {
                    select: {
                        nama_depan_pengguna: true,
                        nama_belakang_pengguna: true,
                    },
                },
                tanggal_artikel: true,
                status_aktif: true,
                status_artikel: true,
                gambar_artikel: true,
                status_verifikasi: true,
            },
        });
        if (!articles) {
            throw { status: 400, message: 'Artikel tidak ditemukan!' };
        }
        return articles;
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
exports.getAllArticle = getAllArticle;
const getActiveArticle = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield prismaClient_1.default.artikel.findMany({
            where: {
                status_aktif: true,
                status_verifikasi: client_1.StatusVerifikasiArtikel.DIVERIFIKASI,
                status_artikel: client_1.StatusArtikel.PUBLISHED,
            },
            select: {
                id_artikel: true,
                judul_artikel: true,
                kategori: {
                    select: {
                        id_kategori_artikel: true,
                        nama_kategori_artikel: true,
                    },
                },
                pengguna: {
                    select: {
                        nama_depan_pengguna: true,
                        nama_belakang_pengguna: true,
                    },
                },
                tanggal_artikel: true,
                status_aktif: true,
                status_artikel: true,
                gambar_artikel: true,
                status_verifikasi: true,
            },
        });
        if (!articles) {
            throw { status: 400, message: 'Artikel tidak ditemukan!' };
        }
        return articles;
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
exports.getActiveArticle = getActiveArticle;
const getArticleById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
            include: {
                kategori: true,
                komentar_artikel: {
                    include: {
                        pengguna: true,
                    },
                },
                pengguna: true,
                artikel_disukai: true,
            },
        });
        if (!result) {
            throw { status: 400, message: 'Artikel tidak ditemukan' };
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
exports.getArticleById = getArticleById;
const createArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, title, description, content, image, category, articleStatus } = data;
    try {
        yield createSchema.validate(data);
        const kategori = yield prismaClient_1.default.kategoriArtikel.findFirst({
            where: {
                id_kategori_artikel: parseInt(category, 10),
            },
        });
        if (!kategori) {
            throw {
                status: 400,
                message: `Kategori '${category}' tidak ditemukan.`,
            };
        }
        const kategoriSlug = simpleSlug(kategori.nama_kategori_artikel);
        const count = yield prismaClient_1.default.artikel.count({
            where: { id_kategori_artikel: kategori.id_kategori_artikel },
        });
        const nomorUrut = String(count + 1).padStart(3, '0');
        const id_artikel = `${kategoriSlug}-${nomorUrut}`;
        if (!Object.values(client_1.StatusArtikel).includes(articleStatus)) {
            throw {
                status: 400,
                message: 'Status artikel tidak valid!',
            };
        }
        const tanggalPembuatanArtikel = new Date();
        tanggalPembuatanArtikel.setHours(0, 0, 0, 0);
        const artikel = yield prismaClient_1.default.artikel.create({
            data: {
                id_artikel,
                judul_artikel: title,
                deskripsi_artikel: description,
                isi_artikel: content,
                gambar_artikel: image,
                status_artikel: articleStatus,
                id_kategori_artikel: kategori.id_kategori_artikel,
                id_pengguna: user.id,
                tanggal_artikel: tanggalPembuatanArtikel,
                status_verifikasi: client_1.StatusVerifikasiArtikel.MENUNGGU,
            },
        });
        return artikel;
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
exports.createArticle = createArticle;
const updateArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, user, title, description, image, content, articleStatus } = data;
    try {
        yield updateSchema.validate({
            title,
            description,
            image,
            content,
            articleStatus,
        });
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
                id_pengguna: user.id,
            },
        });
        if (!available) {
            throw { status: 400, message: 'Artikel tidak ditemukan!' };
        }
        if (!Object.values(client_1.StatusArtikel).includes(articleStatus)) {
            throw {
                status: 400,
                message: 'Status artikel tidak valid!',
            };
        }
        const artikel = yield prismaClient_1.default.artikel.update({
            where: {
                id_artikel: id,
            },
            data: {
                judul_artikel: title,
                deskripsi_artikel: description,
                isi_artikel: content,
                gambar_artikel: image,
                status_artikel: articleStatus,
                status_verifikasi: client_1.StatusVerifikasiArtikel.MENUNGGU,
            },
        });
        return artikel;
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
exports.updateArticle = updateArticle;
const verifyArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!['MENUNGGU', 'DIVERIFIKASI', 'DITOLAK'].includes(data.status)) {
            throw {
                status: 400,
                message: 'Status verifikasi tidak valid!',
            };
        }
        let verify;
        (data === null || data === void 0 ? void 0 : data.status) === client_1.StatusVerifikasiArtikel.DIVERIFIKASI
            ? (verify = client_1.StatusVerifikasiArtikel.DIVERIFIKASI)
            : (verify = client_1.StatusVerifikasiArtikel.DITOLAK);
        const result = yield prismaClient_1.default.artikel.update({
            where: {
                id_artikel: data.id,
            },
            data: {
                status_verifikasi: verify,
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
exports.verifyArticle = verifyArticle;
const toggleArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, user } = data;
    try {
        const currentStatus = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
                id_pengguna: user.id,
            },
            select: {
                status_artikel: true,
            },
        });
        if (!currentStatus) {
            throw { status: 400, message: 'Artikel tidak ditemukan' };
        }
        let toggle;
        (currentStatus === null || currentStatus === void 0 ? void 0 : currentStatus.status_artikel) === client_1.StatusArtikel.DRAFT
            ? (toggle = client_1.StatusArtikel.PUBLISHED)
            : (toggle = client_1.StatusArtikel.DRAFT);
        const result = yield prismaClient_1.default.artikel.update({
            where: {
                id_artikel: id,
            },
            data: {
                status_artikel: toggle,
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
exports.toggleArticle = toggleArticle;
const deleteArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    try {
        const article = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!article) {
            throw { status: 404, message: 'Artikel tidak ditemukan' };
        }
        const isOwner = article.id_pengguna === user.id;
        const isAdmin = user.role === 'admin';
        if (!isOwner && !isAdmin) {
            throw { status: 403, message: 'Tidak diizinkan menghapus artikel ini' };
        }
        const result = yield prismaClient_1.default.artikel.update({
            where: {
                id_artikel: id,
            },
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
exports.deleteArticle = deleteArticle;
const addComment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id, content } = data;
    try {
        yield commentSchema.validate(data);
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!available) {
            throw { status: 200, message: 'Artikel tidak ditemukan!' };
        }
        const tanggalPembuatanKomentar = new Date();
        tanggalPembuatanKomentar.setHours(0, 0, 0, 0);
        const result = yield prismaClient_1.default.komentarArtikel.create({
            data: {
                id_artikel: id,
                id_pengguna: user.id,
                komentar: content,
                tanggal_komentar: tanggalPembuatanKomentar,
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
exports.addComment = addComment;
const saveArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    try {
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!available) {
            throw { status: 200, message: 'Artikel tidak ditemukan!' };
        }
        const result = yield prismaClient_1.default.artikelDisimpan.create({
            data: {
                id_artikel: id,
                id_pengguna: user.id,
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
exports.saveArticle = saveArticle;
const unsaveArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    try {
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!available) {
            throw { status: 200, message: 'Artikel tidak ditemukan!' };
        }
        const result = yield prismaClient_1.default.artikelDisimpan.delete({
            where: {
                id_artikel_id_pengguna: {
                    id_artikel: id,
                    id_pengguna: user.id,
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
exports.unsaveArticle = unsaveArticle;
const likeArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id, rating } = data;
    try {
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!available) {
            throw { status: 200, message: 'Artikel tidak ditemukan!' };
        }
        const result = yield prismaClient_1.default.artikelDisukai.create({
            data: {
                id_artikel: id,
                id_pengguna: user.id,
                rating: rating,
            },
        });
        if (!result) {
            throw { status: 200, message: 'Artikel disimpan tidak ditemukan!' };
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
exports.likeArticle = likeArticle;
const unlikeArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id, rating } = data;
    try {
        const available = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
            },
        });
        if (!available) {
            throw { status: 200, message: 'Artikel tidak ditemukan!' };
        }
        const result = yield prismaClient_1.default.artikelDisukai.delete({
            where: {
                id_artikel_id_pengguna: {
                    id_artikel: id,
                    id_pengguna: user.id,
                },
            },
        });
        if (!result) {
            throw { status: 200, message: 'Like tidak ditemukan!' };
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
exports.unlikeArticle = unlikeArticle;
const getSavedArticle = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield prismaClient_1.default.artikelDisimpan.findMany({
            where: {
                id_pengguna: id,
                artikel: {
                    status_aktif: true,
                },
            },
            include: {
                artikel: true,
            },
        });
        return articles;
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
exports.getSavedArticle = getSavedArticle;
const getArticleByUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const article = yield prismaClient_1.default.artikel.findMany({
            where: {
                id_pengguna: user.id,
                status_aktif: true,
            },
        });
        return article;
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
exports.getArticleByUser = getArticleByUser;
const getArticleByUserById = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, id } = data;
    try {
        const result = yield prismaClient_1.default.artikel.findUnique({
            where: {
                id_artikel: id,
                id_pengguna: user.id,
                status_aktif: true,
            },
            include: {
                kategori: true,
                komentar_artikel: {
                    include: {
                        pengguna: true,
                    },
                },
                pengguna: true,
                artikel_disukai: true,
            },
        });
        if (!result) {
            throw { status: 400, message: 'Artikel tidak ditemukan' };
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
exports.getArticleByUserById = getArticleByUserById;
