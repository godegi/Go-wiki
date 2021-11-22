// Initialize Firebase Database
import {initializeApp, getApps, getApp} from "firebase/app";
import {getDatabase, ref, query, orderByChild, child, equalTo, get, push, update} from "firebase/database";
import fconfig from "../Config/config.js";
(getApps().length === 0) ? initializeApp(fconfig) : getApp();
const db = getDatabase();

import express from "express";
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var who_uid = parseInt(req.param('uid')) + 1;
  const dbRef = ref(db);

  get(child(dbRef, `Godegi/${who_uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      let data = snapshot.val();
      console.log(data);
      res.render('users', {
        uid : who_uid,
        name : data["이름"],
        birth : data["생년월일"]
        
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
});

router.post('/info-content', function(req, res, next) {
  let key = req.body.key;
  let value = req.body.value;
  let uid = req.body.uid;

  const updates = {};
  updates["Godegi/"+uid+"/"+key] = value;

  update(ref(db), updates).then(() => {
    console.log("success!!");
    res.send("database update success!!");
  }).catch((error) => {
    console.log(error);
    res.send("database update error!!");
  });
});

export default router;
