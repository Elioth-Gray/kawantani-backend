import prisma from '../prisma/prismaClient';

export const getAdminById = async (id: string) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id_admin: id,
      },
      select: {
        nama_depan_admin: true,
        nama_belakang_admin: true,
        email_admin: true,
        avatar: true,
      },
    });

    if (!admin) {
      throw { status: 400, message: 'Admin tidak ditemukan!' };
    }

    return admin;
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
