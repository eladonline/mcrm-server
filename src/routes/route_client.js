const debug = require('debug')('app:client');
const express = require('express');
const router = express.Router();
const path = require('path');
const _ = require('lodash');
router.use(express.json('*/json'));

const addClient = require('../DB/client_A_R_E').addClient;
const deleteClient = require('../DB/client_A_R_E').deleteClient;
const clientFindOneByParam = require('../DB/clientFind').clientFindOneByParam;
const clientFindByParam = require('../DB/clientFind').clientFindByParam;
const clientFindById = require('../DB/clientFind').clientFindById;
const editClient = require('../DB/client_A_R_E').editClient;

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, content-type, Accept, access-control-allow-origin'
  );
  next();
});

// POST
router.post('/add', (req, res) => {
  console.log(req.body.data);
  const { data } = req.body;

  addClient(data);
  res.status(200).send({ success: true, error: null });
});

// DELETE

router.delete('/delete/:id', (req, res) => {
  const oQuery = req.params.id;
  console.log(oQuery);
  debug(`a delete request called, with the id: ${JSON.stringify(oQuery)}`);
  // first we find by id in DB
  async function s() {
    const FindClient = await clientFindById(oQuery);
    return deleteClient(FindClient);
  }
  s();

  res.send('deleted successfuly');
});

//PUT

router.put('/put/client', (req, res) => {
  const client = req.body.data;
  debug(`a put request called, here is the new object: ${JSON.stringify(client)}`);
  // first we find by id in DB
  async function s() {
    let FindClient = await clientFindById(client._id);
    const clientToSave = Object.assign(FindClient, client);
    // now we edit
    return editClient(clientToSave);
  }
  s();

  res.send('edit successfuly');
});

// Find all

router.get('/query/find?', (req, res) => {
  const oQuery = req.query;
  debug(`a get request of type 'All' called, with the parameters: ${JSON.stringify(oQuery)}`);
  // first we find all in DB
  async function s() {
    const FindClients = await clientFindByParam(oQuery);
    if (FindClients) {
      debug('sending clients list to client...');
      res.status(200).send(FindClients);
    } else {
      res.status(200).send({ error: 'Not found in DB', success: false });
    }
    debug('done.');
  }
  s();
});

// find one
router.get('/query/find-one?', (req, res) => {
  const oQuery = req.query;
  debug(`a get request  of type 'find-one' called, with the parameters: ${JSON.stringify(oQuery)}`);
  // first we find all in DB
  async function s() {
    const FindClients = await clientFindOneByParam(oQuery);
    if (FindClients) {
      debug('sending client list to client...');
      res.status(200).send(FindClients);
    } else {
      res.status(200).send({ error: 'Not found in DB', success: false });
    }
    debug('done.');
  }
  s();
});

module.exports = router;
