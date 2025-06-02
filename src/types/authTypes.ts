export type TRegister = {
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

export type TVerification = {
  user: TToken;
  verificationCode: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TToken = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
};
