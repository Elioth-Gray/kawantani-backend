import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';

export const getAllProvince = async () => {
  try {
    const provinces = await prisma.provinsi.findMany();

    return provinces;
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

export const getProvinceById = async (id: number) => {
  try {
    const provinces = await prisma.provinsi.findFirst({
      where: {
        id_provinsi: id,
      },
    });

    if (!provinces) {
      throw { status: 400, message: 'Provinsi tidak ditemukan!' };
    }

    return provinces;
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

export const getAllRegency = async () => {
  try {
    const regency = await prisma.kabupaten.findMany();

    return regency;
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

export const getRegencyById = async (id: number) => {
  try {
    const regency = await prisma.kabupaten.findFirst({
      where: {
        id_kabupaten: id,
      },
    });

    if (!regency) {
      throw { status: 400, message: 'Kabupaten/Kota tidak ditemukan!' };
    }

    return regency;
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

export const getRegencyByProvinceId = async (id: number) => {
  try {
    const regency = await prisma.kabupaten.findMany({
      where: {
        id_provinsi: id,
      },
    });

    if (!regency) {
      throw { status: 400, message: 'Kabupaten/Kota tidak ditemukan!' };
    }

    return regency;
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
