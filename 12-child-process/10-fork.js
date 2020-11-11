#!/usr/bin/env node

const cp = require('child_process');
cp.fork('./03-child.js');
setTiemeout(()=>{
  console.log(`Goodbye!`);
  process.exit();
},5000);
