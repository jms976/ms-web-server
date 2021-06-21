import YAML from 'yamljs';
import { API_V1_URL, HOST, ENV, CLIENT_BASE_URL, API_DOC_PATH } from '../constants';

const host = HOST;
const url = 'https://' + 'local-asb-market-api.happytalk.io' + API_V1_URL;

const v1SupermarketAPIDefeinition = {
    openapi :'3.0.1',
    info : {
        title : 'Supermarket Bot APIs', //title required
        version: '1.0.0', //version required
        description: 'Supermarket APIs Server', // description optional
    },
    servers : [
        {
            url: url + CLIENT_BASE_URL,
        },
    ],
    components: {
        securitySchemes:{
            BearerAuth: {
                type: 'http',
                schema: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
};

const v1SwaggerSupermarketSpec = Object.assign(
    v1SupermarketAPIDefeinition,
    YAML.load(
        __dirname +
        '/../../..' +
        API_DOC_PATH +
        '/supermarket/v1/SuperMarketAPI.yaml',
    ),
);

const cusOptions = {
    customSiteTitle: 'SuperMarket API Node(' + ENV + ')',
    customCssUrl :'/swagger/themes/theme-flattop.css',
    customfavIcon: '/public/favicon/favicon-32x32.png',
};

export {v1SwaggerSupermarketSpec, cusOptions};