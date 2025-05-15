import { Request, Response } from 'express';
import { TUpdateProfile, TUser } from '../types/userTypes';
import { getAll, getById, updateUserProfile } from '../services/userServices';
import { IReqUser } from '../middlewares/authMiddleware';

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

export const updateProfile = async (req: IReqUser, res: Response) => {
  const data = {
    user: req.user,
    ...req.body,
  };
  try {
    const result = await updateUserProfile(data);

    res.status(200).json({
      message: 'Akun berhasil diperbarui!',
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
