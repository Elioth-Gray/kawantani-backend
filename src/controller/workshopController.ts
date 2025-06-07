import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { IRequestWithFileAuth } from '../types/multerTypes';
import {
  createWorkshop,
  deleteWorkshop,
  getActiveRegistrants,
  getActiveWorkshops,
  getAllParticipants,
  getAllSales,
  getAllWorkshops,
  getPopularWorkshops,
  getRegisteredWorkshop,
  getWorkshopByFacilitator,
  getWorkshopById,
  getWorkshopParticipant,
  payRegistration,
  registerWorkshop,
  verifyWorkshop,
} from '../services/workshopService';
import { IReqUser } from '../middlewares/authMiddleware';

export const create = async (req: IRequestWithFileAuth, res: Response) => {
  const fileName = req.file?.filename;
  const data = {
    user: req.user,
    image: fileName,
    ...req.body,
  };

  try {
    const result = await createWorkshop(data);

    res.status(200).json({
      message: 'Artikel berhasil dibuat',
      data: result,
    });
  } catch (error) {
    if (fileName) {
      const filePath = path.join(
        __dirname,
        '..',
        'uploads',
        'workshops',
        fileName,
      );
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

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await getAllWorkshops();

    res.status(200).json({
      message: 'Workshop berhasil didapatkan',
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

export const getAllActive = async (req: Request, res: Response) => {
  try {
    const result = await getActiveWorkshops();

    res.status(200).json({
      message: 'Workshop berhasil didapatkan',
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

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await getWorkshopById(id);

    res.status(200).json({
      message: 'Workshop berhasil didapatkan',
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

export const verify = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = {
    id,
    status,
  };
  try {
    const result = await verifyWorkshop(data);

    res.status(200).json({
      message: 'Workshop berhasil diverifikasi',
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

export const registered = async (req: IReqUser, res: Response) => {
  const { user } = req.body;
  try {
    const result = await getRegisteredWorkshop(user);

    res.status(200).json({
      message: 'Workshop berhasil didapatkan',
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

export const deleteWorks = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  const data = {
    id,
    user,
  };
  try {
    const result = await deleteWorkshop(data);

    res.status(200).json({
      message: 'Workshop berhasil dihapus',
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

export const register = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  const data = {
    id,
    user,
    ...req.body,
  };
  try {
    const result = await registerWorkshop(data);

    res.status(200).json({
      message: 'Berhasil daftar workshop!',
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

export const pay = async (req: IReqUser, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  const data = {
    user,
    ...req.body,
  };
  try {
    const result = await payRegistration(data);

    res.status(200).json({
      message: 'Berhasil membayar pendaftaran!',
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

export const getParticipant = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  try {
    const result = await getWorkshopParticipant(user);

    res.status(200).json({
      message: 'Berhasil mendapatkan partisipan workshop!',
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

export const getOwnWorkshop = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  try {
    const result = await getWorkshopByFacilitator(user);

    res.status(200).json({
      message: 'Berhasil mendapatkan data workshop!',
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

export const activeRegistrants = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getActiveRegistrants(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan peserta aktif',
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

export const popularWorkshops = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getPopularWorkshops(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan data workshop populer',
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

export const allSales = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getAllSales(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan data penjualan',
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

export const allParticipants = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  const id = user.id;
  try {
    const result = await getAllParticipants(id);

    res.status(200).json({
      message: 'Berhasil mendapatkan data penjualan',
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
