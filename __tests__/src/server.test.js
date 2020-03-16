'use strict';

const {server} = require('../../src/server');
const supergoose = require('../supergoose');
const mockRequest = supergoose.server(server);

describe('basic server function', () => {
  it('should give 404 on bad route', () => {
    return mockRequest.get('/DNE')
      .then(results => {
        expect(results.status).toEqual(404);
      });
  });
  it('should give 500 on error', () => {
    return mockRequest.post('/signin')
      .send({name: 'badObj'}) 
      .then(results => {
        expect(results.status).toEqual(500);
      });
  });
});