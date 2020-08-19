const arr1 = ['a', 'b', 'c', 'd'];
// console.log(arr1);
// console.log(...arr1);
const arr2 = ['e', 'f', 'g'];
const arr3 = [...arr1, ...arr2];
// console.log(arr3);

for (let v of arr3.entries()) {
    console.log(v);
}

let likeArr = {0: 'a', 1: 'b', length: 2};
// console.log(Reflect.toString.call('a'));
// console.log(Array.from(likeArr));
// console.log(Reflect.toString.call(Array.from(likeArr)));

console.log(Array.of('b', 'e'));

console.log(arr3.find((v) => v === 'e'));
console.log(arr3.findIndex((v) => v === 'e'));
console.log(arr3.includes('f'));