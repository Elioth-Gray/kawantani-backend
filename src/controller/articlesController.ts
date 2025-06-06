import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { IRequestWithFileAuth } from '../types/multerTypes';
import {
  addComment,
  createArticle,
  deleteArticle,
  getActiveArticle,
  getAllArticle,
  getArticleById,
  getArticleByUser,
  getSavedArticle,
  likeArticle,
  saveArticle,
  toggleArticle,
  unlikeArticle,
  unsaveArticle,
  updateArticle,
  verifyArticle,
} from '../services/articlesService';
import { IReqUser } from '../middlewares/authMiddleware';

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

export const getAllActive = async (req: Request, res: Response) => {
  try {
    const result = await getActiveArticle();

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

export const getOwnArticle = async (req: IReqUser, res: Response) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  try {
    const result = await getArticleByUser(user);

    res.status(200).json({
      message: 'Berhasil mendapatkan data artikel!',
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
      const filePath = path.join(
        __dirname,
        '..',
        'uploads',
        'articles',
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

export const update = async (req: IRequestWithFileAuth, res: Response) => {
  const fileName = req.file?.filename;
  const data = {
    user: req.user,
    image: fileName,
    ...req.body,
  };
  try {
    const result = await updateArticle(data);

    res.status(200).json({
      message: 'Artikel berhasil dihapus',
      data: result,
    });
  } catch (error) {
    if (fileName) {
      const filePath = path.join(
        __dirname,
        '..',
        'uploads',
        'articles',
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

export const verify = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const data = {
    id,
    status,
  };

  try {
    const result = await verifyArticle(data);

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

export const toggle = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }
  const data = {
    id,
    user,
  };
  console.log(data);
  try {
    const result = await toggleArticle(data);

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

export const deleteArtic = async (req: IReqUser, res: Response) => {
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
    const result = await deleteArticle(data);

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

export const comment = async (req: IReqUser, res: Response) => {
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
    const result = await addComment(data);

    res.status(200).json({
      message: 'Komentar berhasil dibuat!',
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

export const save = async (req: IReqUser, res: Response) => {
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
    const result = await saveArticle(data);

    res.status(200).json({
      message: 'Artikel berhasil disimpan',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const unSave = async (req: IReqUser, res: Response) => {
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
    const result = await unsaveArticle(data);

    res.status(200).json({
      message: 'Simpan artikel berhasil dibatalkan',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const like = async (req: IReqUser, res: Response) => {
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
    const result = await likeArticle(data);

    res.status(200).json({
      message: 'Artikel berhasil disukai',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const unLike = async (req: IReqUser, res: Response) => {
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
    const result = await unlikeArticle(data);

    res.status(200).json({
      message: 'Artikel berhasil batalkan disukai',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getSaved = async (req: IReqUser, res: Response) => {
  const { id } = req.params;
  try {
    const result = await getSavedArticle(id);

    res.status(200).json({
      message: 'Artikel berhasil didapatkan!',
      data: result,
    });
  } catch (error: any) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};
