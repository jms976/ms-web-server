"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const Adminstrator_1 = __importDefault(require("../../models/mongoose/supermarket/Adminstrator"));
const constants_1 = require("../../config/constants");
passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
    clientID: constants_1.GOOGLE_OAUTH_ID,
    clientSecret: constants_1.GOOGLE_OAUTH_KEY,
    callbackURL: '/auth/login/callback',
    passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const defaultUser = {
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
    };
    const user = yield Adminstrator_1.default.findOneOrCreate({ condition: { googleId: profile.id }, doc: defaultUser }).catch((err) => {
        console.log('Error signing up', err);
        cb(err, null);
    });
    if (user)
        return cb(null, user);
})));
passport_1.default.serializeUser((user, cb) => {
    cb(null, user._id);
});
passport_1.default.deserializeUser((id, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const authUser = yield Adminstrator_1.default.findOne({ _id: id });
    if (authUser) {
        cb(null, authUser);
    }
    else {
        //db 호출 실패
        cb(null, null);
    }
}));
//# sourceMappingURL=passportGoogle.js.map