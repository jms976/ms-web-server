import errorHandler from 'errorhandler';
import app from '../app';
import { ENV, PORT, HOST } from '../config/constants';

// Express configuration
app.set('port', PORT);
app.set('env', ENV);

if (ENV === 'production') {
  console.log('production');
  app.use(errorHandler());
}

app.listen(PORT, () => {
  console.log('===================================================================================================');
  console.log('===================================================================================================');
  console.log('');
  console.log('');
  console.log(`               ${HOST}:${PORT} in ${ENV} mode`);
  console.log('');
  console.log('');
  console.log('               Press CTRL-C to stop');
  console.log('');
  console.log('');
  console.log('===================================================================================================');
  console.log('===================================================================================================');
});
