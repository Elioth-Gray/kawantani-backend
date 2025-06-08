import prisma from '../prisma/prismaClient';
import { TToken } from '../types/authTypes';
import {
  TCreateUserPlant,
  TFinishPlant,
  TGetDailyTasks,
  TGetPlantDetail,
  TUpdateProgress,
} from '../types/userPlantsType';
import { startOfDay, endOfDay } from 'date-fns';
import { toZonedTime, fromZonedTime } from 'date-fns-tz';
import * as Yup from 'yup';

const createSchema = Yup.object({
  customName: Yup.string().required('Nama custom harus diisi!'),
});

const updateTaskSchema = Yup.object({
  doneStatus: Yup.boolean().required('Status selesai harus diisi!'),
});

export const createUserPlant = async (data: TCreateUserPlant) => {
  const { plantId, user, customName } = data;
  try {
    await createSchema.validate({ customName });

    const tanaman = await prisma.tanaman.findUnique({
      where: {
        id_tanaman: plantId,
      },
      include: {
        hari_penanaman: {
          include: {
            tugas_penanaman: true,
          },
        },
      },
    });

    if (!tanaman) {
      throw { status: 400, message: 'Tanaman tidak ditemukan!' };
    }

    const tanggalPenanaman = new Date();
    const tanggalTargetPanen = new Date();
    tanggalTargetPanen.setDate(
      tanggalTargetPanen.getDate() + tanaman.durasi_penanaman,
    );

    const tanamanPengguna = await prisma.tanamanPengguna.create({
      data: {
        nama_custom: customName,
        tanggal_penanaman: tanggalPenanaman,
        tanggal_target_panen: tanggalTargetPanen,
        id_tanaman: plantId,
        id_pengguna: user.id,
      },
    });

    for (const hariPenanaman of tanaman.hari_penanaman) {
      const tanggalAktual = new Date(tanggalPenanaman);
      tanggalAktual.setDate(
        tanggalAktual.getDate() + hariPenanaman.hari_ke - 1,
      );

      const hariTanamanPengguna = await prisma.hariTanamanPengguna.create({
        data: {
          hari_ke: hariPenanaman.hari_ke,
          tanggal_aktual: tanggalAktual,
          fase_penanaman: hariPenanaman.nama_fase,
          total_tugas: hariPenanaman.tugas_penanaman.length,
          id_tanaman_pengguna: tanamanPengguna.id_tanaman_pengguna,
        },
      });

      const tugasData = hariPenanaman.tugas_penanaman.map((tugas) => ({
        nama_tugas: tugas.nama_tugas,
        jenis_tugas: tugas.jenis_tugas,
        estimasi_waktu: tugas.estimasi_waktu,
        id_hari_tanaman_pengguna: hariTanamanPengguna.id_hari_tanaman_pengguna,
      }));

      if (tugasData.length > 0) {
        await prisma.tugasPenanamanPengguna.createMany({
          data: tugasData,
        });
      }
    }

    return {
      success: true,
      data: tanamanPengguna,
      message: 'Tanaman berhasil ditambahkan ke akun Anda',
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

export const getUserPlant = async (user: TToken) => {
  try {
    const tanamanPengguna = await prisma.tanamanPengguna.findMany({
      where: {
        id_pengguna: user.id,
      },
      include: {
        tanaman: {
          include: {
            kategori: true,
          },
        },
      },
      orderBy: {
        tanggal_penanaman: 'desc',
      },
    });

    return tanamanPengguna;
  } catch (error: any) {
    throw error;
  }
};

export const getUserPlantDetail = async (data: TGetPlantDetail) => {
  const { user, userPlantId } = data;
  try {
    const tanamanPengguna = await prisma.tanamanPengguna.findFirst({
      where: {
        id_pengguna: user.id,
        id_tanaman_pengguna: userPlantId,
      },
      include: {
        tanaman: {
          include: {
            kategori: true,
            instruksi_tanaman: {
              orderBy: { urutan: 'asc' },
            },
          },
        },
        hari_tanaman: {
          include: {
            tugas_penanaman: true,
          },
        },
      },
    });

    if (!tanamanPengguna) {
      throw { status: 404, message: 'Tanaman tidak ditemukan!' };
    }

    return tanamanPengguna;
  } catch (error: any) {
    throw error;
  }
};

export const getUserDailyTasks = async (data: TGetDailyTasks) => {
  const { userPlantId, date, user } = data;
  try {
    const tugasHarian = await prisma.hariTanamanPengguna.findMany({
      where: {
        id_tanaman_pengguna: userPlantId,
        tanggal_aktual: date
          ? {
              gte: new Date(date + 'T00:00:00.000Z'),
              lt: new Date(date + 'T23:59:59.999Z'),
            }
          : {
              gte: new Date(new Date().toDateString()), // Start of today
              lt: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // End of today
            },
        tanaman_pengguna: {
          id_pengguna: user.id,
        },
      },
      include: {
        tugas_penanaman: true,
        tanaman_pengguna: {
          include: {
            tanaman: true,
          },
        },
      },
    });

    return tugasHarian;
  } catch (error: any) {
    throw error;
  }
};

export const updateTaskProgress = async (data: TUpdateProgress) => {
  const { userPlantId, taskId, doneStatus, user } = data;
  try {
    await updateTaskSchema.validate({ doneStatus });

    const tugasUpdate = await prisma.tugasPenanamanPengguna.update({
      where: {
        id_tugas_penanaman_pengguna: taskId,
        hari_tanaman: {
          tanaman_pengguna: {
            id_pengguna: user.id,
          },
        },
      },
      data: {
        status_selesai: doneStatus,
        tanggal_selesai: doneStatus ? new Date() : null,
      },
      include: {
        hari_tanaman: true,
      },
    });

    if (!tugasUpdate) {
      throw {
        status: 400,
        message: 'Tugas tidak ditemukan!',
      };
    }

    const hariTanaman = await prisma.hariTanamanPengguna.findUnique({
      where: {
        id_hari_tanaman_pengguna: tugasUpdate.id_hari_tanaman_pengguna,
      },
      include: {
        tugas_penanaman: true,
      },
    });

    if (hariTanaman) {
      const tugasSelesai = hariTanaman.tugas_penanaman.filter(
        (tugas) => tugas.status_selesai,
      ).length;
      const totalTugas = hariTanaman.tugas_penanaman.length;
      const progressHari =
        totalTugas > 0 ? (tugasSelesai / totalTugas) * 100 : 0;

      await prisma.hariTanamanPengguna.update({
        where: {
          id_hari_tanaman_pengguna: hariTanaman.id_hari_tanaman_pengguna,
        },
        data: {
          tugas_selesai: tugasSelesai,
          progress_hari_persen: progressHari,
          status_hari:
            progressHari === 100
              ? 'SELESAI'
              : progressHari > 0
              ? 'SEDANG_BERJALAN'
              : 'BELUM_DIMULAI',
        },
      });
    }

    await updatePlantProgress(userPlantId);

    return tugasUpdate;
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

const updatePlantProgress = async (id: string) => {
  try {
    const hariTanaman = await prisma.hariTanamanPengguna.findMany({
      where: { id_tanaman_pengguna: id },
    });

    if (hariTanaman.length > 0) {
      const totalProgress = hariTanaman.reduce(
        (sum, hari) => sum + hari.progress_hari_persen,
        0,
      );
      const averageProgress = totalProgress / hariTanaman.length;

      await prisma.tanamanPengguna.update({
        where: { id_tanaman_pengguna: id },
        data: { progress_persen: averageProgress },
      });
    }
  } catch (error: any) {
    throw error;
  }
};

export const getTodayTasks = async (user: TToken) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);

    const tugasHariIni = await prisma.hariTanamanPengguna.findMany({
      where: {
        tanaman_pengguna: {
          id_pengguna: user.id,
        },
        tanggal_aktual: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        tugas_penanaman: true,
        tanaman_pengguna: {
          include: {
            tanaman: true,
          },
        },
      },
    });

    return tugasHariIni;
  } catch (error: any) {
    throw error;
  }
};

export const finishPlant = async (data: TFinishPlant) => {
  const { id, user } = data;
  try {
    const tanamanPengguna = await prisma.tanamanPengguna.update({
      where: { id_tanaman_pengguna: id, id_pengguna: user.id },
      data: {
        status_penanaman: 'SELESAI',
        progress_persen: 100,
      },
    });

    return {
      success: true,
      data: tanamanPengguna,
      message: 'Selamat! Tanaman Anda telah berhasil dipanen',
    };
  } catch (error) {
    console.error('Error selesaikan tanaman:', error);
    throw new Error('Gagal menyelesaikan tanaman');
  }
};
