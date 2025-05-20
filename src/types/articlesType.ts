import { TToken } from './authTypes';

export type TCreateArticle = {
  user: TToken;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  articleStatus: string;
};
