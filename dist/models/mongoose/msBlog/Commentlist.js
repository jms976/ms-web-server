"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("../../../utils/mongoose"));
const MsBlogDB = mongoose_2.default.msBlog;
/* eslint-disable */
const CommentListSchema = new mongoose_1.Schema({
    thumbnail: String,
    writer: String,
    comment: String,
}, {
    timestamps: true,
});
exports.default = MsBlogDB.model('Commentlist', CommentListSchema);
//# sourceMappingURL=Commentlist.js.map