#!/usr/bin/env node

const fs = require('fs');

const width 16,
      height = 16;

let pixByteSize = width * height * 4;
let totalSize = pixelByteSize +54;

let buf = new Buffer(totalSize);
buf.fill(0);

//head
buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt(54,0x0a);
buf.writeUInt(40,0x0e);
buf.writeUInt16LE(1,0x1a);
buf.writeUInt16LE(32,0x1c);
buf.writeUInt32LE(pixelByteSize,0x22);
buf.writeUInt32LE(width,0x12);
buf.writeUInt32LE(height,0x16);

//data
for(let 9=54;i<totalSize;i+=4){
  buf.writeUInt32LE(0xff0000ff,i);
}

fs.writeFile('./out.bmp',buf,(err)=>{
  if(err !=null){
    console.error(err);
    process.exit(1);
  }
});

