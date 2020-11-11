#!/usr/bin/env node

const Koa = require('koa');
     logger = require(./middleware/logger.js')







const app = new Koa();
log = consle.log;
//M-logger
app.use((ctx,next)=>{
  //parse req 
  log(`${ctx.method} ${ctx.path}`);
  next();
  //make res
  
});
app.use((ctx,next)=>{//M-hello
  //request 
  //make response
  log(`${ctx.method} ${ctx.path}`);
   next();
   ctx.body="hello Koa"
  

});
app.use((ctx,next)=>{
  const atart = Date.now();
  next();
  let cost = ctx.response.get('cost');
  const end = Date.now();
  
});
app.listen(8080);
console.log('hello world');
