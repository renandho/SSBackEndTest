
// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Product = require('../models/item');
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/items');

// Return router
module.exports = router;
