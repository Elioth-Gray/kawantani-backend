import prisma from '../prisma/prismaClient';
import * as Yup from 'yup';
import { TRegister, TVerification, TLogin, TToken } from '../types/authTypes';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { sendEmail, renderMailHtml } from '../utils/mail/mail';
import { generateUniqueVerificationCode } from '../utils/activationCode/activationCode';

const registerSchema = Yup.object({
  firstName: Yup.string().required('Nama depan harus diisi!'),
  lastName: Yup.string().required('Nama belakang harus diisi!'),
  email: Yup.string().email().required('Email harus diisi!'),
  phoneNumber: Yup.string().required('Nomor telepon harus diisi!'),
  dateOfBirth: Yup.string().required('Tanggal lahir harus diisi!'),
  password: Yup.string()
    .required('Password harus diisi!')
    .min(6, 'Password minimal 6 karakter!'),
  gender: Yup.number().required('Jenis kelamin harus diisi!'),
  confirmPassword: Yup.string()
    .required('Konfirmasi password harus diisi!')
    .oneOf([Yup.ref('password')], 'Password harus sama!'),
});

const verificationSchema = Yup.object({
  user: Yup.object().required('User invalid!'),
  verificationCode: Yup.string().required('Kode verifikasi harus diisi!'),
});

const loginSchema = Yup.object({
  email: Yup.string().required('Email harus diisi!'),
  password: Yup.string().required('Password harus diisi!'),
});

const codeSchema = Yup.object({
  id: Yup.string().required('User invalid!'),
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
    await registerSchema.validate(data, { abortEarly: false });

    const verifikasiKode = Math.floor(1000 + Math.random() * 9000).toString();

    const dateOfBirthNew = new Date(dateOfBirth);
    if (isNaN(dateOfBirthNew.getTime())) {
      throw { status: 400, message: 'Tanggal lahir tidak valid!' };
    }

    const tanggalPembuatanAkun = new Date();
    tanggalPembuatanAkun.setHours(0, 0, 0, 0);

    const existingEmail = await prisma.pengguna.findUnique({
      where: { email_pengguna: email },
    });
    if (existingEmail) {
      throw { status: 400, message: 'Email telah terdaftar!' };
    }

    const existingPhone = await prisma.pengguna.findFirst({
      where: { nomor_telepon_pengguna: phoneNumber },
    });
    if (existingPhone) {
      throw { status: 400, message: 'Nomor telepon telah terdaftar!' };
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
        kode_verifikasi: verifikasiKode,
        status_verfikasi: false,
        jenisKelamin: gender,
      },
    });

    const token = generateToken({
      id: result.id_pengguna,
      email: result.email_pengguna,
      firstName: result.nama_depan_pengguna,
      lastName: result.nama_belakang_pengguna,
      role: 'user',
    });

    if (result) {
      const contentMail = await renderMailHtml('registrationSuccess.ejs', {
        fullname: result.nama_depan_pengguna + result.nama_belakang_pengguna,
        email: result.email_pengguna,
        createdAt: result.tanggal_pembuatan_akun,
        activationCode: result.kode_verifikasi,
      });

      await sendEmail({
        from: 'kawantani@zohomail.com',
        to: result.email_pengguna,
        subject: 'Aktivasi Akun Anda',
        html: contentMail,
      });
    }

    return {
      token,
      user: {
        id: result.id_pengguna,
        firstName: result.nama_depan_pengguna,
        lastName: result.nama_belakang_pengguna,
        gender: result.jenisKelamin,
        email: result.email_pengguna,
        phoneNumber: result.nomor_telepon_pengguna,
        dateOfBirth: result.tanggal_lahir_pengguna,
      },
      verificationCode: verifikasiKode,
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

export const verifyUser = async (data: TVerification) => {
  const { user, verificationCode } = data;

  try {
    await verificationSchema.validate(data, { abortEarly: false });

    const userRecord = await prisma.pengguna.findUnique({
      where: { email_pengguna: user.email },
    });

    if (!userRecord) {
      throw { status: 400, message: 'User tidak ditemukan!' };
    }

    if (userRecord.kode_verifikasi !== verificationCode) {
      throw { status: 400, message: 'Kode aktivasi tidak sesuai!' };
    }

    await prisma.pengguna.update({
      where: { email_pengguna: user.email },
      data: { status_verfikasi: true },
    });

    return { message: 'Akun berhasil diverifikasi!' };
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

export const sendActivationCode = async (data: TToken) => {
  const { id } = data;
  try {
    await codeSchema.validate({ id });
    const user = await prisma.pengguna.findFirst({
      where: { id_pengguna: id },
    });

    if (!user) {
      throw { status: 400, message: 'User not found' };
    }

    const verificationCode = await generateUniqueVerificationCode();

    const updatedUser = await prisma.pengguna.update({
      where: { id_pengguna: id },
      data: { kode_verifikasi: verificationCode },
    });

    const contentMail = await renderMailHtml('registrationSuccess.ejs', {
      fullname:
        updatedUser.nama_depan_pengguna +
        ' ' +
        updatedUser.nama_belakang_pengguna,
      email: updatedUser.email_pengguna,
      createdAt: updatedUser.tanggal_pembuatan_akun,
      activationCode: verificationCode,
    });

    await sendEmail({
      from: 'kawantani@zohomail.com',
      to: updatedUser.email_pengguna,
      subject: 'Aktivasi Akun Anda',
      html: contentMail,
    });

    return { message: 'Kode aktivasi baru telah dikirim ke email pengguna' };
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

export const loginUser = async (data: TLogin) => {
  const { email, password } = data;

  try {
    await loginSchema.validate(data, { abortEarly: false });

    const user = await prisma.pengguna.findUnique({
      where: { email_pengguna: email },
    });

    const isMatch =
      user && (await bcrypt.compare(password, user.password_pengguna));
    if (!user || !isMatch) {
      throw { status: 401, message: 'Credential invalid!' };
    }

    const token = generateToken({
      id: user.id_pengguna,
      email: user.email_pengguna,
      firstName: user.nama_depan_pengguna,
      lastName: user.nama_belakang_pengguna,
      role: 'user',
    });

    if (user.status_verfikasi !== true) {
      const verificationCode = await generateUniqueVerificationCode();

      const updatedUser = await prisma.pengguna.update({
        where: { email_pengguna: email },
        data: { kode_verifikasi: verificationCode },
      });

      const contentMail = await renderMailHtml('registrationSuccess.ejs', {
        fullname:
          updatedUser.nama_depan_pengguna +
          ' ' +
          updatedUser.nama_belakang_pengguna,
        email: updatedUser.email_pengguna,
        createdAt: updatedUser.tanggal_pembuatan_akun,
        activationCode: verificationCode,
      });

      await sendEmail({
        from: 'kawantani@zohomail.com',
        to: updatedUser.email_pengguna,
        subject: 'Aktivasi Akun Anda',
        html: contentMail,
      });
    }

    return {
      token,
      user: {
        id: user.id_pengguna,
        firstName: user.nama_depan_pengguna,
        lastName: user.nama_belakang_pengguna,
        gender: user.jenisKelamin,
        email: user.email_pengguna,
        phoneNumber: user.nomor_telepon_pengguna,
        dateOfBirth: user.tanggal_lahir_pengguna,
        verificationSchema: user.status_verfikasi,
        verificationCode: user.kode_verifikasi,
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

export const getUserData = async (data: TToken) => {
  try {
    const user = await prisma.pengguna.findUnique({
      where: { email_pengguna: data.email },
    });

    if (!user) {
      throw { status: 404, message: 'User tidak ditemukan!' };
    }

    return {
      id: user.id_pengguna,
      firstName: user.nama_depan_pengguna,
      lastName: user.nama_belakang_pengguna,
      gender: user.jenisKelamin,
      email: user.email_pengguna,
      phoneNumber: user.nomor_telepon_pengguna,
      dateOfBirth: user.tanggal_lahir_pengguna,
      password: user.password_pengguna,
      verificationSchema: user.status_verfikasi,
      verificationCode: user.kode_verifikasi,
    };
  } catch (error: any) {
    throw error;
  }
};

// export const loginAdmin = async (data: TLogin) => {
//   const { email, password } = data;

//   try {
//     await loginSchema.validate(data, { abortEarly: false });

//     const user = await prisma.admin.findUnique({
//       where: { email_admin: email },
//     });

//     const isMatch =
//       user && (await bcrypt.compare(password, user.password_pengguna));
//     if (!user || !isMatch) {
//       throw { status: 401, message: 'Credential invalid!' };
//     }

//     const token = generateToken({
//       id: user.id_pengguna,
//       email: user.email_pengguna,
//       firstName: user.nama_depan_pengguna,
//       lastName: user.nama_belakang_pengguna,
//       role: 'user',
//     });

//     if (user.status_verfikasi !== true) {
//       const verificationCode = await generateUniqueVerificationCode();

//       const updatedUser = await prisma.pengguna.update({
//         where: { email_pengguna: email },
//         data: { kode_verifikasi: verificationCode },
//       });

//       const contentMail = await renderMailHtml('registrationSuccess.ejs', {
//         fullname:
//           updatedUser.nama_depan_pengguna +
//           ' ' +
//           updatedUser.nama_belakang_pengguna,
//         email: updatedUser.email_pengguna,
//         createdAt: updatedUser.tanggal_pembuatan_akun,
//         activationCode: verificationCode,
//       });

//       await sendEmail({
//         from: 'kawantani@zohomail.com',
//         to: updatedUser.email_pengguna,
//         subject: 'Aktivasi Akun Anda',
//         html: contentMail,
//       });
//     }

//     return {
//       token,
//       user: {
//         id: user.id_pengguna,
//         firstName: user.nama_depan_pengguna,
//         lastName: user.nama_belakang_pengguna,
//         gender: user.jenisKelamin,
//         email: user.email_pengguna,
//         phoneNumber: user.nomor_telepon_pengguna,
//         dateOfBirth: user.tanggal_lahir_pengguna,
//         verificationSchema: user.status_verfikasi,
//         verificationCode: user.kode_verifikasi,
//       },
//     };
//   } catch (error: any) {
//     if (error.name === 'ValidationError') {
//       throw {
//         status: 400,
//         message: error.errors.join(', '),
//       };
//     }
//     throw error;
//   }
// };
