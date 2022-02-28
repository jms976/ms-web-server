"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cusOptions = exports.v1SwaggerSupermarketSpec = void 0;
const yamljs_1 = __importDefault(require("yamljs"));
const constants_1 = require("../constants");
const host = constants_1.HOST;
const url = 'https://' + 'local-asb-market-api.happytalk.io' + constants_1.API_V1_URL;
const v1SupermarketAPIDefeinition = {
    openapi: '3.0.1',
    info: {
        title: 'Supermarket Bot APIs',
        version: '1.0.0',
        description: 'Supermarket APIs Server',
    },
    servers: [
        {
            url: url + constants_1.CLIENT_BASE_URL,
        },
    ],
    components: {
        securitySchemes: {
            BearerAuth: {
                type: 'http',
                schema: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};
const v1SwaggerSupermarketSpec = Object.assign(v1SupermarketAPIDefeinition, yamljs_1.default.load(__dirname +
    '/../../..' +
    constants_1.API_DOC_PATH +
    '/supermarket/v1/SuperMarketAPI.yaml'));
exports.v1SwaggerSupermarketSpec = v1SwaggerSupermarketSpec;
const cusOptions = {
    customSiteTitle: 'SuperMarket API Node(' + constants_1.ENV + ')',
    customCssUrl: '/swagger/themes/theme-flattop.css',
    customfavIcon: '/public/favicon/favicon-32x32.png',
};
exports.cusOptions = cusOptions;
//# sourceMappingURL=index.js.map