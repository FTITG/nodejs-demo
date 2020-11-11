#!/usr/bin/env node

const http = require('http'),
      log=console.log,
    qs = require('querystring');
let items = [];
function genPage(){
  let html=`
  <!DOCTYPE html> 
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <title>Todo List</title>
</head>
<body>
<h1>Todo List</h1>
<form method="POST" action="http://192.168.57.144:8080/">
<input type="text" name="item">
<input type="submit" value="submit"/>
</form>
<ul id="items">
${item.map(i =>'<li>' +i +'</li>').join('\n')}
</ul>
</form>
</body>
</html>`
return html
}

http.createServer((req, res) =>{
   
      let addr = url.parse(req.url)
    if(req.url !== '/') {
          res.statusCode = 404;
        res.setHeader('Content-Type','text/html');
        res.end('<h1>Not Found!</h1>');
        return
      }
    let data = '';
    req.on('data',chunck = =>data += chunck);
  e
    req.on('end',()=>{
     log(data);
      });
      res.end('ok!');
    });
    }).listen(8080);
