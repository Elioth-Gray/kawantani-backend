export type TRegisterFacilitator = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  fullAddress: string;
  regencyId: number;
};

export type TUpdateFacilitator = {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  fullAddress?: string;
  regencyId?: number;
  password?: string;
  confirmPassword?: string;
};
