var express = require('express');
var router = express.Router();

router.get('/tasks', (req, res, next) => {
  res.send('Task API');
});

module.exports = router;
