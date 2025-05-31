import prisma from '../prisma/prismaClient';

export const getAllMethod = async () => {
  try {
    const categories = await prisma.metodePembayaran.findMany();

    return categories;
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

export const getMethodById = async (id: number) => {
  try {
    const categories = await prisma.metodePembayaran.findFirst({
      where: {
        id_metode_pembayaran: id,
      },
    });

    if (!categories) {
      throw { status: 400, message: 'Kategori tidak ditemukan!' };
    }

    return categories;
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
