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
exports.saveCommnet = void 0;
const comment_1 = __importDefault(require("../../service/comment"));
/** comment 관련 함수 */
exports.saveCommnet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body;
        const r = yield comment_1.default.saveComment(req.body);
        res.jsend.success(r);
    }
    catch (e) {
        res.jsend.error(e);
    }
});
//# sourceMappingURL=index.js.map