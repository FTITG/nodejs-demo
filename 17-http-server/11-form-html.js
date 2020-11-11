#!/usr/bin/env node

const http = require('http'),
      fs = require('fs'),
    qs = require('querystring');
let items = ['eat','sleep'];
function genPage(){
  let html=fs.readFileSync('./template.html');
  html.replace('*',items.map(i=>'<li>'+i+'</li>').join)
    eturn html
}

http.createServer((req, res) =>{ 
    if(req.url !== '/') {
          res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Not Found!</h1>');
        return
      }
    let data = '';
    req.on('data',chunk =>data += chunk);
    req.on('end',()=>{
      let item = qs.parse(data).item;
      if(item !=='' && typeof item !=='undefined') item.push(item);
      res.writeHead(200,{
        'Content-Type':'text.html',
        'Content-Length':Buffer.byteLength(genPage())
      });
      res.end(genPage());
    })
    }).listen(8080);
