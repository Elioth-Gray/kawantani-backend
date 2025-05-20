import { Request } from 'express';
import { TToken } from './authTypes';

export interface IRequestWithFile extends Request {
  file?: Express.Multer.File;
}

export interface IRequestWithFileAuth extends Request {
  user?: TToken;
  file?: Express.Multer.File;
}