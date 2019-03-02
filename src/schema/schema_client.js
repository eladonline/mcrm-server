const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// purchase schema
const Purchases = require('./schema_purchase');

const lengthValidator = name => {
  return name.length >= 2;
};
const emailValidator = value => {
  const regex = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
  );
  return regex.test(value);
};

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: name => lengthValidator(name),
      message: 'Name should be atleast 2 characters long.'
    }
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required'],
    validate: {
      validator: name => lengthValidator(name),
      message: 'Name should be atleast 2 characters long.'
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: email => emailValidator(email),
      message: 'Have to be a valid email address'
    }
  },
  phone: {
    type: Number,
    required: [true, 'Phone is required']
  },
  // pointer to Purchases collection
  purchases: [{ type: Schema.Types.ObjectId, ref: 'purchases' }]
});

// virtual type number of purchases
// create virtual property in the document "purchasesCount"
ClientSchema.virtual('purchasesCount').get(function() {
  // return the value for purchasesCount
  return this.purchases.length;
});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;
