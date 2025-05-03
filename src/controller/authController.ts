import { Request, Response } from "express";
import { loginUser, registerUser, verifyUser } from "../services/authService";
import { TLogin, TRegister, TToken, TVerification } from "../types/authTypes";
import { IReqUser } from "../middlewares/authMiddleware";
import { getUserData } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  const data: TRegister = req.body;

  try {
    const result = await registerUser(data);
    res.status(200).json({
      success: true,
      message: "Berhasil daftar akun!",
      data: {
        token: result.token,
        user: result.user,
      },
    });
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
    res.status(200).json({
      success: true,
      message: result.message,
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      success: false,
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
      success: true,
      message: "Berhasil login!",
      data: {
        token: result.token,
        user: result.user,
      },
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};

export const me = async (req: IReqUser, res: Response) => {
  const user = req.user as TToken;
  try {
    const result = await getUserData(user);
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan user!",
      data: {
        user: result,
      },
    });
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
      success: false,
      message: err.message,
      data: null,
    });
  }
};
