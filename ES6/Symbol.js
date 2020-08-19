// let s = Symbol();
// console.log(s);
// console.log(typeof s);


// let obj = {
//     [Symbol()]: 'a'
// };
// console.log(obj);
// console.log(Reflect.ownKeys(obj));

// let s = Symbol('s');
// let obj = {a: 'A'};
// console.log(obj);
// obj[s] = 'S';
// console.log(obj);
// console.log(obj[s]);
// console.log(Object.keys(obj));
// console.log(Reflect.ownKeys(obj));

let s1 = Symbol.for('s1');
console.log(s1);
let s2 = Symbol.for('s1');
console.log(s1 === s2);

console.log(Symbol.keyFor(s2));