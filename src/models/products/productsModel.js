'use strict';

const DataModel = require('@tskyles/mongo-model');
const schema = require('./schemas/products-schema');

/**
 * model for products
 * @class Products
 * @extends {DataModel}
 */
class Products extends DataModel {
  constructor() {
    super(schema);
  }
}
/** 
 * Products model module
 * @module Products
*/
module.exports = new Products;