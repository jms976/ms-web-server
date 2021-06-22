import { MS_MONGODB_URI } from '../../config/constants';
import MongoDB from './connection';
export default {
  msBlog: new MongoDB(MS_MONGODB_URI).connect,
};
