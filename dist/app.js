"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_useragent_1 = __importDefault(require("express-useragent"));
const compression_1 = __importDefault(require("compression")); // compresses requests
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const jsend_1 = __importDefault(require("jsend"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const morgan_1 = __importDefault(require("morgan"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
//passport
const passport_1 = __importDefault(require("passport"));
const constants_1 = require("./config/constants");
// 인증 middleware
const auth_1 = require("./middleware/auth");
require("./utils/mongoose/index");
require("./models/mongoose/msBlog/Member");
require("./models/mongoose/msBlog/Adminstrator");
require("./models/mongoose/msBlog/CommentList");
////
require("./utils/auth/passportGoogle");
require("./utils/auth/passportKakao");
// api routers
const auth_2 = __importDefault(require("./routers/api/v1/supermarket/auth"));
const member_1 = __importDefault(require("./routers/api/v1/supermarket/member"));
const comment_1 = __importDefault(require("./routers/api/v1/msBlog/comment"));
// Create Express server
const app = express_1.default();
// 보안.
app.use(cors_1.default({ origin: [constants_1.EDITOR_URI], credentials: true }));
app.use(helmet_1.default());
app.enable('trust proxy');
// user agent
app.use(express_useragent_1.default.express());
app.use(constants_1.API_V1_URL, express_rate_limit_1.default({
    windowMs: constants_1.REQUEST_LIMIT_TIME,
    max: constants_1.REQUEST_LIMIT_COUNT,
}));
app.use(express_session_1.default({
    secret: constants_1.GOOGLE_OAUTH_KEY,
    resave: true,
    store: connect_mongo_1.default.create({ mongoUrl: constants_1.MS_MONGODB_URI }),
}));
app.use(passport_1.default.initialize()); // passport 구동
app.use(passport_1.default.session());
// api v2는 리스폰 객체를 표준화 하기 위함.
// api 요청일때만 데이터를 다르게 내려주고 싶은데,,,,
app.use(jsend_1.default.middleware);
// 설정..
app.use(morgan_1.default('dev'));
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(serve_favicon_1.default(path_1.default.join(__dirname, '../public', 'favicon/favicon.ico')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public'), { maxAge: 31557600000 }));
app.use('/auth', auth_2.default);
app.use(constants_1.API_V1_URL + constants_1.CLIENT_BASE_URL + '/member', auth_1.ensureAuth, member_1.default);
app.use(constants_1.API_V1_URL + constants_1.CLIENT_BASE_URL + '/comment', comment_1.default);
const swagger_1 = require("./config/swagger");
// 스웨거 설정.
app.use(serve_favicon_1.default(path_1.default.join(__dirname, '../public', 'favicon/favicon.ico')));
app.use('/swagger/themes', express_1.default.static(path_1.default.join(__dirname, '../node_modules/swagger-ui-themes/themes/3.x')));
app.use('/swagger/themes', express_1.default.static(path_1.default.join(__dirname, '../node_modules/swagger-ui-dist')));
app.use('/jquery', express_1.default.static(path_1.default.join(__dirname, '../node_modules/jquery')));
app.use('/public/favicon', express_1.default.static(path_1.default.join(__dirname, 'public/favicon')));
// 스웨거 라우터.
app.use(constants_1.SUPERMARKET_API_DOC_URL, swagger_ui_express_1.default.serveFiles(swagger_1.v1SwaggerSupermarketSpec), (req, res) => {
    res.send(swagger_ui_express_1.default.generateHTML(swagger_1.v1SwaggerSupermarketSpec, swagger_1.cusOptions));
});
app.use((req, res, next) => {
    console.log('*------- 아무런 라우터에도 걸리지 않아서 이곳으로 -------*');
    // 첫번째 인자가 Err인 라우터로 보낸다.
    // next(createError(404, "Not Found!!"));
    next('404');
});
// createError()로 요청할경우 본 미들웨어로 들어온다.
// app.use(async (err: Err, req: Request, res: Response, next: NextFunction) => {
//   console.log('*------- ******* err message', err.message);
//   console.log('*------- ******* err status', err.status);
//   const errMessage = err.message || 'Error';
//   const errHttpCode = err.status || 500;
//   res.locals.message = errMessage;
//   res.locals.status = errHttpCode;
//   // 개발일 경우만 에러 출력.
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(errHttpCode);
//   res.render('page/error');
// });
exports.default = app;
//# sourceMappingURL=app.js.map