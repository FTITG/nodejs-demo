#!usr/bin/env node

const log = console.log,
      usr = process.argv[2];
      pwd = process.argv[3];
      if(process.argv.length !==4){
        console.error('命令行格式:cmd usename password');
        process.exit(1);
      }
      log('user name: %s\npassword:%s',usr,pwd);
      const buf = new Buffer(usr + ':' +pwd);
      log('Base64:',buf.toString('Base64'));
