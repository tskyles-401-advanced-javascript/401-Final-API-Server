'use strict';

const express = require('express');
const router = express.Router();

const Roles = require('../models/roles');
const capabilities = require('../models/roles-capabilities');

router.post('/roles', (req, res, next) => {
  let roleArr = [];
  Object.keys(capabilities).map(role => {
    let rolesRecord = new Roles({type: role, capabilities: capabilities[role]});
    roleArr.push(rolesRecord.save());
  });
  Promise.all(roleArr);
  res.send('roles saved');
});

module.exports = router;