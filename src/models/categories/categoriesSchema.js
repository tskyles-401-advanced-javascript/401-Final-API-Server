'use strict';

const mongoose = require('mongoose');

require('../products/productsSchema');

let categories = mongoose.Schema({
  name: { type: String, require: true },
}, { toObject: { virtuals: true }, toJSON: {virtuals: true}});

categories.virtual('all_Products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

function join(){
  try {
    this.populate('all_Products');
  }
  catch(e) {console.error('find error', e);}
}

categories.pre('findOne', join);
categories.pre('find', join);
/** 
 * @module categoriesSchema
*/
module.exports = mongoose.model('categories', categories);