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
const passport_kakao_1 = require("passport-kakao");
const Adminstrator_1 = __importDefault(require("../../models/mongoose/msBlog/Adminstrator"));
passport_1.default.use(new passport_kakao_1.Strategy({
    clientID: '2a3e802b24993b3f1547d4a12297b651',
    clientSecret: '',
    callbackURL: '/auth/kakao/login/callback',
    passReqToCallback: true,
}, (req, accessToken, refreshToken, profile, cb) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log(profile);
    const defaultUser = {
        fullName: profile.displayName,
        email: profile._json && ((_a = profile._json.kakao_account) === null || _a === void 0 ? void 0 : _a.email) || '',
        picture: profile._json && ((_b = profile._json.properties) === null || _b === void 0 ? void 0 : _b.profile_image) || '',
        kakaoId: profile.id,
        provider: 'kakao',
    };
    const user = yield Adminstrator_1.default.findOneOrCreate({ condition: { kakaoId: profile.id }, doc: defaultUser }).catch((err) => {
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
//# sourceMappingURL=passportKakao.js.map