import { Request, Response } from 'express';
import { getAllMethod, getMethodById } from '../services/paymentMethodService';

export const getMethod = async (req: Request, res: Response) => {
  try {
    const result = await getAllMethod();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data metode pembayaran',
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

export const getMethodId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = Number(id);
  try {
    const result = await getMethodById(numberId);
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
