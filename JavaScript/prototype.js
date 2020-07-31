//原型链
//每个对象都有自己的原型对象，同时，原型对象又是对象，也有自己的原型，一层一层往上追述，最终可以到 Object.prototype的原型为null

function Person() {
    this.lei = '人类';
}

var p1 = new Person();
console.log(p1);

console.log(p1 instanceof Person);