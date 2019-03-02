const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchasesSchema = new Schema({
  date: { type: String, default: Date.now() },
  product: String,
  price: Number
});

const Purchases = mongoose.model('purchases', PurchasesSchema);
module.exports = Purchases;
