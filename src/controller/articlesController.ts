import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { IRequestWithFileAuth } from '../types/multerTypes';
import { createArticle } from '../services/articlesService';

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
