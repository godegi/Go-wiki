// Initialize Firebase Database
import {initializeApp, getApps, getApp} from "firebase/app";
import {getDatabase, ref, query, orderByChild, equalTo, get, push, update} from "firebase/database";
import fconfig from "../Config/config.js";
(getApps().length === 0) ? initializeApp(fconfig) : getApp();
const db = getDatabase();

import express from "express";
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
  const updates = {};
  updates["Godegi/test/test-key"] = "test-value";

  update(ref(db), updates).then(() => {
    console.log("success!!");
    res.send("database update success!!");
  }).catch((error) => {
    console.log(error);
    res.send("database update error!!");
  });
});

export default router;
