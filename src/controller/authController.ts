import { Request, Response } from "express";
import { registerUser, verifyUser } from "../services/authService";
import { TRegister, TVerification } from "../types/authTypes";

export const register = async (req: Request, res: Response) => {
  const data: TRegister = req.body;

  try {
    const result = await registerUser(data);
    res.status(200).json(result);
  } catch (error) {
    const err = error as unknown as Error;
    res.status(400).json({
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
