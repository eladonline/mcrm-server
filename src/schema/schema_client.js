const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lengthValidator = name => {
  return name.length >= 2;
};
const emailValidator = value => {
  const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi);
  return regex.test(value);
};

const ClientSchema = new Schema({
  Name: {
    type: String,
    required: [true, 'Name is required'],
    validate: {
      validator: name => lengthValidator(name),
      message: 'Name should be atleast 2 characters long.'
    }
  },
  LastName: {
    type: String,
    required: [true, 'LastName is required'],
    validate: {
      validator: name => lengthValidator(name),
      message: 'Name should be atleast 2 characters long.'
    }
  },
  Email: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: email => emailValidator(email),
      message: 'Have to be a valid email address'
    }
  },
  Phone: {
    type: Number,
    required: [true, 'Phone is required']
  }
});

const Client = mongoose.model('client', ClientSchema);

module.exports = Client;
