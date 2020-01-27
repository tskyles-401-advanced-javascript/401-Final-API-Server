'use strict';

const {server} = require('../../src/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Error Handlers', () => {

  it('Should respond with a status of 404', () => {
    return mockRequest.get('/bad')
      .then(results => {
        expect(results.status).toEqual(404);
      }).catch(console.error);
  });

  xit('should respond with a 500 error', () => {
    const badObj = {test: 'test'};
    return mockRequest.post('/signin')
      .send(badObj)
      .then(results => {
        expect(results.status).toEqual(500);
      }).catch(console.error);
  });
});