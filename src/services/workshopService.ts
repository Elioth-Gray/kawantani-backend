import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import {
  TCreateWorskhop,
  TEditWorkshop,
  TPayWorkshop,
  TRegisterWorkshop,
  TVerify,
} from '../types/workshopTypes';
import { TToken } from '../types/authTypes';
import { StatusVerifikasiWorkshop } from '../generated/prisma';

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

const registerScehma = Yup.object({
  firstName: Yup.string().required('Nama Depan harus diisi!'),
  lastName: Yup.string().required('Nama belakang harus diisi!'),
  email: Yup.string().required('Email harus diisi!'),
  phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
  gender: Yup.number().required('Jenis kelmain harus diisi!'),
  paymentMethod: Yup.number().required('Metode pembayaran harus diisi!'),
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
    startTime,
    endTime,
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
        harga_workshop: parseFloat(price),
        kapasitas: parseInt(capacity, 10),
        lat_lokasi: parseFloat(lat),
        long_lokasi: parseFloat(long),
        gambar_workshop: image,
        id_kabupaten: parseInt(regency),
        id_facilitator: user.id,
        waktu_berakhir: endTime,
        waktu_mulai: startTime,
        status_verifikasi: StatusVerifikasiWorkshop.MENUNGGU,
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

export const getActiveWorkshops = async () => {
  try {
    const workshops = await prisma.workshop.findMany({
      where: {
        status_aktif: true,
        status_verifikasi: StatusVerifikasiWorkshop.DIVERIFIKASI,
      },
      select: {
        id_workshop: true,
        judul_workshop: true,
        tanggal_workshop: true,
        status_verifikasi: true,
        status_aktif: true,
        gambar_workshop: true,
        alaamt_lengkap_workshop: true,
        harga_workshop: true,
        waktu_berakhir: true,
        waktu_mulai: true,
        facilitator: {
          select: {
            nama_facilitator: true,
          },
        },
        kabupaten: {
          select: {
            nama_kabupaten: true,
            provinsi: {
              select: {
                nama_provinsi: true,
              },
            },
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
      },
      include: {
        facilitator: {
          include: {
            kabupaten: {
              include: {
                provinsi: true,
              },
            },
          },
        },
        kabupaten: {
          include: {
            provinsi: true,
          },
        },
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

export const verifyWorkshop = async (data: TVerify) => {
  try {
    if (!['MENUNGGU', 'DIVERIFIKASI', 'DITOLAK'].includes(data.status)) {
      throw {
        status: 400,
        message: 'Status verifikasi tidak valid!',
      };
    }

    let verify: StatusVerifikasiWorkshop;

    data?.status === StatusVerifikasiWorkshop.DIVERIFIKASI
      ? (verify = StatusVerifikasiWorkshop.DIVERIFIKASI)
      : (verify = StatusVerifikasiWorkshop.DITOLAK);

    const result = await prisma.workshop.update({
      where: {
        id_workshop: data.id,
      },
      data: {
        status_verifikasi: verify,
      },
    });

    if (!result) {
      throw {
        status: 400,
        message: 'Workshop tidak ditemukan',
      };
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

export const deleteWorkshop = async (data: TEditWorkshop) => {
  const { id, user } = data;
  try {
    const workshop = await prisma.workshop.findUnique({
      where: {
        id_workshop: id,
      },
    });

    if (!workshop) {
      throw { status: 404, message: 'Workshop tidak ditemukan' };
    }

    console.log(`Id fac artikel ${workshop.id_facilitator}`);
    console.log(user.id);

    const isOwner = workshop.id_facilitator === user.id;
    const isAdmin = user.role === 'admin';

    if (!isOwner && !isAdmin) {
      throw { status: 403, message: 'Tidak diizinkan menghapus workshop ini' };
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

export const registerWorkshop = async (data: TRegisterWorkshop) => {
  const {
    id,
    user,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    paymentMethod,
  } = data;
  try {
    await registerScehma.validate(data);

    const available = await prisma.workshop.findFirst({
      where: {
        id_workshop: id,
        status_aktif: true,
      },
    });

    if (!available) {
      throw { status: 300, message: 'Workshop tidak ditemukan!' };
    }

    const registrationDate = new Date();
    registrationDate.setHours(0, 0, 0, 0);

    const cleanId = id.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    const nomorTiket = `TKT-${cleanId}-${date}-${random}`;

    const result = await prisma.workshopTerdaftar.create({
      data: {
        nama_depan_peserta: firstName,
        nama_belakang_peserta: lastName,
        email_peserta: email,
        nomor_telepon_peserta: phoneNumber,
        jenis_kelamin_peserta: gender,
        tanggal_pendaftaran: registrationDate,
        nomor_tiket: nomorTiket,
        id_pengguna: user.id,
        id_workshop: id,
        id_metode_pembayaran: paymentMethod,
      },
    });

    if (!result) {
      throw { status: 400, message: 'Ada kesalahan!' };
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

export const getRegisteredWorkshop = async (user: TToken) => {
  try {
    const registered = await prisma.workshopTerdaftar.findMany({
      where: {
        id_pengguna: user.id,
      },
    });

    return registered;
  } catch (error: any) {}
};

export const payRegistration = async (data: TPayWorkshop) => {
  const { ticketNumber, user } = data;
  try {
    const available = await prisma.workshopTerdaftar.findUnique({
      where: {
        nomor_tiket: ticketNumber,
        id_pengguna: user.id,
      },
    });

    if (!available) {
      throw { status: 400, message: 'Pendaftaran tidak ditemukan!' };
    }

    const result = await prisma.workshopTerdaftar.update({
      where: {
        nomor_tiket: ticketNumber,
        id_pengguna: user.id,
      },
      data: {
        status_pembayaran: true,
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

export const getWorkshopParticipant = async (user: TToken) => {
  try {
    const result = await prisma.workshopTerdaftar.findMany({
      where: {
        workshop: {
          id_facilitator: user.id,
        },
      },
      include: {
        workshop: true,
        pengguna: true,
        metode_pembayaran: true,
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

export const getWorkshopByFacilitator = async (user: TToken) => {
  try {
    const workshop = await prisma.workshop.findMany({
      where: {
        id_facilitator: user.id,
        status_aktif: true,
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

export const getActiveRegistrants = async (id: string) => {
  try {
    const activeRegistrants = await prisma.workshopTerdaftar.count({
      where: {
        workshop: {
          ...(id ? { id_facilitator: id } : {}),
          tanggal_workshop: {
            gte: new Date(),
          },
          status_aktif: true,
        },
      },
    });

    return activeRegistrants;
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

export const getPopularWorkshops = async (id: string, limit = 10) => {
  try {
    const popularWorkshops = await prisma.workshop.findMany({
      take: limit,
      include: {
        _count: {
          select: {
            pendaftaran: {
              where: {
                status_pembayaran: true,
              },
            },
          },
        },
        facilitator: {
          select: {
            nama_facilitator: true,
          },
        },
      },
      where: {
        ...(id ? { id_facilitator: id } : {}),
        status_aktif: true,
      },
      orderBy: {
        pendaftaran: {
          _count: 'desc',
        },
      },
    });

    return {
      workshops: popularWorkshops.map((workshop, index) => ({
        rank: index + 1,
        id: workshop.id_workshop,
        title: workshop.judul_workshop,
        date: workshop.tanggal_workshop,
        formattedDate: workshop.tanggal_workshop.toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        participantCount: workshop._count.pendaftaran,
        facilitator: workshop.facilitator.nama_facilitator,
        facilitatorId: workshop.id_facilitator,
        capacity: workshop.kapasitas,
        price: workshop.harga_workshop,
        image: workshop.gambar_workshop,
      })),
    };
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

export const getAllSales = async (id: string) => {
  try {
    const allSales = await prisma.workshopTerdaftar.findMany({
      where: {
        workshop: {
          id_facilitator: id,
        },
        status_pembayaran: true,
      },
      include: {
        workshop: true,
      },
    });

    return allSales;
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

export const getAllParticipants = async (id: string) => {
  try {
    const allSales = await prisma.workshopTerdaftar.findMany({
      where: {
        workshop: {
          id_facilitator: id,
        },
      },
      include: {
        workshop: true,
      },
    });

    return allSales;
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
