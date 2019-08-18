const path = require('path');

const express = require('express');
const router = express.Router();


router.get('/add-product', (req, res, next) => {
    //console.log('in middleware');
    res.sendFile(path.join(__dirname, '../','views', 'add-product.html'));
    //next();
});


router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
    //next();
});

module.exports = router;