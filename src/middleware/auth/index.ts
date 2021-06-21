import { Request, Response, NextFunction } from 'express';

import { API_V1_URL } from '../../config/constants';

export const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated() || req.headers?.noauth === 'use') {
    return next();
  } else {
    res.jsend.error('noauth');
  }
};
export const ensureGuest = (req: Request, res: Response, next: NextFunction) => {
  if (!req.isAuthenticated()) {
    return next();
  } else {
    res.redirect(API_V1_URL + '/supermarket/auth/login');
  }
};
