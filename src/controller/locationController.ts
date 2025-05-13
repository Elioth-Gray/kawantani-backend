import { Request, Response } from 'express';
import {
  getAllProvince,
  getAllRegency,
  getProvinceById,
  getRegencyById,
  getRegencyByProvinceId,
} from '../services/locationService';

export const getProvince = async (req: Request, res: Response) => {
  try {
    const result = await getAllProvince();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data provinsi',
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

export const getProvinceId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = Number(id);
  try {
    const result = await getProvinceById(numberId);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data provinsi',
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

export const getRegency = async (req: Request, res: Response) => {
  try {
    const result = await getAllRegency();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data provinsi',
      data: {
        regencies: result,
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

export const getRegencyId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = Number(id);
  try {
    const result = await getRegencyById(numberId);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data provinsi',
      data: {
        regencies: result,
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

export const getRegencyProvinceId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const numberId = Number(id);
  try {
    const result = await getRegencyByProvinceId(numberId);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data kabupaten',
      data: {
        regencies: result,
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
