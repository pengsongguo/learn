const fs=require('fs')
fs.readFile('./helloFS.txt',(err,data)=>{
    console.log(data.toString());
})