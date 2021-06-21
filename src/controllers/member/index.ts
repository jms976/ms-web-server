import express, { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

import memberService from '../../service/member';

/** member 관련 함수 */
export const memberList = async (req: Request, res: Response) => {
  try {
    const r = await memberService.getMemberList();
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
export const getMemberById = async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId as string;
    const r = await memberService.getMember(new Types.ObjectId(memberId));
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
export const updateMemberState = async (req: Request, res: Response) => {
  try {
    const memberId = new Types.ObjectId(req.params.memberId);
    const state = req.query.state as string;
    const r = await memberService.updateMemberState({ memberId, state });
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
export const updateMemberConfig = async (req: Request, res: Response) => {
  try {
    const memberId = new Types.ObjectId(req.params.memberId);
    const config = req.body as any;
    const r = await memberService.updateMemberConfig({ memberId, config });
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
export const updateMemberLicense = async (req: Request, res: Response) => {
  try {
    const memberId = new Types.ObjectId(req.params.memberId);

    const license = req.query.license as string;
    const r = await memberService.updateMemberLicense({ memberId, license });
    res.jsend.success(r);
  } catch (e) {
    res.jsend.error(e);
  }
};
