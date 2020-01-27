'use strict';

const express = require('express');
const router = express.Router();

const categories = require('../models/categories/categoriesModel');
const products = require('../models/products/productsModel');
/**
 * sets model to inputted route or returns invalid model otherwise
 * @function getModel
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns model
 */
function getModel(req, res, next){
  let model = req.params.model;
  switch(model){
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
  }
}

router.param('model', getModel);

router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);
router.get('/api/v1/:model/:id', handleGetOne);
router.put('/api/v1/:model/:id', handlePut);
router.delete('/api/v1/:model/:id', handleDelete);
/**
 * get all documents in this route
 * @function handleGetAll
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetAll(req, res, next){
  req.model.get()
    .then(records => {
      const output = {
        count: records.length,
        results: records,
      };
      res.status(200).json(output);
    })
    .catch(next);
}
/**
 * record to get one record
 * @function handleGetOne
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetOne(req, res, next){
  let id = req.params.id;
  req.model.get(id)
    .then(result => res.status(200).json(result))
    .catch(next);
}
/**
 * route to create record
 * @function handlePost
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handlePost(req, res, next){
  req.model.post(req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}
/**
 * route to update record
 * @function handlePut
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handlePut(req, res, next){
  let id = req.params.id;
  req.model.put(id, req.body)
    .then(result => res.status(200).json(result))
    .catch(next);
}
/**
 * route to delete record
 * @function handleDelete
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleDelete(req, res, next){
  let id = req.params.id;
  req.model.delete(id)
    .then(result => res.status(200).json(result))
    .catch(next);
}
/**
 * @module router
 */
module.exports = router;