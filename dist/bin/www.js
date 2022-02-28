"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const app_1 = __importDefault(require("../app"));
const constants_1 = require("../config/constants");
// Express configuration
app_1.default.set('port', constants_1.PORT);
app_1.default.set('env', constants_1.ENV);
if (constants_1.ENV === 'production') {
    console.log('production');
    app_1.default.use(errorhandler_1.default());
}
app_1.default.listen(constants_1.PORT, () => {
    console.log('===================================================================================================');
    console.log('===================================================================================================');
    console.log('');
    console.log('');
    console.log(`               ${constants_1.HOST}:${constants_1.PORT} in ${constants_1.ENV} mode`);
    console.log('');
    console.log('');
    console.log('               Press CTRL-C to stop');
    console.log('');
    console.log('');
    console.log('===================================================================================================');
    console.log('===================================================================================================');
});
//# sourceMappingURL=www.js.map