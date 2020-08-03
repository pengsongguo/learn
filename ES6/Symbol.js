// let s1 = Symbol();
// let s2 = Symbol();
//
// console.log(s1);
// console.log(s2);
//
// console.log(s1 === s2);

// let s1 = Symbol('s1');
// let s2 = Symbol('s2');
//
// console.log(s1);
// console.log(s2);
//
// console.log(s1 === s2);

// let obj = {
//     a: 'A',
//     [Symbol()]: 'S'
// };
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Reflect.ownKeys(obj));

// let obj = {
//     a: 'A'
// };
//
// let s = Symbol('s');
// obj[s] = 'SS';
// console.log(obj);
// console.log(Object.getOwnPropertySymbols(obj));

// let s1 = Symbol.for('s');
// // console.log(s);
//
// let s2 = Symbol.for('s');
// // console.log(s1 === s2);
// // let s3 = Symbol.keyFor(s2);
// // console.log(s2 === s3);
//
// console.log(Symbol.keyFor(s1));