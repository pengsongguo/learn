const fs = require('fs');

// fs.readFile('./登鹳雀楼.md', (err, data) => {
//     if (err) {
//         console.log('登鹳雀楼 - 读取失败');
//     } else {
//         console.log(data.toString());
//         fs.readFile('./相思.txt', (err, data) => {
//             if (err) {
//                 console.log('相思 - 读取失败');
//             } else {
//                 console.log(data.toString());
//                 fs.readFile('./静夜思.txt', (err, data) => {
//                     if (err) {
//                         console.log('静夜思 - 读取失败');
//                     } else {
//                         console.log(data.toString());
//                     }
//                 })
//             }
//         })
//     }
// })

function dengGuanQueLou() {
    return new Promise((resolve, reject) => {
        fs.readFile('./登鹳雀楼.md', (err, data) => {
            if (err) {
                reject('登鹳雀楼 - 读取失败')
            } else {
                resolve(data.toString())
            }
        })
    })
}

function xiangSi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./相思.txt', (err, data) => {
            if (err) {
                reject('相思 - 读取失败')
            } else {
                resolve(data.toString())
            }
        })
    })
}

function jingYeSi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./静夜思.txt', (err, data) => {
            if (err) {
                reject('静夜思 - 读取失败')
            } else {
                resolve(data.toString())
            }
        })
    })
}


async function main() {
    let a = await dengGuanQueLou()
    let b = await xiangSi()
    let c = await jingYeSi()
    console.log(a + ' \n ' + b + ' \n ' + c);
}

main()
