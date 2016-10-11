var express = require('express');
var router = express.Router();
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

client.query('select * from viko',function(err,results,fields)
{
    if(err)
    {
        console.log(err);
    }
});

module.exports = router;