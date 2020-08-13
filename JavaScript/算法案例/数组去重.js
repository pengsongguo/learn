// 数组去重
let arr = ['a', 'b', 'c', 'd', 'c', 'b', 'a', 'e', 'd', 'a', 'b', 'w', 'c', 'e'];

// 方法一

// 将数组作为参数，创建 set，利用 set 的成员不重复特性
let s = new Set(arr);
// 利用数组展开运算符，将 set 转化为数组
let r = [...s];
// console.log(r);   [ 'a', 'b', 'c', 'd', 'e', 'w' ]

// 方法二

// 将数组作为参数，创建 set，利用 set 的成员不重复特性
let s2 = new Set(arr);
// 利用数组的 Array.from，将 set 转化为数组
let r2 = Array.from(s2);
// console.log(r2);   [ 'a', 'b', 'c', 'd', 'e', 'w' ]
