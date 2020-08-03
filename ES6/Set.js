// const s = new Set([1, 2, 1, 2, 5, 5, 1, 4, 1, 3, 1, 2]);
// console.log(s);

// const s = new Set([1, 2, 3, 1, 2, 3, 1]);
// console.log(s);
//
// console.log(s.size);
// s.add('j');
// console.log(s);
// console.log(s.has('j'));

let s = new Set(['a', 'b', 'c', 'b', 'c']);

// console.log(s);
// console.log(s.keys());
// console.log(s.entries());

for(let a of s.values()){
    console.log(a);
}