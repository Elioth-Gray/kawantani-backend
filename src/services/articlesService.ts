import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TCreateArticle } from '../types/articlesType';
import { StatusArtikel } from '../generated/prisma';

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

function simpleSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

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

    const artikel = await prisma.artikel.create({
      data: {
        id_artikel,
        judul_artikel: title,
        deskripsi_artikel: description,
        isi_artikel: content,
        gambar_artikel: image,
        status_artikel: articleStatus as StatusArtikel,
        status_verifikasi: false,
        id_kategori_artikel: kategori.id_kategori_artikel,
        id_pengguna: user.id,
        tanggal_artikel: new Date(),
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
