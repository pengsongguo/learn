// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr);
// console.log(...arr);

// function f(a, b, c) {
//     console.log(a + b + c);
// }
// f(2,3,4);
//
// f(...[4,5,9]);

// let arr = [1, 2, 3];
// let b = [...arr];
// console.log(arr === b);

// let a = [1, 2];
// let b = a;
// console.log(a === b);

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c = [...a, ...b];
// console.log(c);

// console.log([...'jksdfaljkdf']);

// let arrayLike = {
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     length: 3
// };
// console.log(Array.prototype.slice.call(arrayLike));
// console.log(Array.from(arrayLike));

// console.log(Array.of(3, 4, 'd'));

let arr = ['d', 'sf', 'r', 'b', 'y', 'e'];
console.log(arr.includes('d'));
console.log(arr.findIndex((v) => v === 'b'));
