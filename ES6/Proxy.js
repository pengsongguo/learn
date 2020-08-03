// var proxy = new Proxy({}, {
//     get: function (target, propertyKey) {
//         return 33;
//     }
// });
// proxy.name = '张三';
// console.log(proxy);
// console.log(proxy.name);

// let target = {};
// let handler = {};
// let proxy = new Proxy(target, handler);
//
// proxy.name = '郭';
//
// console.log(proxy.name);
// console.log(proxy);

// var target = {};
// var handler = {};
// var proxy = new Proxy(target, handler);

// target.a = 1;
// console.log(proxy);
// proxy.a = 2;
// console.log(target);

// var obj = {proxy: new Proxy(target, handler)};
// console.log(obj);

// var person = {
//     name: '张总'
// };
//
// var proxy = new Proxy(person, {
//     get: function (target, propertyKey) {
//         if (propertyKey in target) {
//             return target[propertyKey];
//         } else {
//             throw new ReferenceError(`属性名${propertyKey}不存在！`)
//         }
//     }
// });
//
// console.log(proxy.name);
// console.log(proxy.age);

let xianZhi = {
    set: function (obj, key, value) {
        if (key === 'age') {
            if (!Number.isInteger(value)) {
                throw new ReferenceError('年龄必须为整数');
            }
            if (value > 100) {
                throw new ReferenceError('年龄不能大于100')
            }
            obj[key] = value;
        }
    }
};

// var p1 = {age: 12.3};
// var person1 = new Proxy(p1, xianZhi);
// console.log(person1.age);
var person = new Proxy({}, xianZhi);
// person.age = 100;
// console.log(person.age);
// person.age = 'dsf';
// console.log(person.age);
person.age = 123;
console.log(person.age);