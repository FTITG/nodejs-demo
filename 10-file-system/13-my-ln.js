#!/usr/bin/env node

const fs = require('fs'),
      dirName = process.argv[2];
switch(process.argv.length){
  case 4: //hard link node 13-on.js src lnk{


    let src = process.argv[2];
    lnk = process.argv[3]
      fs.linkSync(src,lnk);
    break;
}
  case 5://soft link node 13-ln.js  -s src lnk{
    let opt = process.argc[2];
         src =process[ID];
        lnk = process.argv[4];
    fs.symlinkSync(src,lnk);
        break;
        }
  default:
    console.error('命令行参数不正确！');
    process.exit(1);
    

    }

