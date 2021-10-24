var initializeApp = require('firebase/app');
var fDatabase = require('firebase/database');
var admin = require('firebase-admin');
var fConfig = require('../Config/config.js');

let fApp = initializeApp.initializeApp(fConfig);
let databaseRef = fDatabase.getDatabase();

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

router.get('/test', function(req, res, next) {
  fDatabase.set(fDatabase.ref(databaseRef, 'Godegi'), { like : "cat" }, function(e) {
    if (e) alert("error");
    else res.send("success!");
  });
});

module.exports = router;
