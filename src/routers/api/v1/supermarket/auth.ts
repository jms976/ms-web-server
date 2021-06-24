import express from 'express';
import passport from 'passport';

import { API_V1_URL, EDITOR_URI } from '../../../../config/constants';

const router = express.Router();

router.get(
  '/login',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/kakao/login',
  passport.authenticate('kakao'),
);

router.get(
  '/login/callback',
  passport.authenticate('google', {
    failureRedirect: EDITOR_URI + '/login/fail',
    successRedirect: EDITOR_URI + '/login/success',
    failureFlash: true,
  }),
  (req, res) => {
    res.send('Thank you for signing in!');
  },
);

router.get(
  '/kakao/login/callback',
  passport.authenticate('kakao', {
    failureRedirect: EDITOR_URI + '/login/fail',
    successRedirect: EDITOR_URI + '/login/success',
    failureFlash: true,
  }),
  (req, res) => {
    res.send('Thank you for signing in!');
  },
);

router.get(
  '/user',
  (req, res, next) => {
    console.log(req.user);
    if (req.user) {
      next();
    } else {
      // 세션 없음
      res.jsend.error('noauth');
    }
  },
  (req, res) => {
    res.jsend.success(req.user);
  },
);

export default router;
