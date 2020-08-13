// 获取一个给定字符串中出现次数最多的字符及其出现次数

// 随意陈列一组字符串数据
let str = 'cawerfvcxsedfcxzswerfcxswerfcxsd';

// 初始化对象，用于存储字符串的元素，初始化出现次数
let strObj = {};
for (let v of str) {
    strObj[v] = 0;
}
// console.log(strObj);  { c: 0, a: 0, w: 0, e: 0, r: 0, f: 0, v: 0, x: 0, s: 0, d: 0, z: 0 }

// 双循环字符串和字符串对象，统计出每个字符串出现次数
for (let o in strObj) {
    for (let v of str) {
        //如果字符对象中的某一项元素，等同于字符串中的元素，出现次数加一
        if (o === v) {
            strObj[o] += 1;
        }
    }
}
// console.log(strObj);  { c: 5, a: 1, w: 3, e: 4, r: 3, f: 4, v: 1, x: 4, s: 4, d: 2, z: 1 }

// 将得到的字符串数据进行比对，找出里面出现最多的字符串元素

let maxStr = '';
let maxStrN = 0;

for (let o in strObj) {
    if (strObj[o] > maxStrN) {
        maxStr = o;
        maxStrN = strObj[o];
    }
}

console.log(maxStr);  // c
console.log(maxStrN);  // 5

// 封装为工具函数

function maxStrFn(str='') {
    if(str){
        let strObj = {};
        for (let v of str) {
            strObj[v] = 0;
        }
        for (let o in strObj) {
            for (let v of str) {
                //如果字符对象中的某一项元素，等同于字符串中的元素，出现次数加一
                if (o === v) {
                    strObj[o] += 1;
                }
            }
        }
        let maxStr = '';
        let maxStrN = 0;

        for (let o in strObj) {
            if (strObj[o] > maxStrN) {
                maxStr = o;
                maxStrN = strObj[o];
            }
        }
        return {maxStr,maxStrN}
    }
}

// console.log(maxStrFn('skjlfjs'));  //{ maxStr: 's', maxStrN: 2 }