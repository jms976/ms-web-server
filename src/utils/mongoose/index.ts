import { SUPER_MARKET_MONGODB_URI, AWESOME_BOT_MONGODB_URI, MS_MONGODB_URI } from '../../config/constants';
import MongoDB from './connection';
export default {
  awesomebot: new MongoDB(AWESOME_BOT_MONGODB_URI).connect,
  supermarket: new MongoDB(SUPER_MARKET_MONGODB_URI).connect,
  // msWeb: new MongoDB(MS_MONGODB_URI).connect,
};
