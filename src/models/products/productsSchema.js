'use strict';

const mongoose = require('mongoose');

require('./categories-schema');

const products = mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
});
/** 
 * @module productSchema
*/
module.exports = mongoose.model('products', products);