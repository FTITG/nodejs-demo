#!/usr/bin/env node

const http = require('http'),
      log = console.log,
      fs = require('fs');
let items = loadItems();
process.on('SIGINT',()=>{
  saveItems()
});

function loadItems(){
  log('loadItem');
  try{
  let items = fs.readFileSync('./12-items.txt').toString('utf8');

  }
;
return [];
fucntion saveItems(){
  log('saveITems');
  fs.wirteFileSync('./12-items.txt',JSON.stringify(items));
}
http.createServer((req,res)=>{
  showHomePAge
})
