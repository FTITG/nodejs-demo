#!/usr/bin/node

const log = console.log;
log(`architecture:${process.arch}`);
log(`platform:    ${process.platform}\n`);

log(`process id:  ${process.pid}`);
log(`exePath:     ${process.execPath}\n`);

log(`nodejs version:${process.version}`);
log(`uer id:        ${process.getuid()}`);
log(`group id:      ${process.getgid()}`);
log(`cwd:           ${process.cwd}\n`);

log('env:');
log(process.env);
log(`Host name:     ${process.env.HOSTNAME}`)
