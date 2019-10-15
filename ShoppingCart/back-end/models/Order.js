const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  orderno: Number,
  orderdate: Date,
  ordertotal: Number,
  billingaddress: {},
  shippingaddress: {},
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  lineitems: [
    {
      productid: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      qty: Number,
      price: Number,
      total: Number
    }
  ]
});
module.exports = mongoose.model( 'Order' , OrderSchema );