export type TRegisterFacilitator = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  fullAddress: string;
  regencyId: string;
  avatar: string;
};

export type TUpdateFacilitator = {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  fullAddress?: string;
  regencyId: string;
  password?: string;
  confirmPassword?: string;
  avatar?: string;
};
