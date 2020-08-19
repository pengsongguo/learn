// const str = 'a';
// const obj = {str};
// console.log(obj);

// const obj = {
//     a() {
//         console.log('a');
//     }
// };
// console.log(obj.a);

// const obj = {
//     a: 'A',
//     b: 'B'
// };

// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'a'));

// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Reflect.ownKeys(obj));

// this总是指向函数所在的当前对象 super指向当前对象的原型对象

// const proto = {xing: '郭'};
//
// const obj = {
//     a: 'A',
//     b: 'B',
//     xing() {
//         return super.xing;
//     }
// };
// console.log(obj.xing());
// Object.setPrototypeOf(obj, proto);
// console.log(obj.xing());

// let obj = {
//     a: {
//         b: {
//             c: {
//                 d: 'DDD'
//             }
//         }
//     }
// };
// const d = obj?.a?.b?.c?.d || 'D';
// console.log(d);

// let [a, b] = [1, '1'];
// console.log(a);
// console.log(b);
// console.log(a == b);
// console.log(Object.is(a, b));

// let a = NaN;
// let b = NaN;
// console.log(a == b);
// console.log(Object.is(a, b));

let obj1 = {a: 'A', b: 'B', e: 'E'};
let obj2 = {c: 'C', d: 'D'};
let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

// let o4 = Object.create(null);
// console.log(o4.toString());

// console.log(Object.getOwnPropertyDescriptors(obj3));
// console.log(obj3.__proto__);

// for (let v of obj3) {
//     console.log(v);
// }

// for (let k of Object.values(obj3)) {
//     console.log(k);
// }

for (let [k, v] of Object.entries(obj3)) {
    console.log(k, v);
}