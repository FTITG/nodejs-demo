#!/usr/bin/env node

const fs = require('fs'),
      dirName = process.argv[2];

fs.rmdirSync(dirName);
