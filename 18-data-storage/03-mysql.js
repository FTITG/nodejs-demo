#!/usr/bin/env node

const mysql = require('mysql2/promise'),
      log = console.log;

let con = mysql.createPool({
  host:'127.0.0.1',
    user:'root',
    password:'test'
});

async function getAreas(){
  const sql = await 
}
