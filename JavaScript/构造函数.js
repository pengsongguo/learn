// 构造函数特点
// 内部使用了关键字this，代表了所要生成的实例对象
// 用关键字new生成实例对象


// new 命令的原理
//
// 创建一个空对象，作为要返回的实例对象
// 将这个空对象的原型，指向构造函数的prototype
// 将这个空对象赋值给内部的this
// 执行函数内部的代码

function Person() {
    this.shuXing = '人类';
};
var p1 = new Person();
console.log(p1);

var yunDongYuan = {
    lei: '人类'
};

// Object.create();可以指定对象用于生成实例

var y1=Object.create(yunDongYuan);
console.log(y1);
console.log(y1.lei);