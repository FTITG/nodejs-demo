#!/usr/bin/env node
const http    = require('https'),
      fs = require('fs'),
      let path = require('path'),
      cheerio = require(;cheerio),
      log     = console.log,
      print   = require('util').debuglog('dev');
requests()

http.get(addr, (res) => {
    let result  = '';
  res.on('data', (data) => {
      result +=  data.toString('utf8');
                            });
  res.on('end', () => {
      print(resu lt);
    let $ = cheerio.load(result);
    $('body').find('.channel-detail>a').each(function(){
        print($(this).html());
      let cName = $(this).text(),
      movieId = $(this).attr('data-val'),
      if(cName === '') return;
      log('电影名称：', cName);
      log(movieId);
       log(''); 
    });
    $('body').find('i.interger').each(function(){
      print($( this).html());
       const mov ieRange1 = $(this).text();
    $('body').find('i.fraction').each(function(){
      print ($(this).html());
      let movieRange2 = $(this).text();
      log(movieRange2);
                       })
                 } );
               }) 
});









