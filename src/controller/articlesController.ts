import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { IRequestWithFileAuth } from '../types/multerTypes';
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  getArticleById,
  toggleArticle,
  verifyArticle,
} from '../services/articlesService';

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await getAllArticle();

    res.status(200).json({
      message: 'Artikel berhasil didapatkan',
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
    const result = await getArticleById(id);

    res.status(200).json({
      message: 'Artikel berhasil didapatkan',
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

export const create = async (req: IRequestWithFileAuth, res: Response) => {
  const fileName = req.file?.filename;
  const data = {
    user: req.user,
    image: fileName,
    ...req.body,
  };

  try {
    const result = await createArticle(data);

    res.status(200).json({
      message: 'Artikel berhasil dibuat',
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

export const verify = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await verifyArticle(id);

    res.status(200).json({
      message: 'Artikel berhasil diverifikasi',
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

export const toggle = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await toggleArticle(id);

    res.status(200).json({
      message: 'Artikel berhasil diperbarui',
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

export const deleteArtic = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await deleteArticle(id);

    res.status(200).json({
      message: 'Artikel berhasil dihapus',
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
