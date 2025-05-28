import { TToken } from './authTypes';

export type TCreateWorskhop = {
  user: TToken;
  title: string;
  date: string;
  address: string;
  description: string;
  price: string;
  capacity: string;
  lat: string;
  long: string;
  image: string;
  regency: string;
};

export type TEditWorkshop = {
  user: TToken;
  id: string;
};
