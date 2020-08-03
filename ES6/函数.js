// function f(a = 1) {
//     console.log(a);
// }
//
// console.log(f());
// console.log(f(4));

// function f(...v) {
//     console.log(v);
//     console.log(Object.prototype.toString.call(v));
// }
//
// f(6);

// const f = () => {
//     return 123
// };
// console.log(f());

// const f = (...v) => {
//     return v
// };
// console.log(f(123, 123));

// const f = () => {
//     return this;
// };
// console.log(f());

let obj = {
    a: 'A',
    b: function () {
        return this;
    }
};
console.log(obj.b());