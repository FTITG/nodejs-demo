#!/usr/bin/env node
const cp = require('child_process');

console.log(`I'm father process:${process.pid}`);
process.on('message',(data)=>{
  console.log(`I have son:${data}`);
});
let son = cp.fork('./11-ipc-child.js'),
    dau = cp.fork('./11-ipc-child.js');

setTimeout(()=>{
  son.send('Good Good Study');
},2000);
setTimeout(()=>{
  dau.send('Day Day Up');
},3000);
setTimeout(()=>{
  son.kill('SIGINT');
  dau.kill('SIGINT');
},5000);
