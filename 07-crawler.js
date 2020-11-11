#!/usr/bin/env node
let fs = require('fs');
let https= require('https'),
    http = require('http');
let html = fs.readFileSync('./moviein.html').toString('utf8');
const cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('dev'),
      addr    = 'https://maoyan.com/films?showType=3';
  


 let $ = cheerio.load(html);
let datas = [];
$('body').find('.movie-item-hover').each(function(){
  let cName = $(this).find('img').attr('alt'),
      movieId = $(this).find('a').attr('data-val'),
      movierange = $(this).find('i').text()
  if(cName === '') return;
      
  //let  datas=[{"movieId":movieId, "movieName": cName,"movieRange":movierange}];
  datas.push({movieId:`${movieId}`});
  log(JSON.stringify(datas));
  log('');
});
   
let html1 = fs.readFileSync('./index.html').toString('utf8');
      http.createServer((req, res) => {
        if (req.url === '/') {
          res.writeHead(200, {
                         'Content-Type': 'text/html',
                        'Content-Length': 'Buffer.byteLengt(html1)'
                    
          });
                  res.end(html1);
                      
        } else if (req.url === '/getlist') {
                  res.end(JSON.stringify(datas));
                      
        } else {
                  res.end('not api request and not page request!');
                      
        }

      }).listen(80);

   
              











