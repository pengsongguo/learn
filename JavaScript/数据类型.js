//javascript 有6种数据类型

// string,number,boolean,object,undefined,unll

//判断数据类型

var a = 'a';
var aa = new String('aaa');
var b = 123;
var c = true;
var d = undefined;
var e = null;
var f = {};
var g = ['2'];

var s = new Set();
var m = new Map();
var sym = Symbol('123');

console.log(typeof s);
console.log(typeof m);
console.log(typeof sym);

// console.log(typeof a);
// console.log(typeof g);

// instanceof 不精准，比较笼统
// console.log(a instanceof String);
// console.log(b instanceof Number);
// console.log(aa instanceof String);
// console.log(g instanceof Object);

// console.log(Object.prototype.toString.call(a));
// console.log(Object.prototype.toString.call(b));
// console.log(Object.prototype.toString.call(g));

console.log(Object.prototype.toString.call(s));
console.log(Object.prototype.toString.call(m));
console.log(Object.prototype.toString.call(sym));

