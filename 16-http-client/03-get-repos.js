#!/usr/bin/env node
const http = require('https'),
       log = console.log,
      url = require('url'),
      name = process.argv[2];
let addr = `http://api.github.com/search/repositories?q=user:${name}`;
user:${name}
opt={};
opt.headers = {
  'user-agent':'curl/7.29.0'
};
log(opt);
process.exit
http.get(addr,opt,(res=>{
  log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);

log(res.headers);
let data = '';


res.on('data',(chunck)=> +=chunck);
res.on('end',()=>{
  let rs = [],num = 1;

data.forEach((items)=>
  rs.push({
    name:item.name,
  }));
log.table(rs);
});

