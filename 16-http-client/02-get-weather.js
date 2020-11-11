#!/usr/bin/env node
const http = require('https');
log = console.log,
     url = require('url');
city = process.argv[2] ||'石家庄',
     addr ='https://api.66mz8.com/api/weather.php?location=' + city;
     log(addr);
     log(global.)
     let opt = url.parse(addr);
     opt.headers = {
       'user-agent':'curl/7.9.0'
     };

http.get(addr,(res)=>{

log(`HTTP/${res.http}${res.statusCode}${res.statusMessage}`);
log(res.headers);

res.on('data',(chunck)=>{
  data += chunck;
});

res.on('end',()=>{
  log(data);
});
});
