#!/usr/bin/env node

const Koa = require('koa');
const app = new Koa();
app.use((ctx,next)=>{
  //request 
  //make response
  
  ctx.body="hello Koa"


});
app.listen(8080);
console.log('hello world');

