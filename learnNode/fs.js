// 文件写入
// 1、创建文件
// 2、写入内容
// 3、关闭

const fs = require('fs');

let fd = fs.openSync('helloFS.txt', 'w')
console.log(fd);

fs.writeSync(fd, '123',2)

// fs.closeSync(fd)