#!/usr/bin/env node


const http    = require('https'),
            cheerio = require('cheerio'),
                  log     = console.log,
                        print   = require('util').debuglog('dev'),
                              addr    = './经典影片_电影大全_经典高清电影-猫眼电影.html';
      //baseURL = 'https://maoyan.com';
      //      addr.headers= { 'User-Agent': 'spider.js'  };
      //
      //      http.get(addr, (res) => {
      //        let result = '';
      //
      //          res.on('data', (data) => {
      //              result += data.toString('utf8');
      //                });
      //
      //                  res.on('end', () => {
      //                      print(result);
      //
      //                          let $ = cheerio.load(result);
      //                              $('body').find('.channel-detail movie-item-title>a').each(function(){
      //                                    print($(this).html());
      //                                          let cName = $(this).text(),
      //                                                    //cURL  = baseURL + $(this).attr('href');
      //                                                              cURL = $(this).attr('href');
      //
      //                                                                    if(cName === '') return;
      //
      //                                                                          log('电影名称：', cName);
      //                                                                                log('链接：', cURL.trim());
      //                                                                                      log('');
      //                                                                                          });
      //                                                                                            });
      //                                                                                            });
      //
      //                              })
      //                  })
      //          })
      //      })
