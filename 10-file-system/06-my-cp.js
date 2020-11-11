
const fs = require('fs'),
      src = process.argv[2],
      dst = process.argv[3],

      let srcStream = fs.createReadStream(src),
          dstStream = fs.createWriteStream(dst);

srcstream.pipe(dstStream);

dstStream.on('close',()=>{
  fs.chmodSync(dst,fs.statSync(src).mode);
});
