#!/usr/bin/env node
const http = require('http'),
      log = console.log,
      url = require('url'),
      addr = 'http://www.sian.com';
let opt =(ad)=> url.parse(addr);
opt.headers = {
  'user-agent':'curl/7.29.0'
};
log(opt(addr));
process.exit();
get();
function get(){
http.get(opt(addr),(res=>{
  log(`HTTP/${res.httpVersion}${res.statusCode}${res.statusMessage}`);


log(res.headers);
log();
if(res.statusCode >= 300&& res.sttusCode <400){
   get(res.headers.location);
}else
  res.pipe(process.stdout);
}
}


res.on('data',(chunck)=> +=chunck);
res.on('end',()=>{
  let rs = [],num = 1;

data.forEach((items)=>
  rs.push({ 
    name:item.name,
  }));
log.table(rs);
});

