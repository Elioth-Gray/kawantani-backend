import jwt from "jsonwebtoken";
import { TToken } from "../types/authTypes";

export const generateToken = (data: TToken) => {
  const tokenData: TToken = data;

  const SECRET = process.env.JWT_SECRET;
  if (!SECRET) {
    throw new Error("JWT_SECRET environment variable is not set.");
  }

  const token = jwt.sign(
    {
      id: tokenData.idPengguna,
      email: tokenData.emailPengguna,
      nama: `${tokenData.namaDepanPengguna} ${tokenData.namaBelakangPengguna}`,
    },
    SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
};
