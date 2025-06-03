import { Request, Response } from 'express';
import {
  deleteFacilitator,
  getAllFacilitator,
  getAllFacilitatorById,
  registerFacilitator,
  updateFacilitator,
} from '../services/facilitatorService';
import {
  TRegisterFacilitator,
  TUpdateFacilitator,
} from '../types/facilitatorTypes';
import { IRequestWithFile } from '../types/multerTypes';
import path from 'path';
import fs from 'fs';

export const get = async (req: Request, res: Response) => {
  try {
    const result = await getAllFacilitator();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data facilitator',
      data: {
        facilitator: result,
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

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getAllFacilitatorById(id);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data facilitator unik',
      data: {
        facilitator: result,
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

export const register = async (req: IRequestWithFile, res: Response) => {
  const fileName = req.file?.filename;
  const data: TRegisterFacilitator = {
    ...req.body,
    avatar: fileName,
  };

  try {
    const result = await registerFacilitator(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil membuat akun facilitator',
      data: {
        facilitator: result.facilitator,
      },
    });
  } catch (error: any) {
    if (fileName) {
      const filePath = path.join(
        __dirname,
        '..',
        'uploads',
        'facilitators',
        fileName,
      );
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

export const update = async (req: IRequestWithFile, res: Response) => {
  const fileName = req.file?.filename;
  const { id } = req.params;
  const data: TUpdateFacilitator = {
    ...req.body,
    avatar: fileName,
    id: id,
  };
  try {
    const result = await updateFacilitator(data);
    res.status(200).json({
      success: true,
      message: 'Berhasil mengedit akun facilitator',
      data: {
        facilitator: result.facilitator,
      },
    });
  } catch (error: any) {
    if (fileName) {
      const filePath = path.join(
        __dirname,
        '..',
        'uploads',
        'facilitators',
        fileName,
      );
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

export const deleteFac = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await deleteFacilitator(id);
    res.status(200).json({
      success: true,
      message: 'Berhasil menghapus akun facilitator',
      data: {
        facilitator: result.facilitator,
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
