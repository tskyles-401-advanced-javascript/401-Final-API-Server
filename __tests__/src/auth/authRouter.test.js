'use strict';

process.env.SECRET='secret';

const server = require('../../../src/server');
const jwt = require('jsonwebtoken');
const supergoose = require('../../supergoose');
const mockRequest = supergoose.server(server);

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('auth router', () => {
  Object.keys(users).forEach(type => {
    describe(`${type} users`, () => {
      let id;
      let token;
      let resultsToken;
      console.log(users[type]);
      it('can create user', () => {
        return mockRequest.post('/signup')
          .send(users[type])
          .then(results => {
            console.log(results);
          });
      });
    });
  });
});