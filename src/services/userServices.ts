import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TUser } from '../types/userTypes';

const userSchema = Yup.object({
  id: Yup.string().required('Id user harus diisi!'),
});

export const getAll = async () => {
  try {
    const users = await prisma.pengguna.findMany({
      select: {
        id_pengguna: true,
        nama_depan_pengguna: true,
        nama_belakang_pengguna: true,
        email_pengguna: true,
        nomor_telepon_pengguna: true,
      },
    });

    if (!users) {
      throw new Error('Tidak ada user dalam database!');
    }

    return users;
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};

export const getPrvinceById = async (id: string) => {
  try {
    const user = await prisma.pengguna.findFirst({
      where: {
        id_pengguna: id,
      },
      select: {
        id_pengguna: true,
        nama_depan_pengguna: true,
        nama_belakang_pengguna: true,
        email_pengguna: true,
        nomor_telepon_pengguna: true,
      },
    });

    if (!user) {
      throw new Error('Pengguna tidak ditemukan!');
    }

    return user;
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};
