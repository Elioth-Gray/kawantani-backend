import { Request, Response } from 'express';
import {
  deleteFacilitator,
  getAllFacilitator,
  registerFacilitator,
  updateFacilitator,
} from '../services/facilitatorService';
import {
  TRegisterFacilitator,
  TUpdateFacilitator,
} from '../types/facilitatorTypes';

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

export const register = async (req: Request, res: Response) => {
  const data: TRegisterFacilitator = req.body;

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
    const statusCode = error.status || 500;
    const message = error.message || 'Terjadi kesalahan pada server.';
    return res.status(statusCode).json({
      success: false,
      message,
      data: null,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { id: _, ...body }: TUpdateFacilitator = req.body;
  const data = { id, ...body };
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
