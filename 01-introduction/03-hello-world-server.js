#!/usr/bin/node
const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
  res.end('helloWorld');
}).lesten(8080);
