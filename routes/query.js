var express = require('express');
var router = express.Router();

var redis = require('redis'),
  RDS_PORT = 6379,		//端口号
  RDS_HOST = '10.10.3.52',	//服务器IP	
  RDS_OPTS = {auth_pass:'test123'},//设置项
  client = redis.createClient(RDS_PORT,RDS_HOST,RDS_OPTS);

client.on('ready',function(res){
  console.log('ready');	
});
client.set("myname", "vikkko");

client.hdel("test", "name", "viko");

client.hdel("test", "sex", "boy");

client.hkeys("test", function (err, replies) {
    client.get("myname", redis.print);
    client.hget("test", "name", redis.print);
    client.hget("test", "sex", redis.print);
    client.quit();
});

module.exports = router;