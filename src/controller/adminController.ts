import { IReqUser } from '../middlewares/authMiddleware';
import { getAdminById } from '../services/adminService';
import { Response } from 'express';

export const me = async (req: IReqUser, res: Response) => {
  const user = req.user;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized', data: null });
  }

  try {
    const result = await getAdminById(user.id);
    res.status(200).json({
      success: true,
      message: 'Berhasil mendapatkan user!',
      data: {
        admin: result,
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
