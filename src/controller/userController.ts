import { Request, Response } from "express";
import { TUser } from "../types/userTypes";
import { getAll } from "../services/userServices";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAll();

    res.status(200).json({
      message: "Data user berhasil diambil!",
      data: users,
    });
  } catch (error) {
    const err = error as unknown as Error;
    throw err;
  }
};
