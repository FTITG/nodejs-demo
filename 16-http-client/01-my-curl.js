#!/usr/bin/env node
const http = require('http');
log = console.log,
    url = require('url'),
    addr  =process.argv[2];

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
