// function* nextFn() {
//     yield 1;
//     yield 2;
//     return 3;
// }
//
// let a = nextFn();
// console.log(a);
// let b =nextFn();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(b.next());

// function* G1() {
//     yield 3 + 4;
// }
//
// let gg1 = G1();
// console.log(gg1.next());

// function* f() {
//     console.log('执行了！')
// }
//
// let generator = f();
//
// setTimeout(function () {
//     generator.next()
// }, 2000);

// function* forXunHuan() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return true;
// }
//
// for (let v of forXunHuan()) {
//     console.log(v);
// }
// let x = forXunHuan();
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());
// console.log(x.next());

let obj = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D'
};
