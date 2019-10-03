const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');

const addProductsController = require('../controllers/products');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', addProductsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',addProductsController.postAddProduct);

// exports.routes = router;
// exports.products = products; 

module.exports = router;