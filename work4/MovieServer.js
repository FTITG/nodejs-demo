#!/usr/bin/env node
const movieList = require('./data.js');
let https = require('https'),
        http = require('http');

let fs = require('fs');

const cheerio = require('cheerio'),
      log = console.log,
      print = require('util').debuglog('dev');
//let $ = cheerio.load(html);


log(movieList);
http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': 'Buffer.byteLength(movieList)'
    });
    res.end(movieList);


  } else if (req.url === '/getlist') {
    res.end(JSON.stringify(movieList));


  } else {
    res.end('not api request and not page request!');


  }


}).listen(8080);
