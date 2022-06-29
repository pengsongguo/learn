//引入fs模块
const fs=require('fs')

// 创建一个可读流
const rs=fs.createReadStream('./猫和老鼠.mp4');
// 创建一个可写流
const ws=fs.createWriteStream('a.mp4')
// 监听流的开启
rs.once('open',()=>{
    console.log('可读流-开启');
})
rs.once('close',()=>{
    console.log('可读流-关闭');
})

ws.once('open',()=>{
    console.log('可写流-打开');
})
ws.once('close',()=>{
    console.log('可写流-关闭');
    ws.end()
})

rs.on('data',(data)=>{
    // console.log(data.length);
    ws.write(data)
})