import express, { Request, Response, NextFunction } from 'express';
import useragent from 'express-useragent';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import jsend from 'jsend';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import logger from 'morgan';
import createError from 'http-errors';
import favicon from 'serve-favicon';
import { Err } from 'index';

import session from 'express-session';
import mongoStore from 'connect-mongo';

//passport
import passport from 'passport';

import {
  API_V1_URL,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_COUNT,
  CLIENT_BASE_URL,
  SUPERMARKET_API_DOC_URL,
  GOOGLE_OAUTH_KEY,
  SUPER_MARKET_EDITOR_URI,
  SUPER_MARKET_MONGODB_URI,
} from './config/constants';

// 인증 middleware
import { ensureAuth, ensureGuest } from './middleware/auth';

import './utils/mongoose/index';
import './models/mongoose/awesomebot/Member';
import './models/mongoose/supermarket/Adminstrator';
////

import './utils/auth/passportGoogle';

// api routers
import v1AuthApiRouter from './routers/api/v1/supermarket/auth';
import v1MemberApiRouter from './routers/api/v1/supermarket/member';

/** callback 역할에 대해 물어보기 -> su */
// import callback from './routers/callback/index';

// Create Express server
const app = express();

// 보안.
app.use(cors({ origin: [SUPER_MARKET_EDITOR_URI, 'http://192.168.1.137:8989'], credentials: true }));
// app.use(cors());
app.use(helmet());
// app.enable('trust proxy');

// user agent
app.use(useragent.express());

app.use(
  API_V1_URL,
  rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_COUNT,
  }),
);

app.use(
  session({
    secret: GOOGLE_OAUTH_KEY,
    resave: true,
    store: mongoStore.create({ mongoUrl: SUPER_MARKET_MONGODB_URI }),
  }),
);

app.use(passport.initialize()); // passport 구동
app.use(passport.session());

// api v2는 리스폰 객체를 표준화 하기 위함.
// api 요청일때만 데이터를 다르게 내려주고 싶은데,,,,
app.use(jsend.middleware);

// 설정..
app.use(logger('dev'));

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(favicon(path.join(__dirname, '../public', 'favicon/favicon.ico')));
app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

app.use('/auth', v1AuthApiRouter);
app.use(API_V1_URL + CLIENT_BASE_URL + '/member', ensureAuth, v1MemberApiRouter);

import { v1SwaggerSupermarketSpec, cusOptions } from './config/swagger';

// 스웨거 설정.
app.use(favicon(path.join(__dirname, '../public', 'favicon/favicon.ico')));
app.use('/swagger/themes', express.static(path.join(__dirname, '../node_modules/swagger-ui-themes/themes/3.x')));
app.use('/swagger/themes', express.static(path.join(__dirname, '../node_modules/swagger-ui-dist')));
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery')));
app.use('/public/favicon', express.static(path.join(__dirname, 'public/favicon')));

// 스웨거 라우터.
app.use(SUPERMARKET_API_DOC_URL, swaggerUi.serveFiles(v1SwaggerSupermarketSpec), (req: Request, res: Response) => {
  res.send(swaggerUi.generateHTML(v1SwaggerSupermarketSpec, cusOptions));
});

app.use((req: Request, res: Response, next: NextFunction) => {
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

export default app;
