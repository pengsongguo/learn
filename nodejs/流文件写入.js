const fs=require('fs')

let ws=fs.createWriteStream('流文件写入.txt')
ws.once('open',()=>{
    console.log('流开启写入');
})
ws.once('close',()=>{
    console.log('流关-闭写入');
})
ws.write('写入1，\r')
ws.write('写入1，\r')

ws.end()