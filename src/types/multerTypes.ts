import { Request } from 'express';

export interface IRequestWithFile extends Request {
  file?: Express.Multer.File;
}
