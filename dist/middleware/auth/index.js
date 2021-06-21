"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureGuest = exports.ensureAuth = void 0;
const constants_1 = require("../../config/constants");
exports.ensureAuth = (req, res, next) => {
    var _a;
    if (req.isAuthenticated() || ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.noauth) === 'use') {
        return next();
    }
    else {
        res.jsend.error('noauth');
    }
};
exports.ensureGuest = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect(constants_1.API_V1_URL + '/supermarket/auth/login');
    }
};
//# sourceMappingURL=index.js.map