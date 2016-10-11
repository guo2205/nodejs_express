var express = require('express');
var router = express.Router();
var http = require('http');
var mysql = require('mysql');

var client = mysql.createConnection({
host:'10.10.3.52',
database:'test',
user:'root',
password:'mypassword',
});

client.connect(function(error,results)
{
    if(error)
    {
        console.log('connection error:'+error.message);
        return;
    }  
    console.log('Connect to MySQL');  
});

router.get('/', function (req, res, next) {

client.query('select * from viko',function(err,results,fields)
{
    if(err)
    {
        console.log(err);
    }
var fdata = new Array();

  var postheaders = 
  {
    'Content-Type': 'application/json; charset=Unicode',
    'Content-Length': Buffer.byteLength(fdata, 'Unicode')
  };

for(var i in results)
{
    data = {
    name: results[i].name,
    image:results[i].Image,
    apk: results[i].apk,
    };
    //var data = JSON.stringify(data);

    fdata.push(data);
}
  res.send(fdata);

});

});

module.exports = router;