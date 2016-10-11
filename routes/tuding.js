var express = require('express');
var router = express.Router();
var http = require('http');
/* GET users listing. */

router.get('/', function (req, res, next) {
  var str = req.query.str;
  var userid = req.query.userid;
  var key = "05b14814e3888bc141cbc066dd577768";
  var json = {};
  json.key = key;
  json.info = str;
  json.userid = userid;
  json = JSON.stringify(json);
  var postheaders = 
  {
    'Content-Type': 'application/json; charset=UTF-8',
    'Content-Length': Buffer.byteLength(json, 'utf8')
  };
  var option = 
  {
    host: 'www.tuling123.com',
    port: 80,
    path: '/openapi/api',
    method: 'POST',
  };

  var reqPost = http.request(option, function (resPost) {
    resPost.on('data', function (d) {
     
      res.send(d);
    });
  });
  reqPost.write(json);
  reqPost.end();
  reqPost.on('error', function (e) {
    console.error(e);
  });
});

module.exports = router;
