#!/usr/bin/env node
http.createServer((req,res)=>{
  log(req.headers)
})
