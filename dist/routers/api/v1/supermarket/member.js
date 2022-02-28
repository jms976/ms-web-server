"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_1 = require("../../../../controllers/member");
const router = express_1.default.Router();
router.get('/', member_1.memberList);
router.get('/:memberId', member_1.getMemberById);
router.put('/:memberId/state', member_1.updateMemberState);
router.put('/:memberId/config', member_1.updateMemberConfig);
router.put('/:memberId/license', member_1.updateMemberLicense);
exports.default = router;
//# sourceMappingURL=member.js.map