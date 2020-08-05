// function* f() {
//     yield 123;
//     yield 456;
//     return 'ok';
// }
//
// let g = f();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g);

// function* f() {
//     for (let i = 0; i < 99; i++) {
//         yield i;
//     }
// }
//
// let g = f();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    return 7;
}

for (let v of foo()) {
    console.log(v);
}
