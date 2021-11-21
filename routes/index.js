import express from "express";
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var data =  [
    { "name" : '김도희', "description" : "는 바보" }, 
    { "name" : '김정하', "description" : "는 보자기" }, 
    { "name" : '박영선', "description" : "은 기차" }, 
    { "name" : '배하늘', "description" : "은 차돌박이" }, 
    { "name" : '이소정', "description" : "은 이소정" },
    { "name" : '정상은', "description" : "은 정상은" },
    { "name" : '조혜령', "description" : "은 은밀~ㅎ" }] ; /* temporary data which will be replaced with Database references */

  res.render('index', { 
    title: 'Godegi Wiki',
    peopleNameList: data });
});

export default router;
