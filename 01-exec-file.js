#!/usr/bin/env node
const cp = require('child_process');
      cmd = process.argv[2];
      args = process.argv.slice(3,process.argv.length);
cp.execFile('cat',['01-exec-file.js'],(err,stdout)=>
    {
      console.log(stdout.toString('uft8'));


});
