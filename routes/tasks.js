var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Main index API');
});

router.get('/tasks', (req, res, next) => {
  res.send('Task API');
});


router.get('/products/detail', (req, res, next) => {
  res.send('Product Detail API');
});


router.get('/products', (req, res, next) => {
  res.send('product API');
});

module.exports = router;
