"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _connect;
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('useFindAndModify', false);
mongoose_1.default.Promise = global.Promise;
class Connection {
    constructor(url) {
        _connect.set(this, void 0);
        const handleOpen = () => console.log('✅  Connected to DB ' + url);
        const handleError = (error) => console.log(`❌ Error on DB Connection:${error}`);
        this.url = url;
        const option = {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        __classPrivateFieldSet(this, _connect, mongoose_1.default.createConnection(url, option));
        __classPrivateFieldGet(this, _connect).once('open', handleOpen);
        __classPrivateFieldGet(this, _connect).on('error', handleError);
        __classPrivateFieldGet(this, _connect).on('disconnected', (args) => {
            __classPrivateFieldSet(this, _connect, mongoose_1.default.createConnection(url, option));
        });
    }
    get connect() {
        return __classPrivateFieldGet(this, _connect);
    }
}
exports.default = Connection;
_connect = new WeakMap();
//# sourceMappingURL=connection.js.map