import { Request, Response } from 'express';
import {
  loginAdmin,
  loginFacilitator,
  loginUser,
  registerUser,
  sendActivationCode,
  verifyUser,
} from '../services/authService';
import { TLogin, TRegister, TToken } from '../types/authTypes';
import { IReqUser } from '../middlewares/authMiddleware';
import { IRequestWithFile } from '../types/multerTypes';
import path from 'path';
import fs from 'fs';

export const register = async (req: IRequestWithFile, res: Response) => {
  const fileName = req.file?.filename;
  const data: TRegister = {
    ...req.body,
    avatar: fileName,
  };

  try {
    const result = await registerUser(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil daftar akun!',
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (error: any) {
    if (fileName) {
      const filePath = path.join(__dirname, '..', 'uploads', 'users', fileName);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Gagal menghapus file avatar:', err.message);
      });
    }

    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const verifyAccount = async (req: IReqUser, res: Response) => {
  const user = req.user as TToken;
  const { verificationCode } = req.body;

  try {
    const result = await verifyUser({ user, verificationCode });
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const sendActivation = async (req: IReqUser, res: Response) => {
  const data = req.user as TToken;
  try {
    const result = await sendActivationCode(data);
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const loginUserCredential = async (req: Request, res: Response) => {
  const data: TLogin = req.body;

  try {
    const result = await loginUser(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil login!',
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const loginAdminCredential = async (req: Request, res: Response) => {
  const data: TLogin = req.body;
  try {
    const result = await loginAdmin(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil login!',
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const loginFacilitatorCredential = async (
  req: Request,
  res: Response,
) => {
  const data: TLogin = req.body;
  try {
    const result = await loginFacilitator(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil login!',
      data: {
        token: result.token,
        user: result.facilitator,
      },
    });
  } catch (error: any) {
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};
