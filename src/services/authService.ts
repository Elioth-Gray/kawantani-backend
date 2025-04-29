import prisma from "../prisma/prismaClient";
import * as Yup from "yup";
import { TRegister, TVerification, TLogin } from "../types/authTypes";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

const registerSchema = Yup.object({
  namaDepan: Yup.string().required("Nama depan harus diisi!"),
  namaBelakang: Yup.string().required("Nama belakang harus diisi!"),
  emailPengguna: Yup.string().email().required("Email harus diisi!"),
  nomorTeleponPengguna: Yup.string().required("Nomor telepon harus diisi!!"),
  tanggalLahirPengguna: Yup.string().required("Tanggal lahir harus diisi!"),
  passwordPengguna: Yup.string().required("Password harus diisi!"),
  confirmPasswordPengguna: Yup.string()
    .required("Konfirmasi password harus diisi")
    .oneOf([Yup.ref("passwordPengguna"), ""], "Password harus sama!"),
});

const verificationSchema = Yup.object({
  emailPengguna: Yup.string().required("Email harus diisi!"),
  kodeVerifikasi: Yup.string().required("Kode verifikasi harus diisi!"),
});

const loginSchema = Yup.object({
  emailPengguna: Yup.string().required("Email harus diisi!"),
  passwordPengguna: Yup.string().required("Password harus diisi!"),
});

export const registerUser = async (data: TRegister) => {
  const {
    namaDepan,
    namaBelakang,
    emailPengguna,
    nomorTeleponPengguna,
    tanggalLahirPengguna,
    passwordPengguna,
    confirmPasswordPengguna,
  } = data;

  try {
    await registerSchema.validate({
      namaDepan,
      namaBelakang,
      emailPengguna,
      nomorTeleponPengguna,
      tanggalLahirPengguna,
      passwordPengguna,
      confirmPasswordPengguna,
    });

    const verifikasiKode = Math.floor(1000 + Math.random() * 9000);

    const tanggalLahir = new Date(tanggalLahirPengguna);

    if (isNaN(tanggalLahir.getTime())) {
      throw new Error("Tanggal lahir tidak valid.");
    }

    const tanggalPembuatanAkun = new Date();
    tanggalPembuatanAkun.setHours(0, 0, 0, 0);

    const emailAvailable = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: emailPengguna,
      },
    });

    if (emailAvailable) {
      throw new Error("Email telah terdaftar!");
    }

    const phoneAvailable = await prisma.pengguna.findFirst({
      where: {
        nomor_telepon_pengguna: nomorTeleponPengguna,
      },
    });

    if (phoneAvailable) {
      throw new Error("Nomor telepon telah terdaftar!");
    }

    const hashedPassword = await bcrypt.hash(passwordPengguna, 10);

    const result = await prisma.pengguna.create({
      data: {
        nama_depan_pengguna: namaDepan,
        nama_belakang_pengguna: namaBelakang,
        email_pengguna: emailPengguna,
        nomor_telepon_pengguna: nomorTeleponPengguna,
        tanggal_lahir_pengguna: tanggalLahir,
        password_pengguna: hashedPassword,
        tanggal_pembuatan_akun: tanggalPembuatanAkun,
        kode_verifikasi: verifikasiKode.toString(),
        status_verfikasi: false,
      },
    });

    return { message: "Registrasi Success", data: result };
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};

export const verifyUser = async (data: TVerification) => {
  const { emailPengguna, kodeVerifikasi } = data;
  try {
    await verificationSchema.validate({
      emailPengguna,
      kodeVerifikasi,
    });

    const code = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: emailPengguna,
      },
      select: {
        kode_verifikasi: true,
      },
    });

    if (kodeVerifikasi !== code?.kode_verifikasi) {
      throw new Error("Kode verifikasi tidak sesuai!");
    }

    await prisma.pengguna.update({
      where: {
        email_pengguna: emailPengguna,
      },
      data: {
        status_verfikasi: true,
      },
    });

    return { message: "Akun berhasil diverifikasi!", data: emailPengguna };
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};

export const loginUser = async (data: TLogin) => {
  const { emailPengguna, passwordPengguna } = data;
  try {
    const user = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: emailPengguna,
      },
    });

    if (!user) {
      throw new Error("Pengguna tidak ditemukan!");
    }

    const same = await bcrypt.compare(
      passwordPengguna,
      user?.password_pengguna
    );

    if (!same) {
      throw new Error("Password pengguna salah!");
    }

    const tokenData = {
      idPengguna: user.id_pengguna,
      emailPengguna: user.email_pengguna,
      namaDepanPengguna: user.nama_depan_pengguna,
      namaBelakangPengguna: user.nama_belakang_pengguna,
    };

    const token = generateToken(tokenData);

    if (!token) {
      throw new Error("Token bermasalah!");
    }

    return token;
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};
