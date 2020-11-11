#!/usr/bin/env node
console.log(`I'm child process:${process.pid}`);
process.on('message',(data)=>{
  console.log(`Father:${data}`);
});
process.send(process.pid);

