const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

try {
  mongoose.connect(process.env.DB_URL, {
    useMongoClient: true,
  });
} catch (err) {
  mongoose.createConnection(process.env.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.connection
	.once('open', () => console.log('MongoDB running')) // eslint-disable-line
  .on('error', (e) => {
    throw e;
  });
