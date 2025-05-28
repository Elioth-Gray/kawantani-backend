import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TCreateArticle } from '../types/articlesType';
import { StatusArtikel } from '../generated/prisma';
import { TCreateWorskhop } from '../types/workshopTypes';

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

function simpleSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

const create = async (data: TCreateWorskhop) => {
  const {
    user,
    title,
    description,
    date,
    address,
    image,
    price,
    capacity,
    lat,
    long,
    regency,
  } = data;

  try {
    await createSchema.validate(data);

    const kategoriSlug = simpleSlug(user.firstName);

    const count = await prisma.workshop.count({
      where: { id_facilitator: user.id },
    });

    const nomorUrut = String(count + 1).padStart(3, '0');
    const id_workshop = `${kategoriSlug}-${nomorUrut}`;

    const artikel = await prisma.workshop.create({
      data: {
        id_workshop: id_workshop,
        judul_workshop: title,
        tanggal_workshop: date,
        alaamt_lengkap_workshop: address,
        deskripsi_workshop: description,
        harga_workshop: price,
        kapasitas: parseInt(capacity, 10),
        lat_lokasi: parseFloat(lat),
        long_lokasi: parseFloat(long),
        gambar_workshop: image,
        id_kabupaten: parseInt(regency),
        id_facilitator: user.id,
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
