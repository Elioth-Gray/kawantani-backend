export type TRegister = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
};

export type TVerification = {
  email: string;
  verificationToken: string;
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
};
