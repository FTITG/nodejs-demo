#!/usr/bin/env node
const http = require('https');
log = console.log;
cheerio = require('cheerio'),
    addr  ='https://ke.sifou.com/free';
    baseURL = 'https://ke.sifou.com/';

http.get(addr,(res)=>{
  let data='';
  res.on('data',(chunk)=>(data += chunk);
  res.on('end',()=>{
    let $ = cheerio.load(data);
    let courses=$('body').find('h5.card-title>a');
    for(let i=0;i<courses.length;i++){
      log?($(courses[i]).text());
      log(baseURL + $(courses[i]).attr('href'));
      log();
    }
});
