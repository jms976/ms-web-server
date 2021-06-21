import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

import AdminstratorModel from '../../models/mongoose/supermarket/Adminstrator';

import { GOOGLE_OAUTH_ID, GOOGLE_OAUTH_KEY, SUPER_MARKET_EDITOR_URI } from '../../config/constants';

interface GoogleAuthProps {
  sub: string;
  name: string;
  email: string;
  hd?: string;
}
passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: GOOGLE_OAUTH_ID,
      clientSecret: GOOGLE_OAUTH_KEY,
      callbackURL: '/auth/login/callback',
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };
      const user = await AdminstratorModel.findOneOrCreate({ condition: { googleId: profile.id }, doc: defaultUser }).catch((err: any) => {
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
