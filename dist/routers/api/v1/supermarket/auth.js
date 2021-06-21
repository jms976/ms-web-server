"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const constants_1 = require("../../../../config/constants");
const router = express_1.default.Router();
router.get('/login', passport_1.default.authenticate('google', {
    scope: ['profile', 'email'],
}));
router.get('/login/callback', passport_1.default.authenticate('google', {
    failureRedirect: constants_1.SUPER_MARKET_EDITOR_URI + '/login/fail',
    successRedirect: constants_1.SUPER_MARKET_EDITOR_URI + '/login/success',
    failureFlash: true,
}), (req, res) => {
    res.send('Thank you for signing in!');
});
router.get('/user', (req, res, next) => {
    console.log(req.user);
    if (req.user) {
        next();
    }
    else {
        // 세션 없음
        res.jsend.error('noauth');
    }
}, (req, res) => {
    res.jsend.success(req.user);
});
exports.default = router;
//# sourceMappingURL=auth.js.map