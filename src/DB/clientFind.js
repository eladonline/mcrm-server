const Client = require('../schema/schema_client');
const debug = require('debug')('app:clientFind');

async function clientFindByParam(param) {
  try {
    debug(`finding all client...`);
    const client = await Client.find(param);
    if (client.length) {
      debug(`clients found...`);
      return client;
    } else {
      debug(`client havn't been found`);
      return false;
    }
  } catch (error) {
    debug('error in clientFindByParam');
    throw error;
  }
}
async function clientFindOneByParam(param) {
  try {
    debug(`finding one client...`);
    const client = await Client.findOne(param);
    debug(`client found... here is the name: ${client.Name}`);
    return client;
  } catch (error) {
    return new Error(`error in clientFindOneByParam: ${error}`);
  }
}
async function clientFindById(id) {
  try {
    debug(`finding by id client...`);
    const client = await Client.findById(id);
    debug(`client found... here is the name: ${client.Name}`);
    return client;
  } catch (error) {
    debug('error in clientFindById');
    throw error;
  }
}

module.exports.clientFindByParam = clientFindByParam;
module.exports.clientFindOneByParam = clientFindOneByParam;
module.exports.clientFindById = clientFindById;
