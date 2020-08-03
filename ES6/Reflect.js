var obj = {
    a: 'A',
    b: 'B'
};

// console.log(obj);

// console.log(Reflect.has(obj, 'a'));
Reflect.set(obj,'c','C');
// console.log(obj);
console.log(Reflect.get(obj, 'c'));