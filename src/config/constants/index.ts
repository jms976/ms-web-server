import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export const ENV = process.env.NODE_ENV || 'localhost';
export const PORT = process.env.PORT || 8899;
export const HOST = process.env.API_HOST || 'hhttp://dev-api.maengmung.site';

export const AWESOME_BOT_MONGODB_URI = process.env.AWESOME_BOT_MONGODB_URI;
export const SUPER_MARKET_MONGODB_URI = process.env.SUPER_MARKET_MONGODB_URI;
export const EDITOR_URI = process.env.EDITOR_URI;

export const API_V1_URL = '/api/v1';
export const REQUEST_LIMIT_TIME = 5000;
export const REQUEST_LIMIT_COUNT = 300;
export const CLIENT_BASE_URL = '/supermarket';
export const API_DOC_PATH = '/api_docs';

export const GOOGLE_OAUTH_ID = process.env.GOOGLE_OAUTH_ID;
export const GOOGLE_OAUTH_KEY = process.env.GOOGLE_OAUTH_KEY;

//swagger
export const SUPERMARKET_API_DOC_URL = '/documentation' + API_V1_URL + CLIENT_BASE_URL;
