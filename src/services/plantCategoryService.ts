import prisma from '../prisma/prismaClient';

export const getAllCategory = async () => {
  try {
    const categories = await prisma.kategoriTanaman.findMany();

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

export const getCategoryById = async (id: number) => {
  try {
    const categories = await prisma.kategoriTanaman.findFirst({
      where: {
        id_kategori_tanaman: id,
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
