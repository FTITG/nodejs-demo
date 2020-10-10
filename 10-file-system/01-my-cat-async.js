#!usr/bin/env node

const fs = require('fs'),
      fileName = process.argv[2],
      log = console.log;
fs.readFile(fileName,(err,data)=> {
  log(data.toString('uft8'));
    });
log('01-my-cat-async');
