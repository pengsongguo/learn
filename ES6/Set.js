let s1 = new Set(['a', 'b', 'a', 'c', 'd', 'b']);
console.log(s1);
// console.log(Reflect.toString.call(s1));

// for(let v of s1.entries()){
//     console.log(v);
// }

console.log(s1.size);
s1.add('g');
console.log(s1);
s1.delete('a');
console.log(s1);
console.log(s1.has('b'));
// s1.clear();
// console.log(s1);

s1.forEach((v, i) => {
    console.log(v);
    console.log(i);
});

console.log(Array.from(s1));

let ws1 = new WeakSet();
let o1 = {a: 'a'};
ws1.add(o1);
console.log(ws1);
console.log(ws1.has(o1));