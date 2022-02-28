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
exports.updateMemberLicense = exports.updateMemberConfig = exports.updateMemberState = exports.getMemberById = exports.memberList = void 0;
const mongoose_1 = require("mongoose");
const member_1 = __importDefault(require("../../service/member"));
/** member 관련 함수 */
exports.memberList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const r = yield member_1.default.getMemberList();
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
exports.getMemberById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memberId = req.params.memberId;
        const r = yield member_1.default.getMember(new mongoose_1.Types.ObjectId(memberId));
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
exports.updateMemberState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memberId = new mongoose_1.Types.ObjectId(req.params.memberId);
        const state = req.query.state;
        const r = yield member_1.default.updateMemberState({ memberId, state });
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
exports.updateMemberConfig = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memberId = new mongoose_1.Types.ObjectId(req.params.memberId);
        const config = req.body;
        const r = yield member_1.default.updateMemberConfig({ memberId, config });
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
exports.updateMemberLicense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const memberId = new mongoose_1.Types.ObjectId(req.params.memberId);
        const license = req.query.license;
        const r = yield member_1.default.updateMemberLicense({ memberId, license });
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
//# sourceMappingURL=index.js.map