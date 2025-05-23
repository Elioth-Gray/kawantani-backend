import { IReqUser } from './authMiddleware';
import { Response, NextFunction } from 'express';

export default (roles: string[]) => {
  return (req: IReqUser, res: Response, next: NextFunction) => {
    const role = req.user?.role;

    if (!role || !roles.includes(role)) {
      return res.status(403).json({
        data: null,
        message: 'Forbidden',
      });
    }

    next();
  };
};
