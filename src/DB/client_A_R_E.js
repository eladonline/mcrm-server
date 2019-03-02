const Client = require('../schema/schema_client');
const Purchases = require('../schema/schema_purchase');
const debug = require('debug')('app:client_A_R_E');

//add client
async function addClient(clientData) {
  const client = new Client(clientData);
  const purchases = new Purchases(clientData);

  client.purchases.push(purchases);
  try {
    debug(`saving client...`);
    await purchases.save();
    const clientSave = await client.save();

    debug(`client has been saved: ${clientSave.id}`);
    return 'client was created successfuly';
  } catch (err) {
    debug('error in addClient');
    throw Error(`error in addClient: ${err}`);
  }
}
// delete client
async function deleteClient(client) {
  try {
    debug(`Recived client to delete and here its name: ${client.Name}`);
    debug(`deleting client...`);
    const clientRemoved = await client.remove();
    debug(`client has been removed: ${clientRemoved.Name}`);
    return clientRemoved;
  } catch (err) {
    throw Error(`error in deleteClient: ${err}`);
  }
}

// edit client
async function editClient(client) {
  try {
    debug(`client recived to edit and here its new name: ${client.Name}`);
    debug('saving client...');
    await client.save();
    debug('done!');
  } catch (err) {
    throw Error(`error in editClient: ${err}`);
  }
}

module.exports.addClient = addClient;
module.exports.deleteClient = deleteClient;
module.exports.editClient = editClient;
