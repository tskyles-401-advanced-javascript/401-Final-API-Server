const DataModel = require('@tskyles/mongo-model');
const schema = require('./categoriesSchema');

/**
 * model for categories
 * @class Categories
 * @extends {DataModel}
 */
class Categories extends DataModel {
  constructor() {
    super(schema);
  }
}

/** 
 * Categories model module
 * @module Categories
*/
module.exports = new Categories;