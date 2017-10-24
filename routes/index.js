var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UC Dashboard', subtitle:'An IOT Showcase' });
});

module.exports = router;
