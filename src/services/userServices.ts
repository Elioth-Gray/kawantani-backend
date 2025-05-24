import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TUpdateProfile, TUpdateUser } from '../types/userTypes';
import bcrypt from 'bcryptjs';
import path from 'path';
import fs from 'fs';

const userSchema = Yup.object({
  id: Yup.string().required('Id user harus diisi!'),
});

const updateProfileSchema = Yup.object({
  firstName: Yup.string().required('Nama depan harus diisi!'),
  lastName: Yup.string().required('Nama belakang harus diisi!'),
  email: Yup.string().email().required('Email harus diisi!'),
  phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
  dateOfBirth: Yup.string().required('Tanggal lahir harus diisi!'),
  password: Yup.string()
    .required('Password harus diisi!')
    .min(6, 'Password minimal 6 karakter!'),
  gender: Yup.string().required('Jenis kelamin harus diisi!'),
  confirmPassword: Yup.string()
    .required('Konfirmasi password harus diisi!')
    .oneOf([Yup.ref('password')], 'Password harus sama!'),
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

export const getById = async (id: string) => {
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
        jenisKelamin: true,
        avatar: true,
        status_verfikasi: true,
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

export const updateUser = async (data: TUpdateUser) => {
  const {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    password,
    confirmPassword,
    gender,
  } = data;

  try {
    await updateProfileSchema.validate(data);

    const existing = await prisma.pengguna.findUnique({
      where: {
        id_pengguna: id,
      },
    });

    if (!existing) {
      throw { status: 404, message: 'Terjadi kesalahan!' };
    }

    const existingEmail = await prisma.pengguna.findUnique({
      where: {
        email_pengguna: email,
      },
    });

    if (existingEmail && existingEmail.id_pengguna !== id) {
      throw {
        status: 400,
        message: 'Email tidak telah digunakan oleh pengguna lain!',
      };
    }

    const existingPhoneNumber = await prisma.pengguna.findUnique({
      where: {
        nomor_telepon_pengguna: phoneNumber,
      },
    });

    if (existingPhoneNumber && existingPhoneNumber.id_pengguna !== id) {
      throw {
        status: 400,
        message: 'Nomor telepon sudah digunakan oleh pengguna lain!',
      };
    }

    if (!password) {
      throw {
        status: 400,
        message: 'Password harus diisi!',
      };
    }

    let finalPassword = existing.password_pengguna;

    const isSamePassword = await bcrypt.compare(
      password,
      existing.password_pengguna,
    );

    if (!isSamePassword) {
      finalPassword = await bcrypt.hash(password, 10);
    }

    const dateOfBirthNew = new Date(dateOfBirth);

    const result = await prisma.pengguna.update({
      where: { id_pengguna: id },
      data: {
        nama_depan_pengguna: firstName,
        nama_belakang_pengguna: lastName,
        email_pengguna: email,
        nomor_telepon_pengguna: phoneNumber,
        password_pengguna: finalPassword,
        tanggal_lahir_pengguna: dateOfBirthNew,
        jenisKelamin: gender,
      },
    });

    return {
      pengguna: {
        id: result.id_pengguna,
        fistName: result.nama_depan_pengguna,
        lastName: result.nama_belakang_pengguna,
        email: result.email_pengguna,
        phoneNumber: result.nomor_telepon_pengguna,
        gender: result.jenisKelamin,
      },
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

export const updateUserProfile = async (data: TUpdateProfile) => {
  const {
    user,
    firstName,
    lastName,
    email,
    phoneNumber,
    dateOfBirth,
    password,
    confirmPassword,
    gender,
    avatar,
  } = data;

  try {
    await updateProfileSchema.validate(data);

    const existing = await prisma.pengguna.findUnique({
      where: {
        id_pengguna: user.id,
      },
    });

    if (!existing) {
      throw { status: 404, message: 'Terjadi kesalahan!' };
    }

    if (email !== existing.email_pengguna) {
      throw { status: 400, message: 'Email tidak boleh diubah!' };
    }

    const existingPhoneNumber = await prisma.pengguna.findUnique({
      where: {
        nomor_telepon_pengguna: phoneNumber,
      },
    });

    if (existingPhoneNumber && existingPhoneNumber.id_pengguna !== user.id) {
      throw {
        status: 400,
        message: 'Nomor telepon sudah digunakan oleh pengguna lain!',
      };
    }

    if (!password) {
      throw {
        status: 400,
        message: 'Password harus diisi!',
      };
    }

    let finalPassword = existing.password_pengguna;

    const isSamePassword = await bcrypt.compare(
      password,
      existing.password_pengguna,
    );

    if (!isSamePassword) {
      finalPassword = await bcrypt.hash(password, 10);
    }

    const dateOfBirthNew = new Date(dateOfBirth);

    if (avatar) {
      if (existing.avatar) {
        const oldAvatarPath = path.join(
          process.cwd(),
          'uploads',
          'users',
          existing.avatar,
        );
        fs.unlink(oldAvatarPath, (err) => {
          if (err) {
            console.error('Gagal menghapus file avatar lama:', err.message);
          }
        });
      }

      await prisma.pengguna.update({
        where: { id_pengguna: user.id },
        data: {
          avatar: avatar,
        },
      });
    }

    const result = await prisma.pengguna.update({
      where: { id_pengguna: user.id },
      data: {
        nama_depan_pengguna: firstName,
        nama_belakang_pengguna: lastName,
        email_pengguna: email,
        nomor_telepon_pengguna: phoneNumber,
        password_pengguna: finalPassword,
        tanggal_lahir_pengguna: dateOfBirthNew,
        jenisKelamin: parseInt(gender, 10),
      },
    });

    return {
      pengguna: {
        id: result.id_pengguna,
        fistName: result.nama_depan_pengguna,
        lastName: result.nama_belakang_pengguna,
        email: result.email_pengguna,
        phoneNumber: result.nomor_telepon_pengguna,
        gender: result.jenisKelamin,
      },
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
