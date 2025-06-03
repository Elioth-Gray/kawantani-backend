import { Request, Response } from 'express';
import {
  getAllCategory,
  getCategoryById,
} from '../services/articlesCategoryService';

export const getCategory = async (req: Request, res: Response) => {
  try {
    const result = await getAllCategory();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data kategori artikel',
      data: {
        categories: result,
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

export const getCategoryId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = Number(id);
  try {
    const result = await getCategoryById(numberId);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan kategori artikel',
      data: {
        provinces: result,
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
