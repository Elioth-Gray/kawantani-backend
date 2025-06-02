import { TToken } from './authTypes';

export type TUser = {
  id: string;
};

export type TUpdateUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
  gender: string;
  avatar: string;
};

export type TUpdateProfile = {
  user: TToken;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
  gender: string;
  avatar: string;
};

export type TEditUser = {
  user: TToken;
  id: string;
};
