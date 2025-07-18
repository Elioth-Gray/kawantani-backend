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

export type TCommentArticle = {
  user: TToken;
  id: string;
  content: string;
};

export type TSaveArticle = {
  user: TToken;
  id: string;
};

export type TLikeArticle = {
  user: TToken;
  id: string;
  rating: number;
};
export type TVerify = {
  id: string;
  status: string;
};
