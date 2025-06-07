import prisma from '../prisma/prismaClient';

export const getAllPlants = async () => {
  try {
    const result = await prisma.tanaman.findMany();

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

export const getPlantById = async (id: string) => {
  try {
    const result = await prisma.tanaman.findFirst({
      where: {
        id_tanaman: id,
      },
      include: {
        kategori: true,
        instruksi_tanaman: {
          orderBy: {
            urutan: 'asc',
          },
        },
        hari_penanaman: {
          include: {
            tugas_penanaman: {
              orderBy: {
                id_tugas: 'asc',
              },
            },
          },
          orderBy: {
            hari_ke: 'asc',
          },
        },
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
