#!/usr/bin/env node

const pi = require('./02-export-var'),
      chalk = require('chald'),
      log = console.log,
      green = chalk.greenBright;

log(green('------------------'));
log(green('PI:${pi}'));
log(green('------------------'));

log(module);
