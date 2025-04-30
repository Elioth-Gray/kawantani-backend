import { Request, Response } from "express";
import { loginUser, registerUser, verifyUser } from "../services/authService";
import { TLogin, TRegister, TVerification } from "../types/authTypes";

export const register = async (req: Request, res: Response) => {
  const data: TRegister = req.body;

  try {
    const result = await registerUser(data);
    res
      .status(200)
      .json({ success: true, message: "Berhasil daftar akun!", data: result });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const verifyAccount = async (req: Request, res: Response) => {
  const data: TVerification = req.body;

  try {
    const result = await verifyUser(data);
    res.status(200).json(result);
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const data: TLogin = req.body;

  try {
    const result = await loginUser(data);
    res.status(200).json({
      message: "Berhasil login!",
      data: {
        token: result,
      },
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      message: err.message,
      data: null,
    });
  }
};
