import { Request, Response } from 'express';
import {
  deleteFacilitator,
  getAllFacilitator,
  getAllFacilitatorById,
  getLatestSales,
  getTotalRevenue,
  getTotalTicketsSold,
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
import { IReqUser } from '../middlewares/authMiddleware';

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

export const totalRevenue = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getTotalRevenue(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan total keuntungan',
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

export const ticketsSold = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getTotalTicketsSold(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan total tiket terjual',
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

export const recentSales = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getLatestSales(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan tiket terjual',
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
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  try {
    const result = await getAllFacilitatorById(user.id);
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
