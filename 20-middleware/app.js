#!/usr/bin/env node

const Koa = require('koa');
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
  
   ctx.body="hello Koa"


});
app.listen(8080);
console.log('hello world');

