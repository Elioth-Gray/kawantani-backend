export type TRegister = {
  namaDepan: string;
  namaBelakang: string;
  emailPengguna: string;
  nomorTeleponPengguna: string;
  tanggalLahirPengguna: string;
  passwordPengguna: string;
  confirmPasswordPengguna: string;
};

export type TVerification = {
  emailPengguna: string;
  kodeVerifikasi: string;
};

export type TLogin = {
  emailPengguna: string;
  passwordPengguna: string;
};

export type TToken = {
  idPengguna: string;
  emailPengguna: string;
  namaDepanPengguna: string;
  namaBelakangPengguna: string;
};
