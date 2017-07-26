var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://jmahapatra:jitu1092021@ds047474.mlab.com:47474/dbmongo');
router.get('/items', (req, res, next) => {
  db.items.find((err, prod) => {
    if(err){
      res.send(err)
    } else {
      res.json(prod)
    }
  })
});
module.exports = router;
