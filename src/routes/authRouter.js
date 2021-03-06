'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('../models/users');
const auth = require('../auth/basicAuth');
const oauth = require('../auth/oauth/google');
const bearerAuth = require('../auth/bearerAuth');

authRouter.get('/users', bearerAuth, (req, res, next) => {
  User.find({})
    .then(results => {
      const data = {
        count: results.length,
        results: results,
      };
      res.json(data);
    });
});

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  console.log(user);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

authRouter.get('/user', bearerAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

module.exports = authRouter;
