import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TCreateWorskhop, TEditWorkshop } from '../types/workshopTypes';

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

export const createWorkshop = async (data: TCreateWorskhop) => {
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

    const workshop = await prisma.workshop.create({
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

    return workshop;
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

export const getAllWorkshops = async () => {
  try {
    const workshops = await prisma.workshop.findMany({
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

export const getWorkshopById = async (id: string) => {
  try {
    const result = await prisma.workshop.findUnique({
      where: {
        id_workshop: id,
        status_aktif: true,
      },
      include: {
        facilitator: true,
      },
    });

    if (!result) {
      throw { status: 400, message: 'Workshop tidak ditemukan' };
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

export const verifyWorkshop = async (id: string) => {
  try {
    const result = await prisma.workshop.update({
      where: {
        id_workshop: id,
      },
      data: {
        status_verifikasi: true,
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

export const deleteWorkshop = async (data: TEditWorkshop) => {
  const { id, user } = data;
  try {
    const workshop = await prisma.workshop.findUnique({
      where: {
        id_workshop: id,
      },
    });

    if (!workshop) {
      throw { status: 404, message: 'Artikel tidak ditemukan' };
    }

    console.log(`Id fac artikel ${workshop.id_facilitator}`);
    console.log(user.id);

    const isOwner = workshop.id_facilitator === user.id;
    const isAdmin = user.role === 'admin';

    if (!isOwner && !isAdmin) {
      throw { status: 403, message: 'Tidak diizinkan menghapus artikel ini' };
    }

    const result = await prisma.workshop.update({
      where: { id_workshop: id },
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
