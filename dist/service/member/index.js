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
const Member_1 = __importDefault(require("../../models/mongoose/msBlog/Member"));
class Member {
    static getMemberList() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield Member_1.default.find().lean();
            return list;
        });
    }
    static getMember(memberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield Member_1.default.findById(memberId);
            return member;
        });
    }
    static updateMemberState({ memberId, state }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = memberId;
            const member = yield Member_1.default.findByIdAndUpdate(_id, {
                $set: {
                    state: state,
                },
            }, { new: true });
            return member;
        });
    }
    static updateMemberConfig({ memberId, config }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = memberId;
            const member = yield Member_1.default.findByIdAndUpdate(_id, {
                $set: {
                    config: config,
                },
            }, { new: true });
            return member;
        });
    }
    static updateMemberLicense({ memberId, license }) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = memberId;
            const member = yield Member_1.default.findByIdAndUpdate(_id, {
                $set: {
                    license: license,
                },
            }, { new: true });
            return member;
        });
    }
}
exports.default = Member;
//# sourceMappingURL=index.js.map