import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import {
  TCommentArticle,
  TCreateArticle,
  TEditArticle,
  TLikeArticle,
  TSaveArticle,
  TUpdateArticle,
  TVerify,
} from '../types/articlesType';
import { StatusArtikel, StatusVerifikasiArtikel } from '@prisma/client';
import { TToken } from '../types/authTypes';

const createSchema = Yup.object({
  title: Yup.string().required('Judul artikel harus diisi!'),
  description: Yup.string().required('Deskripsi artikel harus diisi!'),
  content: Yup.string().required('Konten artikel harus diisi!'),
  image: Yup.string().required('Gambar artikel harus diisi!'),
  category: Yup.string().required('Kategori artikel harus diisi!'),
  articleStatus: Yup.mixed<'DRAFT' | 'PUBLISHED'>()
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

function simpleSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export const getAllArticle = async () => {
  try {
    const articles = await prisma.artikel.findMany({
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const getActiveArticle = async () => {
  try {
    const articles = await prisma.artikel.findMany({
      where: {
        status_aktif: true,
        status_verifikasi: StatusVerifikasiArtikel.DIVERIFIKASI,
        status_artikel: StatusArtikel.PUBLISHED,
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const getArticleById = async (id: string) => {
  try {
    const result = await prisma.artikel.findUnique({
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const createArticle = async (data: TCreateArticle) => {
  const { user, title, description, content, image, category, articleStatus } =
    data;

  try {
    await createSchema.validate(data);

    const kategori = await prisma.kategoriArtikel.findFirst({
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

    const count = await prisma.artikel.count({
      where: { id_kategori_artikel: kategori.id_kategori_artikel },
    });

    const nomorUrut = String(count + 1).padStart(3, '0');
    const id_artikel = `${kategoriSlug}-${nomorUrut}`;

    if (
      !Object.values(StatusArtikel).includes(articleStatus as StatusArtikel)
    ) {
      throw {
        status: 400,
        message: 'Status artikel tidak valid!',
      };
    }

    const tanggalPembuatanArtikel = new Date();
    tanggalPembuatanArtikel.setHours(0, 0, 0, 0);

    const artikel = await prisma.artikel.create({
      data: {
        id_artikel,
        judul_artikel: title,
        deskripsi_artikel: description,
        isi_artikel: content,
        gambar_artikel: image,
        status_artikel: articleStatus as StatusArtikel,
        id_kategori_artikel: kategori.id_kategori_artikel,
        id_pengguna: user.id,
        tanggal_artikel: tanggalPembuatanArtikel,
        status_verifikasi: StatusVerifikasiArtikel.MENUNGGU,
      },
    });

    return artikel;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const updateArticle = async (data: TUpdateArticle) => {
  const { id, user, title, description, image, content, articleStatus } = data;
  try {
    await updateSchema.validate({
      title,
      description,
      image,
      content,
      articleStatus,
    });

    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
        id_pengguna: user.id,
      },
    });

    if (!available) {
      throw { status: 400, message: 'Artikel tidak ditemukan!' };
    }

    if (
      !Object.values(StatusArtikel).includes(articleStatus as StatusArtikel)
    ) {
      throw {
        status: 400,
        message: 'Status artikel tidak valid!',
      };
    }

    const artikel = await prisma.artikel.update({
      where: {
        id_artikel: id,
      },
      data: {
        judul_artikel: title,
        deskripsi_artikel: description,
        isi_artikel: content,
        gambar_artikel: image,
        status_artikel: articleStatus as StatusArtikel,
        status_verifikasi: StatusVerifikasiArtikel.MENUNGGU,
      },
    });

    return artikel;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const verifyArticle = async (data: TVerify) => {
  try {
    if (!['MENUNGGU', 'DIVERIFIKASI', 'DITOLAK'].includes(data.status)) {
      throw {
        status: 400,
        message: 'Status verifikasi tidak valid!',
      };
    }

    let verify: StatusVerifikasiArtikel;

    data?.status === StatusVerifikasiArtikel.DIVERIFIKASI
      ? (verify = StatusVerifikasiArtikel.DIVERIFIKASI)
      : (verify = StatusVerifikasiArtikel.DITOLAK);

    const result = await prisma.artikel.update({
      where: {
        id_artikel: data.id,
      },
      data: {
        status_verifikasi: verify,
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const toggleArticle = async (data: TEditArticle) => {
  const { id, user } = data;
  try {
    const currentStatus = await prisma.artikel.findUnique({
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

    let toggle: StatusArtikel;

    currentStatus?.status_artikel === StatusArtikel.DRAFT
      ? (toggle = StatusArtikel.PUBLISHED)
      : (toggle = StatusArtikel.DRAFT);

    const result = await prisma.artikel.update({
      where: {
        id_artikel: id,
      },
      data: {
        status_artikel: toggle,
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const deleteArticle = async (data: TEditArticle) => {
  const { user, id } = data;
  try {
    const article = await prisma.artikel.findUnique({
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

    const result = await prisma.artikel.update({
      where: {
        id_artikel: id,
      },
      data: {
        status_aktif: false,
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const addComment = async (data: TCommentArticle) => {
  const { user, id, content } = data;
  try {
    await commentSchema.validate(data);

    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
      },
    });

    if (!available) {
      throw { status: 200, message: 'Artikel tidak ditemukan!' };
    }

    const tanggalPembuatanKomentar = new Date();
    tanggalPembuatanKomentar.setHours(0, 0, 0, 0);

    const result = await prisma.komentarArtikel.create({
      data: {
        id_artikel: id,
        id_pengguna: user.id,
        komentar: content,
        tanggal_komentar: tanggalPembuatanKomentar,
      },
      include: {
        pengguna: {
          select: {
            id_pengguna: true,
            nama_depan_pengguna: true,
            nama_belakang_pengguna: true,
            avatar: true,
          },
        },
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const saveArticle = async (data: TSaveArticle) => {
  const { user, id } = data;
  try {
    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
      },
    });

    if (!available) {
      throw { status: 200, message: 'Artikel tidak ditemukan!' };
    }

    const result = await prisma.artikelDisimpan.create({
      data: {
        id_artikel: id,
        id_pengguna: user.id,
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const unsaveArticle = async (data: TSaveArticle) => {
  const { user, id } = data;
  try {
    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
      },
    });

    if (!available) {
      throw { status: 200, message: 'Artikel tidak ditemukan!' };
    }

    const result = await prisma.artikelDisimpan.delete({
      where: {
        id_artikel_id_pengguna: {
          id_artikel: id,
          id_pengguna: user.id,
        },
      },
    });

    return result;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const likeArticle = async (data: TLikeArticle) => {
  const { user, id, rating } = data;
  try {
    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
      },
    });

    if (!available) {
      throw { status: 200, message: 'Artikel tidak ditemukan!' };
    }

    const result = await prisma.artikelDisukai.create({
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const unlikeArticle = async (data: TLikeArticle) => {
  const { user, id, rating } = data;
  try {
    const available = await prisma.artikel.findUnique({
      where: {
        id_artikel: id,
      },
    });

    if (!available) {
      throw { status: 200, message: 'Artikel tidak ditemukan!' };
    }

    const result = await prisma.artikelDisukai.delete({
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const getSavedArticle = async (user: TToken) => {
  try {
    const articles = await prisma.artikelDisimpan.findMany({
      where: {
        id_pengguna: user.id,
        artikel: {
          status_aktif: true,
        },
      },
      include: {
        artikel: true,
      },
    });

    return articles;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const getArticleByUser = async (user: TToken) => {
  try {
    const article = await prisma.artikel.findMany({
      where: {
        id_pengguna: user.id,
        status_aktif: true,
      },
    });

    return article;
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};

export const getArticleByUserById = async (data: TSaveArticle) => {
  const { user, id } = data;
  try {
    const result = await prisma.artikel.findUnique({
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
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      throw {
        status: 400,
        message: error.errors.join(', '),
      };
    }
    throw error;
  }
};
