import passport from 'passport';
import { Strategy as KakaoStrategy } from 'passport-kakao';

import AdminstratorModel from '../../models/mongoose/msBlog/Adminstrator';

import { GOOGLE_OAUTH_ID, GOOGLE_OAUTH_KEY, EDITOR_URI } from '../../config/constants';

interface GoogleAuthProps {
  sub: string;
  name: string;
  email: string;
  hd?: string;
}
passport.use(
  new KakaoStrategy(
    {
      clientID: '2a3e802b24993b3f1547d4a12297b651',
      clientSecret: '',
      callbackURL: '/auth/kakao/login/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      console.log(profile);
      const defaultUser = {
        fullName: profile.displayName,
        email: profile._json && profile._json.kakao_account?.email || '',
        picture: profile._json && profile._json.properties?.profile_image || '',
        kakaoId: profile.id,
        provider: 'kakao',
      };
      const user = await AdminstratorModel.findOneOrCreate({ condition: { kakaoId: profile.id }, doc: defaultUser }).catch((err: any) => {
        console.log('Error signing up', err);
        cb(err, null);
      });
      if (user) return cb(null, user);
    },
  ),
);
passport.serializeUser((user: any, cb) => {
  cb(null, user._id);
});
passport.deserializeUser(async (id, cb) => {
  const authUser = await AdminstratorModel.findOne({ _id: id });
  if (authUser) {
    cb(null, authUser);
  } else {
    //db 호출 실패
    cb(null, null);
  }
});
