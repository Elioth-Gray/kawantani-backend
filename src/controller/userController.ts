import { Request, Response } from "express";
import { TUser } from "../types/userTypes";
import { getAll, getById } from "../services/userServices";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAll();

    res.status(200).json({
      message: "Data user berhasil diambil!",
      data: users,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await getById(id);

    res.status(200).json({
      message: "Pengguna ditemukan",
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
