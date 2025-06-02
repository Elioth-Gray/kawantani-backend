import jwt from 'jsonwebtoken';
import { TToken } from '../types/authTypes';

export const generateToken = (data: TToken) => {
  const tokenData: TToken = data;

  const SECRET = process.env.JWT_SECRET;
  if (!SECRET) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }

  const token = jwt.sign(
    {
      id: tokenData.id,
      email: tokenData.email,
      firstName: tokenData.firstName,
      lastName: tokenData.lastName,
      avatar: tokenData.avatar,
      role: tokenData.role,
    },
    SECRET,
    {
      expiresIn: '1d',
    },
  );

  return token;
};

export const decodeToken = (token: string): TToken | null => {
  try {
    const SECRET = process.env.JWT_SECRET;
    if (!SECRET) {
      throw new Error('JWT_SECRET environment variable is not set.');
    }
    const decoded = jwt.verify(token, SECRET);

    if (
      typeof decoded === 'object' &&
      decoded.id &&
      decoded.email &&
      decoded.firstName &&
      decoded.lastName
    ) {
      return {
        id: decoded.id,
        email: decoded.email,
        firstName: decoded.firstName,
        avatar: decoded.avatar,
        lastName: decoded.lastName,
        role: decoded.role,
      };
    }
    return null;
  } catch (err) {
    return null;
  }
};
