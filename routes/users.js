const firebaseApp = require('firebase/app');
const firebaseDatabase = require('firebase/database');
const firebasAdmin = require('firebase-admin');
const firebaseConfig = require('../Config/config.js');

let fApp = firebaseApp.initializeApp(firebaseConfig);
let fDB = firebaseDatabase.getDatabase();

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
  firebaseDatabase.set(firebaseDatabase.ref(fDB, 'Godegi'), { like : "cat" }, function(e) {
    if (e) alert("error");
    else res.send("success!");
  });
});

module.exports = router;
