#usr/bin/env node

const http = require('http'),
      log = console.log;

http.createServer(req,res)=>{
  logRequest(req);
  if(req.url.slice)
    switch
}

function logRequest(req){
  log(`${req.method } ${req.url} HTTP`)
}
