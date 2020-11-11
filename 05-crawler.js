#!/usr/bin/env node
const http    = require('https'),
       cheerio = require('cheerio'),
      log     = console.log,
      print   = require('util').debuglog('dev'),
      addr    = 'https://maoyan.com/films?showType=3',
      baseURL = 'https://maoyan.com';
  addr.headers= { 'User-Agent': 'spider.js'  };

http.get(addr, (res) => {
   let result = '';
  res.on('data', (data) => {
       result += data.toString('utf8');
                            });
  res.on('end', () => {
      print(result);
    let $ = cheerio.load(result);
    $('body').find('.channel-detail movie-item-title').each(function(){
        print($(this).html());
      let cName = $(this>a).text(),
      movieId = $(this>a).attr('data-val'),
     movieId2 = $(this)>a.attr('data-val'),
       movieRange =$((this).next()>i).text;
      if(cName === '') return;
      log('电影名称：', cName);     
      log(movieId);
      log(movieId2);
      log(movieRange);
       log('');
    });
   
               });
  










})
