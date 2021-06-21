"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("../../../utils/mongoose"));
const AwesomeBotDB = mongoose_2.default.awesomebot;
/* eslint-disable */
const memberSchema = new mongoose_1.Schema({
    name: String,
    phone: String,
    email: String,
    country: String,
    password: {
        type: String,
        select: false,
    },
    state: String,
    license: String,
    provider: String,
    providerData: {
        siteId: String,
        partnerId: Number,
    },
    refreshToken: String,
    tutorial: {
        type: Boolean,
        default: false,
    },
    changePasswordAt: {
        type: Date,
    },
    dropMemberAt: {
        type: Date,
    },
    tryLoginCount: Number,
    tmpAuthCode: String,
    profileThumbnail: String,
    config: Object,
    customOptions: Object,
    authProvider: String,
}, {
    timestamps: true,
});
memberSchema.statics.findByName = function ({ _id, name }) {
    return this.findOne({ _id, name });
};
exports.default = AwesomeBotDB.model('Member', memberSchema);
//# sourceMappingURL=Member.js.map