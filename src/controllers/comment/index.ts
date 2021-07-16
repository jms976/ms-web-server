import express, { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

import commentServie from '../../service/comment';

/** comment 관련 함수 */
export const saveCommnet = async (req: Request, res: Response) => {
  try {
    req.body;
    const r = await commentServie.saveComment(req.body);
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
