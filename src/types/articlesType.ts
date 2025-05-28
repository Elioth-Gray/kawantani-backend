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

export type TEditArticle = {
  user: TToken;
  id: string;
};

export type TUpdateArticle = {
  id: string;
  user: TToken;
  title: string;
  description: string;
  content: string;
  image: string;
  articleStatus: string;
};
