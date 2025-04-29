import prisma from "../prisma/prismaClient";
import * as Yup from "yup";
import { TRegister, TVerification, TLogin } from "../types/authTypes";

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

    return users;
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};
