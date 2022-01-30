// 异步 文件写入
//
// 1、其他程序执行
// 2、文件创建
//     2.1、文件写入
//     2.2、写入成功后关闭
// 3、其他程序执行


console.log('程序 1 执行中。。。');

const fs = require('fs')

fs.open('helloFS2.txt', 'w', function (err, fd) {
    if (!err) {
        //创建文件正常，没有出错，可以写入
        fs.write(fd, '这是异步写入的文件内容', function (err, data) {
            if (!err) {

            }
            //写入文件成功，关闭
            fs.close(fd,function (err){
                if(err){

                }else {
                    console.log('关闭文件成功');
                }
            })
        })


    }
})

console.log('程序 2 执行中。。。');