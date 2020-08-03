// let a = 'A';
// let obj = {b: a};
// console.log(obj);

// let obj = {
//     a: "A",
//     b: "B",
//     guo: "郭"
// };
//
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
// console.log(Object.keys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'guo'));
// console.log(Reflect.ownKeys(obj));

// const proto = {
//     foo: 'hello'
// };
//
// const obj = {
//     foo: 'world',
//     find() {
//         return super.foo;
//     }
// };
//
// Object.setPrototypeOf(obj, proto);
// console.log(obj.find());

// console.log(Object.is('foo', 'foo'));
// console.log(Object.is({}, {}));

// let o1 = {a: 'A'};
// let o2 = o1;
//
// console.log(Object.is(o1, o2));

// console.log(Object.is(NaN, NaN));
// console.log(Object.is(+0, -0));

// let o1 = {g: '郭'};
// let o2 = {p: '鹏', s: '松'};
// let o3 = {p: '平', y: '源'};
//
// console.log(o1);
// console.log(o2);
// console.log(Object.assign(o1, o2));
// let o4 = Object.assign(o1, o2, o3);
//
// o4.g = 'G';
// console.log(o1.g);
// console.log(o1);

// class Point {
//     constructor(x, y) {
//         Object.assign(this, x, y);
//     }
// }
//
// let p = new Point({a: 'A'}, {b: "B"});
// console.log(p);

// let obj = {a: 'A'};
// console.log(Object.getOwnPropertyDescriptors(obj));

// let Person = function () {
//     this.age = 19;
// };
//
// let p1 = new Person();
// console.log(p1);
// console.log(p1.constructor);
// console.log(Person.prototype);
//
// console.log(Object.getPrototypeOf(p1));
// console.log(p1__proto__);

let obj = {
    a: 'A',
    b: 'B',
    c: 'C'
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));