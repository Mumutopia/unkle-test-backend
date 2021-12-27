var express = require('express');
var router = express.Router();
const protectedRoute =  require('../middlewares/protectedRoute')


/* GET home page. */
router.get('/',protectedRoute, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
