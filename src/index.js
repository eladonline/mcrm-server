require('dotenv').config();
const mongo = require('./mongo');
const debug = require('debug')('app:index');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const clientRoutes = require('./routes/route_client');

express.static('/public');

if (app.get('env') === 'development') {
  debug('Enviroment: ' + process.env.NODE_ENV);
  app.use(morgan('dev'));
}

app.use('/api/client', clientRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listenning on port: ${port}`);
});

mongo();
