#!/usr/bin/env node

const cp = require('child_process'),
      argv = process.argv;

let cmd = '',
    arg = [];

if(argv.length ===2){
  cmd = 'cat';
  arg.push('01-exec-file.js');
}else{
  cmd = argv[2];
  arg = argv.slice(3,argv.length);
}
cp.execFile(cmd,arg,(err,stdout)=>{
  if(err){
    console.log(err.message);
    process.exit(1);
  }
  console.log(stdout);
});
