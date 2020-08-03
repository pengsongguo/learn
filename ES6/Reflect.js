// var obj = {
//     a: 'A',
//     b: 'B'
// };
//
// // console.log(obj);
//
// // console.log(Reflect.has(obj, 'a'));
// Reflect.set(obj,'c','C');
// // console.log(obj);
// console.log(Reflect.get(obj, 'c'));

let obj={
    a:'A',
    b:'B'
};

console.log(Reflect.get(obj, 'a'));

Reflect.set(obj,'c','C');
console.log(obj);

console.log(Reflect.deleteProperty(obj, 'b'));
console.log(obj);

console.log(Reflect.getPrototypeOf(obj));