const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  totalProducts: Number,
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  isActive : Boolean,

});

module.exports = mongoose.model( 'Category' , categorySchema );