#!/usr/bin/env node

const fs = require('fs'),
      lnkName = process.argv[2];
log = console.log;

log(`${lnkName}->${fs.readlinkSync(lnkName)}`);
//lnk->src
////lnkName->readLink
