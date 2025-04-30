import prisma from "../prisma/prismaClient";
import * as Yup from "yup";
import { TRegister, TVerification, TLogin } from "../types/authTypes";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt";

const registerSchema = Yup.object({
  firstName: Yup.string().required("Nama depan harus diisi!"),
  lastName: Yup.string().required("Nama belakang harus diisi!"),
  email: Yup.string().email().required("Email harus diisi!"),
  phoneNumber: Yup.string().required("Nomor telepon harus diisi!!"),
  dateOfBirth: Yup.string().required("Tanggal lahir harus diisi!"),
  password: Yup.string().required("Password harus diisi!"),
  gender: Yup.number().required("Jenis kelamin harus diisi!"),
  confirmPassword: Yup.string()
    .required("Konfirmasi password harus diisi")
    .oneOf([Yup.ref("password"), ""], "Password harus sama!"),
});

const verificationSchema = Yup.object({
  email: Yup.string().required("Email harus diisi!"),
  verificationToken: Yup.string().required("Kode verifikasi harus diisi!"),
});

const loginSchema = Yup.object({
  email: Yup.string().required("Email harus diisi!"),
  password: Yup.string().required("Password harus diisi!"),
});

export const registerUser = async (data: TRegister) => {
  const {
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
    await registerSchema.validate({
      firstName,
      lastName,
      email,
      phoneNumber,
      dateOfBirth,
      password,
      confirmPassword,
      gender,
    });

    const verifikasiKode = Math.floor(1000 + Math.random() * 9000);

    const dateOfBirthNew = new Date(dateOfBirth);

    if (isNaN(dateOfBirthNew.getTime())) {
      throw new Error("Tanggal lahir tidak valid.");
    }

    const tanggalPembuatanAkun = new Date();
    tanggalPembuatanAkun.setHours(0, 0, 0, 0);

    const emailAvailable = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: email,
      },
    });

    if (emailAvailable) {
      throw new Error("Email telah terdaftar!");
    }

    const phoneAvailable = await prisma.pengguna.findFirst({
      where: {
        nomor_telepon_pengguna: phoneNumber,
      },
    });

    if (phoneAvailable) {
      throw new Error("Nomor telepon telah terdaftar!");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.pengguna.create({
      data: {
        nama_depan_pengguna: firstName,
        nama_belakang_pengguna: lastName,
        email_pengguna: email,
        nomor_telepon_pengguna: phoneNumber,
        tanggal_lahir_pengguna: dateOfBirthNew,
        password_pengguna: hashedPassword,
        tanggal_pembuatan_akun: tanggalPembuatanAkun,
        kode_verifikasi: verifikasiKode.toString(),
        status_verfikasi: false,
        jenisKelamin: gender,
      },
    });

    const tokenData = {
      id: result.id_pengguna,
      email: result.email_pengguna,
      firstName: result.nama_depan_pengguna,
      lastName: result.nama_belakang_pengguna,
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

export const verifyUser = async (data: TVerification) => {
  const { email, verificationToken } = data;
  try {
    await verificationSchema.validate({
      email,
      verificationToken,
    });

    const code = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: email,
      },
      select: {
        kode_verifikasi: true,
      },
    });

    if (verificationToken !== code?.kode_verifikasi) {
      throw new Error("Kode verifikasi tidak sesuai!");
    }

    await prisma.pengguna.update({
      where: {
        email_pengguna: email,
      },
      data: {
        status_verfikasi: true,
      },
    });

    return { message: "Akun berhasil diverifikasi!", data: email };
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};

export const loginUser = async (data: TLogin) => {
  const { email, password } = data;
  try {
    await loginSchema.validate({ email, password });

    const user = await prisma.pengguna.findFirst({
      where: {
        email_pengguna: email,
      },
    });

    if (!user) {
      throw new Error("Pengguna tidak ditemukan!");
    }

    const same = await bcrypt.compare(password, user?.password_pengguna);

    if (!same) {
      throw new Error("Password pengguna salah!");
    }

    const tokenData = {
      id: user.id_pengguna,
      email: user.email_pengguna,
      firstName: user.nama_depan_pengguna,
      lastName: user.nama_belakang_pengguna,
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
