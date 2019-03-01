const mongoose = require('mongoose');

const initiateMongo = () => {
  mongoose.connect('mongodb://localhost:27017/CCRM', { useNewUrlParser: true });
  mongoose.connection
    .once('open', () => console.log('Mongo is good To go!'))
    .on('error', error => console.warn('warning', error));
};

module.exports = initiateMongo;
