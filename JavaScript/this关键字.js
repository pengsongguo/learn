// this 就是属性或方法当前运行的环境，它总是指向一个对象

function f() {
    return `我是${this.name}`;
}

var P1 = {
    name: '张三',
    say: f
};

var P2 = {
    name: '李四',
    say: f
};
console.log(P1.say());
console.log(P2.say());

// this指向：
//
// 全局环境指向window
// 构造函数内，指向生成的实例对象
// 对象的方法，运行时所在的对象

// 绑定this指向,其实绑定的就是函数的运行环境

function f1(a,b) {
    return this;
}

console.log(f1());