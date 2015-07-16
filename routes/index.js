var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/stylesheet', function(req, res, next) {
  res.render('stylesheet');
});

router.get('/', function(req, res, next) {
  res.redirect('/stylesheet');
});

module.exports = router;
