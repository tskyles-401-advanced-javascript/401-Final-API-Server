'use strict';

const {server} = require('../../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('category routes', () => {
  const testCategory = {
    name: 'test',
  };

  it('can create a category', () => {
    return mockRequest.post('/api/v1/category')
      .then(results => {

      });
  });
});