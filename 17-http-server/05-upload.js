#!/usr/bin/env node

const http = require('http');

http.createServer((req, res) =>{
   

    if(req.url !== '/') {
      res.statusCode = 404;
      res.setHeader('Content-Type': 'text/html');

              'Content-Lenghth': Buffer.byteLength(html)
            
      });
          res.end(html);
            
    } else {
          res.statusCode = 404;
              res.setHeader('Content-Type', 'text/plain');
                  res.end('Resource not found!');
                    
    }

}).listen(8080);

