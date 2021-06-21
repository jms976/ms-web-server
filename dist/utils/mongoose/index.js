"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../config/constants");
const connection_1 = __importDefault(require("./connection"));
exports.default = {
    awesomebot: new connection_1.default(constants_1.AWESOME_BOT_MONGODB_URI).connect,
    supermarket: new connection_1.default(constants_1.SUPER_MARKET_MONGODB_URI).connect,
    msWeb: new connection_1.default(constants_1.MS_MONGODB_URI).connect,
};
//# sourceMappingURL=index.js.map