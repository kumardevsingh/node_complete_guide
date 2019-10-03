const path = require('path');

const express = require('express');

const procustsController =  require('../controllers/products'); 

const router = express.Router();

router.get('/', procustsController.getProduct);

module.exports = router;
