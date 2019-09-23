const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/admin/shop', (req, res, next) => {
  console.log(adminData.products);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  res.render('shop', {layout: false, prods: products, pageTitle: 'Shop', path: '/admin/shop', hasProduct: products.length > 0 });
});

module.exports = router;
