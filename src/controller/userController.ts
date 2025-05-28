import { Request, Response } from 'express';
import { TUpdateProfile, TUser } from '../types/userTypes';
import {
  deleteUser,
  getAll,
  getById,
  updateUser,
  updateUserProfile,
} from '../services/userServices';
import { IReqUser } from '../middlewares/authMiddleware';
import { IRequestWithFileAuth } from '../types/multerTypes';
import path from 'path';
import fs from 'fs';
import { TToken } from '../types/authTypes';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAll();

    res.status(200).json({
      message: 'Data user berhasil diambil!',
      data: users,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await getById(id);

    res.status(200).json({
      message: 'Pengguna ditemukan',
      data: result,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const update = async (req: IReqUser, res: Response) => {
  const data = {
    id: req.params.id,
    ...req.body,
  };
  console.log(data);
  try {
    const result = await updateUser(data);

    res.status(200).json({
      message: 'Akun pengguna berhasil diperbarui!',
      data: result,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const me = async (req: IReqUser, res: Response) => {
  const user = req.user as TToken;
  try {
    const result = await getById(user.id);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan user!',
      data: {
        user: result,
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

export const updateProfile = async (
  req: IRequestWithFileAuth,
  res: Response,
) => {
  const fileName = req.file?.filename;

  const data = {
    user: req.user,
    avatar: fileName,
    ...req.body,
  };
  try {
    const result = await updateUserProfile(data);

    res.status(200).json({
      message: 'Akun berhasil diperbarui!',
      data: result,
    });
  } catch (error) {
    if (fileName) {
      const filePath = path.join(__dirname, '..', 'uploads', 'users', fileName);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Gagal menghapus file avatar:', err.message);
      });
    }

    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

const deleteUs = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const user = req.body;
  const data = {
    id,
    user,
  };
  try {
    const result = await deleteUser(data);

    res.status(200).json({
      message: 'Pengguna berhasil dihapus',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};
