const mongoose = require('mongoose');

const initiateMongo = () => {
  //mongoose.connect('mongodb://localhost:27017/CCRM', { useNewUrlParser: true }); // local
  mongoose.connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@ds155825.mlab.com:55825/mcrm`,
    { useNewUrlParser: true }
  );
  mongoose.connection
    .once('open', () => console.log('Mongo is good To go!'))
    .on('error', error => console.warn('warning', error));
};

module.exports = initiateMongo;
