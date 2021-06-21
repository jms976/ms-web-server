import mongoose from 'mongoose';
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
export default class Connection {
  url: string;
  #connect: mongoose.Connection;
  constructor(url: string) {
    const handleOpen = () => console.log('✅  Connected to DB ' + url);
    const handleError = (error: any[]) => console.log(`❌ Error on DB Connection:${error}`);

    this.url = url;
    const option = {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    this.#connect = mongoose.createConnection(url, option);
    this.#connect.once('open', handleOpen);
    this.#connect.on('error', handleError);
    this.#connect.on('disconnected', (args) => {
      this.#connect = mongoose.createConnection(url, option);
    });
  }

  get connect() {
    return this.#connect;
  }
}
