"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPERMARKET_API_DOC_URL = exports.GOOGLE_OAUTH_KEY = exports.GOOGLE_OAUTH_ID = exports.API_DOC_PATH = exports.CLIENT_BASE_URL = exports.REQUEST_LIMIT_COUNT = exports.REQUEST_LIMIT_TIME = exports.API_V1_URL = exports.AWESOME_BOT_USER_HOST = exports.AWESOME_BOT_API_URI = exports.AWESOME_BOT_EDITOR_URI = exports.SUPER_MARKET_EDITOR_URI = exports.SUPER_MARKET_MONGODB_URI = exports.AWESOME_BOT_MONGODB_URI = exports.HOST = exports.PORT = exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
exports.ENV = process.env.NODE_ENV || 'localhost';
exports.PORT = process.env.PORT || 8899;
exports.HOST = process.env.AWESOME_BOT_MARKET_HOST || 'https://local-asb-market-api.happytalk.io';
exports.AWESOME_BOT_MONGODB_URI = process.env.AWESOME_BOT_MONGODB_URI;
exports.SUPER_MARKET_MONGODB_URI = process.env.SUPER_MARKET_MONGODB_URI;
exports.SUPER_MARKET_EDITOR_URI = process.env.SUPER_MARKET_EDITOR_URI;
exports.AWESOME_BOT_EDITOR_URI = process.env.AWESOME_BOT_EDITOR_URI;
exports.AWESOME_BOT_API_URI = process.env.AWESOME_BOT_API_URI;
exports.AWESOME_BOT_USER_HOST = process.env.AWESOME_BOT_USER_HOST;
exports.API_V1_URL = '/api/v1';
exports.REQUEST_LIMIT_TIME = 5000;
exports.REQUEST_LIMIT_COUNT = 300;
exports.CLIENT_BASE_URL = '/supermarket';
exports.API_DOC_PATH = '/api_docs';
exports.GOOGLE_OAUTH_ID = process.env.GOOGLE_OAUTH_ID;
exports.GOOGLE_OAUTH_KEY = process.env.GOOGLE_OAUTH_KEY;
//swagger
exports.SUPERMARKET_API_DOC_URL = '/documentation' + exports.API_V1_URL + exports.CLIENT_BASE_URL;
//# sourceMappingURL=index.js.map