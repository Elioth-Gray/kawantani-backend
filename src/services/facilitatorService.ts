import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import {
  TRegisterFacilitator,
  TUpdateFacilitator,
} from '../types/facilitatorTypes';
import bcrypt from 'bcryptjs';

const registerSchema = Yup.object({
  name: Yup.string().required('Nama depan harus diisi!'),
  email: Yup.string().email().required('Email harus diisi!'),
  phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
  password: Yup.string()
    .required('Password harus diisi!')
    .min(6, 'Password minimal 6 karakter!'),
  confirmPassword: Yup.string()
    .required('Konfirmasi password harus diisi!')
    .oneOf([Yup.ref('password')], 'Password harus sama!'),
  fullAddress: Yup.string().required('Alamat lengkap harus diisi!'),
  regencyId: Yup.number().required('Provinsi harus diisi!'),
});

const updateSchema = Yup.object({
  name: Yup.string().required('Nama depan harus diisi!'),
  email: Yup.string().email().required('Email harus diisi!'),
  phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
  password: Yup.string()
    .required('Password harus diisi!')
    .min(6, 'Password minimal 6 karakter!'),
  confirmPassword: Yup.string()
    .required('Konfirmasi password harus diisi!')
    .oneOf([Yup.ref('password')], 'Password harus sama!'),
  fullAddress: Yup.string().required('Alamat lengkap harus diisi!'),
  regencyId: Yup.number().required('Provinsi harus diisi!'),
});

export const getAllFacilitator = async () => {
  try {
    const facilitators = await prisma.facilitator.findMany();

    return facilitators;
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

export const registerFacilitator = async (data: TRegisterFacilitator) => {
  const {
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
    fullAddress,
    regencyId,
  } = data;

  try {
    await registerSchema.validate(data, { abortEarly: false });

    const tanggalPembuatanAkun = new Date();
    tanggalPembuatanAkun.setHours(0, 0, 0, 0);

    const existingEmail = await prisma.facilitator.findUnique({
      where: { email_facilitator: email },
    });
    if (existingEmail) {
      throw { status: 400, message: 'Email telah digunakan facilitator lain!' };
    }

    const existingPhone = await prisma.facilitator.findFirst({
      where: { nomor_telepon_facilitator: phoneNumber },
    });
    if (existingPhone) {
      throw {
        status: 400,
        message: 'Nomor telepon telah digunakan facilitator lain!',
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.facilitator.create({
      data: {
        nama_facilitator: name,
        email_facilitator: email,
        nomor_telepon_facilitator: phoneNumber,
        password_facilitator: hashedPassword,
        tanggal_pembuatan_akun: tanggalPembuatanAkun,
        alamat_lengkap_facilitator: fullAddress,
        id_kabupaten: regencyId,
      },
    });

    return {
      facilitator: {
        id: result.id_facilitator,
        name: result.nama_facilitator,
        email: result.email_facilitator,
        phoneNumber: result.nomor_telepon_facilitator,
        fullAddress: result.alamat_lengkap_facilitator,
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

export const updateFacilitator = async (data: TUpdateFacilitator) => {
  const {
    id,
    name,
    email,
    phoneNumber,
    fullAddress,
    regencyId,
    password,
    confirmPassword,
  } = data;

  try {
    await updateSchema.validate(
      {
        name,
        email,
        phoneNumber,
        fullAddress,
        regencyId,
        password,
        confirmPassword,
      },
      { abortEarly: false }
    );

    console.log(id);

    const existing = await prisma.facilitator.findUnique({
      where: {
        id_facilitator: id,
      },
    });

    if (!existing) {
      throw { status: 404, message: 'Facilitator tidak ditemukan!' };
    }

    const existingEmail = await prisma.facilitator.findUnique({
      where: { email_facilitator: email },
    });

    if (existingEmail && existingEmail.id_facilitator !== id) {
      throw {
        status: 400,
        message: 'Email sudah digunakan oleh facilitator lain!',
      };
    }

    const existingPhoneNumber = await prisma.facilitator.findUnique({
      where: {
        nomor_telepon_facilitator: phoneNumber,
      },
    });

    if (existingPhoneNumber && existingPhoneNumber.id_facilitator !== id) {
      throw {
        status: 400,
        message: 'Email sudah digunakan oleh facilitator lain!',
      };
    }

    const result = await prisma.facilitator.update({
      where: { id_facilitator: id },
      data: {
        nama_facilitator: name,
        email_facilitator: email,
        nomor_telepon_facilitator: phoneNumber,
        alamat_lengkap_facilitator: fullAddress,
        id_kabupaten: regencyId,
        password_facilitator: password,
      },
    });

    return {
      facilitator: {
        id: result.id_facilitator,
        name: result.nama_facilitator,
        email: result.email_facilitator,
        phoneNumber: result.nomor_telepon_facilitator,
        fullAddress: result.alamat_lengkap_facilitator,
        regencyId: result.id_kabupaten,
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

export const deleteFacilitator = async (data: string) => {
  const id = data;
  try {
    const availableFacilitator = await prisma.facilitator.findUnique({
      where: {
        id_facilitator: id,
      },
    });

    if (!availableFacilitator) {
      throw { status: 400, message: 'Facilitator tidak ditemukan' };
    }

    const result = await prisma.facilitator.delete({
      where: {
        id_facilitator: id,
      },
    });

    return {
      facilitator: {
        id: result.id_facilitator,
        name: result.nama_facilitator,
        email: result.email_facilitator,
        phoneNumber: result.nomor_telepon_facilitator,
        fullAddress: result.alamat_lengkap_facilitator,
        regencyId: result.id_kabupaten,
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
