import { Request, Response } from 'express';
import { getAllPlants, getPlantById } from '../services/plantService';

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await getAllPlants();
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan data tanaman',
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

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getPlantById(id);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan tanaman',
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
