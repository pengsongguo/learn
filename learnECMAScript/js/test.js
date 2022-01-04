// var a = null;
// var b;

// console.log(undefined)

// var a = 123;
// console.log(typeof a);
// a = a.toString();
// console.log(typeof a);

// var b = true;
// console.log(typeof b);
// b = b.toString();
// console.log(typeof b);
// null.toString()

// console.log(typeof String(123))

// var a = null;
// console.log(typeof a);
// a = String(a);
// console.log(typeof a);

// var obj = { a: 1 };

// console.log(obj);
// var b = String(obj);
// console.log(b);
// var c ="898kk";
// console.log(Number(c));

// var str='锄禾日当午'+'汗滴"禾"下土';
// console.log(str)

// var str='123'+1;
// console.log(str)

// var num=123;
// num=num+'';
// console.log("🚀 ~ file: test.js ~ line 40 ~ num", num)
// console.log(num);

// var result=1+2+"3";
// console.log("🚀 ~ file: test.js ~ line 44 ~ result", result);

// var a = 3 % 2;
// console.log("🚀 ~ file: test.js ~ line 47 ~ a", a);

// var a = 123;
// a = -a;
// console.log("🚀 ~ file: test.js ~ line 50 ~ a", a);

// var a = -123;
// a = -a;
// console.log("🚀 ~ file: test.js ~ line 55 ~ a", a);

// var a = 1;
// // a++;
// console.log(++a);
// var b = 1;
// console.log(b++);

// var a = 10;
// a++;
// console.log(a++);
// console.log(++a);

// var a = 10;
// console.log(a--);
// console.log(--a);

// var n1 = 10,
//   n2 = 20;
// var n = n1++;
// console.log("n = > " + n); //10
// console.log("n1 = > " + n1); //11
// n = ++n1;
// console.log("n = > " + n); //12
// console.log("n1 = > " + n1); //12
// n = n2--;
// console.log("n = > " + n); //20
// console.log("n2 = > " + n2); //19
// n = --n2;
// console.log("n = > " + n); //18
// console.log("n2 = > " + n2); //18

// var a = 0 && true;
// console.log("🚀 ~ file: test.js ~ line 88 ~ a", a);

// var b = false || true;
// console.log("🚀 ~ file: test.js ~ line 91 ~ b", b)

// var c = "aa" || false;
// console.log("🚀 ~ file: test.js ~ line 94 ~ c", c)

// var d = "" || false;
// console.log("🚀 ~ file: test.js ~ line 97 ~ d", d);

// var a = 10;
// a -= 3;
// console.log("🚀 ~ file: test.js ~ line 101 ~ a", a);

// var a = 5 > '10';
// console.log("🚀 ~ file: test.js ~ line 104 ~ a", a);

// var a = 2 > true;
// console.log("🚀 ~ file: test.js ~ line 107 ~ a", a);

// var str = "\u2620";
// console.log("🚀 ~ file: test.js ~ line 109 ~ str", str);

// var a = NaN;
// console.log(a == a);
// console.log(isNaN(a));
// console.log(1!='1');

// {
//   true ? console.log("a") : console.log("b");
// }

// prompt('请输入期末成绩')

// var n = 12;
// switch (n) {
//   case 10:
//     console.log(n);
//     break;
//   case 12:
//     console.log(n);
//     break;
//   default:
//     console.log("默认");
//     break;
// }

function Fn() {}

console.log(Fn.prototype);

var f1 = new Fn();

console.log("🚀 ~ file: test.js ~ line 143 ~ f1.__proto__ === Fn.prototype", f1.__proto__ === Fn.prototype)


