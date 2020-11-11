#!/usr/bin/env node
const http= require('http');
log = console.log;
http = createServer((req,res)=>{
  log(`${req.method}${req.url}HTTP/${req.httpVersion}`);
  log(req.headers);
  req.httpVersionpe(process.stdout);
  res.end('OK');
}),listen(8080);
