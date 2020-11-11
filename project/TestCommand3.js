#!usr/bin/env node
 var fs = require('fs')
 function geFileList(path)
{
     var filesList = [];
        readFile(path,filesList);
           return filesList;

}

function readFile(path,filesList)
{
     files = fs.readdirSync(path);
        files.forEach(walk);
           function walk(file)
                {  
                        states = fs.statSync(path+'/'+file);         
                        if(states.isDirectory())
                        {
                                      readFile(path+'/'+file,filesList);
                                              
                        }
                        else
                        {   
                                   
                                    var obj = new Object();
                                    obj.size = states.size;
                                    obj.name = file;
                                    obj.path = path+'/'+file; 
                                    filesList.push(obj);
                                }     
                    }

}

function writeFile(fileName,data)
{  
  fs.writeFile(fileName,data,'utf-8',complete);
  function complete()
  {
         console.log("文件生成成功");
           
  } 
}


var filesList = geFileList("./sysFile");
filesList.sort(sortHandler);
function sortHandler(a,b)
{
    if(a.size > b.size)
         return -1;
      else if(a.size < b.size) return 1
           return 0;

}
var str='';
for(var i=0;i<filesList.length;i++)
{
     var item = filesList[i];
        var desc ="文件名:"+item.name + "  "
                  +"大小:"+(item.size/1024).toFixed(2) +"/kb"+"  "
                          +"路径:"+item.path;
           str+=desc +"\n"

}
