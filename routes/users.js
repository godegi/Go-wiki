var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var who_uid = req.param('uid');
  var who_name = req.param('name');
  var who_description = req.param('description');
  console.log(who_description);
  res.render('users', {
    name : who_name,
    description : who_description
  })
});

module.exports = router;
