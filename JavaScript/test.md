[toc]


# 基本语法

## 语句

==JavaScript 程序的执行单位为行，也就是一行一行地执行。== 一般情况下，每一行就是一个语句。

语句是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。

```JavaScript
var a = 1 + 3;
```

`1 + 3` 叫做表达式，指一个为了得到返回值的计算式。

==语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。==

## 变量

### 概念

变量是对“值”的具名引用。变量就是为“值”起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。

```JavaScript
var a = 1;
```

注意，==JavaScript 的变量名区分大小写，A 和 a 是两个不同的变量。==

### 变量提升

==JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。==

```JavaScript
console.log(a); 
var a = 1;

// 提升后
var a;
console.log(a); // undefined
a = 1;
```

## 标识符

标识符指的是用来识别各种值的合法名称。最常见的标识符就是变量名，以及后面要提到的函数名。==JavaScript 语言的标识符对大小写敏感，所以 a 和 A 是两个不同的标识符。==

标识符命名规则：

- 第一个字符，可以是任意 `Unicode`。
- 字母（包括英文字母和其他语言的字母），以及美元符号 $ 和下划线 _ 。
- 第二个字符及后面的字符，除了 `Unicode` 字母、美元符号和下划线，还可以用数字 `0-9`。

JavaScript 有一些保留字，不能用作标识符：`arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield`。

## 注释

源码中被 JavaScript 引擎忽略的部分就叫做注释，它的作用是对代码进行解释。JavaScript 提供两种注释的写法：

- 一种是单行注释，用 `//` 起头；
- 另一种是多行注释，放在 `/*` 和 `*/` 之间。

## 区块

JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”。

==对于 var 命令来说，JavaScript 的区块不构成单独的作用域。==

## 条件语句

### if 结构

`if` 结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是 JavaScript 的两个特殊值，`true` 表示真，`false` 表示伪。

```JavaScript
if (布尔值){
  语句;  
}
```


### if ... else 结构

`if` 代码块后面，还可以跟一个 `else` 代码块，表示不满足条件时，所要执行的代码。

```JavaScript
if (m === 3) {
  // 满足条件时，执行的语句
} else {
  // 不满足条件时，执行的语句
}

if (m === 0) {
  // ...
} else if (m === 1) {
  // ...
} else if (m === 2) {
  // ...
} else {
  // ...
}
```

### switch 结构

多个 `if ... else` 连在一起使用的时候，可以转为使用更方便的 `switch` 结构。

```JavaScript
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
    // ...
}
```

上面代码根据变量 `fruit` 的值，选择执行相应的 `case`。如果所有 `case` 都不符合，则执行最后的 `default` 部分。==需要注意的是，每个 `case` 代码块内部的 `break` 语句不能少，否则会接下去执行下一个 `case` 代码块，而不是跳出 `switch` 结构。==

### 三元运算符 `? :`

JavaScript 还有一个三元运算符（即该运算符需要三个运算子）`x ? x : x `，也可以用于逻辑判断。

```
(条件) ? 表达式 1 : 表达式 2
```

==上面代码中，如果“条件”为 `true`，则返回“表达式1”的值，否则返回“表达式2”的值。==

## 循环语句

循环语句用于重复执行某个操作，它有多种形式。

### while 循环

`while` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

```JavaScript
while (条件) {
  语句;
}
```

### for 循环

`for` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。

```
for (初始化表达式; 条件; 递增表达式) {
  语句
}
```

`for` 语句后面的括号里面，有三个表达式：

- 初始化表达式：确定循环变量的初始值，只在循环开始时执行一次。
- 条件表达式：每轮循环开始时，都要执行这个条件表达式，只有值为真，才继续进行循环。
- 递增表达式：每轮循环的最后一个操作，通常用来递增循环变量。

### do ... while 循环

`do ... while` 循环与 `while` 循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。

```
do {
  语句
} while (条件);
```

不管条件是否为真，`do ... while` 循环至少运行一次，这是这种结构最大的特点。另外，==`while` 语句后面的分号注意不要省略。==

### break 语句和 continue 语句

`break` 语句和 `continue` 语句都具有跳转作用，可以让代码不按既有的顺序执行。适用于 `while 、for` 循环等语句。

==`break`语句用于跳出代码块或循环。==

==`continue` 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。==

---

# 数据类型

## 数据分类

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有 `7` 种。

- 数值（`number`）：整数和小数（比如 `1` 和 `3.14`）
- 字符串（`string`）：文本（比如 `'Hello World'`）
- 布尔值（`boolean`）：表示真伪的两个特殊值，即 `true`（真）和 `false`（假）
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- `null`：表示空值，即此处的值为空
- `Symbol`：表示独一无二的值（ES6 新增）
- 对象（`object`）：各种值组成的集合

对象是最复杂的数据类型，又可以分成三个子类型。

- 狭义的对象（`object`）
- 数组（`array`）
- 函数（`function`）
- Set（ES6 新增）
- Map（ES6 新增）

## 判断数据类型

JavaScript 有三种方法，可以确定一个值到底是什么类型。

- `typeof` 运算符（只能精准判断基本数据类型，复杂数据类型判断比较笼统）
- `instanceof` 运算符（判断复杂数据类型，而且比较笼统，不精准）
- `Object.prototype.toString` 方法（推荐使用）

声明几个不同类型的变量，用于接下来案例使用。

```JavaScript
var a = 'a';
var aa = new String('aaa');
var b = 123;
var c = true;
var d = undefined;
var e = null;
var f = {};
var g = ['2'];
var s = new Set();   // ES6 新增
var m = new Map();   // ES6 新增
var sym = Symbol('123');   // ES6 新增
```

`typeof` 运算符可以返回一个值的数据类型，只能精准判断基本数据类型，复杂数据类型判断比较笼统。

```JavaScript
console.log(typeof a);   // string
console.log(typeof g);   // Object
console.log(typeof s);   // Object
console.log(typeof m);   // Object
console.log(typeof sym);   // symbol
```

数值、字符串、布尔值分别返回 `number、string、boolean`；函数返回 `function`、`undefined` 返回 `undefined`、对象返回 `object`、`null` 返回 `object`（历史原因）。

`instanceof` 运算符，==只能判断复杂数据类型==，而且比较笼统，不精准。

```JavaScript
console.log(a instanceof String);   // false
console.log(b instanceof Number);   // false
console.log(aa instanceof String);   // true （注意观察和字符串 a 的声明方式）
console.log(g instanceof Object);   // true
```

`Object.prototype.toString` 方法，配合 `call` 方法使用来判断数据类型，推荐使用。

```JavaScript
console.log(Object.prototype.toString.call(a));   // [object String]
console.log(Object.prototype.toString.call(b));   // [object Number]
console.log(Object.prototype.toString.call(g));   // [object Array]
console.log(Object.prototype.toString.call(s));   // [object Set]
console.log(Object.prototype.toString.call(m));   // [object Map]
console.log(Object.prototype.toString.call(sym));   // [object Symbol]
```

## null, undefined 和布尔值

### null 和 undefined

`null` 与 `undefined` 都可以表示“没有”，含义非常相似。将一个变量赋值为 `undefined` 或 `null`，语法效果几乎没区别。

`null` 表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入 `null`，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入 `null`，表示未发生错误。==`undefined` 表示变量“未定义”。==

### 布尔值

布尔值代表“真”和“假”两个状态。“真”用关键字 `true` 表示，“假”用关键字 `false` 表示。==布尔值只有这两个值。==

下列运算符会返回布尔值：

- 前置逻辑运算符： `! (Not)`
- 相等运算符：`===，!==，==，!=`
- 比较运算符：`>，>=，<，<=`

如果 JavaScript 预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为 `false`，其他值都视为 `true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `"" 或 ''`（空字符串）

## 数值

JavaScript 内部，所有数字都是以 64 位浮点数形式储存，即使整数也是如此。所以，`1` 与 `1.0` 是相同的，是同一个数。由于浮点数不是精确的值，所以==涉及小数的比较和运算要特别小心。==

```JavaScript
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

### NaN

`NaN` 是 JavaScript 的特殊值，表示“非数字”（Not a Number），主要出现在将字符串解析成数字出错的场合。

- ==`NaN` 不是独立的数据类型，而是一个特殊数值，它的数据类型依然属于 Number；==
- ==`NaN` 不等于任何值，包括它本身；==
- ==`NaN` 在布尔运算时被当作 `false`；==
- ==`NaN` 与任何数（包括它自己）的运算，得到的都是 `NaN`。==

### parseInt()

`parseInt` 全局方法用于将字符串转为整数。

```JavaScript
parseInt('123') // 123
parseInt('   81') // 81
parseInt(1.23) // 1
parseInt('1.23') // 1
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1
```

### parseFloat()

`parseFloat` 全局方法用于将一个字符串转为浮点数。

```JavaScript
parseFloat('3.14') // 3.14
parseFloat('3.14more non-digit characters') // 3.14
parseFloat([]) // NaN
parseFloat('FF2') // NaN
parseFloat('') // NaN
parseFloat('') // NaN（注意：parseFloat 会将空字符串转为 NaN）
Number('') // 0
parseFloat('123.45#') // 123.45
Number('123.45#') // NaN
```

### isNaN()

`isNaN` 方法可以用来判断一个值是否为 `NaN`。

可以利用 `NaN` 为唯一不等于自身的值的这个特点，进行判断。

```JavaScript
function myIsNaN(value) {
  return value !== value;
}
```

## 字符串

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```JavaScript
'abc'
"abc"
```


### 转义

反斜杠 `\` 在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

需要用反斜杠转义的特殊字符，主要有下面这些。


- \0 ：null（\u0000）
- \b ：后退键（\u0008）
- \f ：换页符（\u000C）
- \n ：换行符（\u000A）
- \r ：回车键（\u000D）
- \t ：制表符（\u0009）
- \v ：垂直制表符（\u000B）
- \\' ：单引号（\u0027）
- \\" ：双引号（\u0022）
- \\\ ：反斜杠（\u005C）

```JavaScript
console.log('1\n2')
// 1
// 2
```


### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从 `0` 开始）。

```JavaScript
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 直接对字符串使用方括号运算符
'hello'[1] // "e"
```

但是，==字符串与数组的相似性仅此而已。实际上，无法改变字符串之中的单个字符。==

### length 属性

`length` 属性返回字符串的长度，该属性也是无法改变的。

## 对象

对象就是一组“键值对”（key-value）的集合，是==一种无序的复合数据集合。==

```JavaScript
var obj = {
  foo: 'Hello',
  bar: 'World'
};
```


### 键名

对象的所有==键名都是字符串==（ES6 又引入了 `Symbol` 值也可以作为键名），所以加不加引号都可以。

对象的属性之间用逗号分隔，最后一个属性后面可以加逗号，也可以不加。

### 对象的引用

==如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。==

```JavaScript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
```

### 表达式还是语句？

```JavaScript
{ foo: 123 }
```


JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含 `foo`  属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签 `foo`，指向表达式 `123`。

为了避免这种歧义，JavaScript 引擎的做法是，==如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。==

```JavaScript
{ console.log(123) } // 123
```

==如果要解释为对象，最好在大括号前加上圆括号。== 因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```JavaScript
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```

### 属性操作

#### 属性读取

==读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。==

```JavaScript
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```


==注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。==

#### 属性赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```JavaScript
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```

#### 属性的查看

查看一个对象本身的所有属性，可以使用 `Object.keys` 方法。

```JavaScript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);   // ['key1', 'key2']
```

#### 属性的删除：delete 命令

`delete` 命令用于删除对象的属性，删除成功后返回 `true`。

```JavaScript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

==注意，删除一个不存在的属性，`delete` 不报错，而且返回 `true`。==

```JavaScript
var obj = {};
delete obj.p // true
```

#### 属性是否存在：in 运算符

==`in` 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 `true`，否则返回 `false`。== 它的左边是一个字符串，表示属性名，右边是一个对象。

```JavaScript
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
```

==`in` 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。== 可以使用对象的 `hasOwnProperty` 方法判断一下，是否为对象自身的属性。

```JavaScript
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

#### 属性的遍历：for...in 循环

`for...in` 循环用来遍历一个对象的全部属性。

```JavaScript
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}
// 键名： a
// 键值： 1
// 键名： b
// 键值： 2
// 键名： c
// 键值： 3
```

`for...in` 循环有两个使用注意点。

- ==它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。==
- ==它不仅遍历对象自身的属性，还遍历继承的属性。==

如果继承的属性是可遍历的，那么就会被 `for...in` 循环遍历到。但是，==一般情况下，都是只想遍历对象自身的属性，所以使用 `for...in`  的时候，应该结合使用 `hasOwnProperty` 方法，在循环内部判断一下，某个属性是否为对象自身的属性。==

```JavaScript
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```

## 函数

函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

### 函数的声明

JavaScript 有三种声明函数的方法。

- function 命令

```JavaScript
function print(s) {
  console.log(s);
}
```

- 函数表达式

```JavaScript
var print = function(s) {
  console.log(s);
};
```

- Function 构造函数（几乎不用）

```JavaScript
var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 等同于
function add(x, y) {
  return x + y;
}
```

==如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。==

### 圆括号运算符，return 语句

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

```JavaScript
function add(x, y) {
  return x + y;
}

add(1, 1) // 2
```

==函数体内部的 `return` 语句，表示返回。JavaScript 引擎遇到 `return` 语句，就直接返回 `return` 后面的那个表达式的值，后面即使还有语句，也不会得到执行。== 也就是说，`return` 语句所带的那个表达式，就是函数的返回值。`return` 语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回 `undefined`。

### 递归

==函数可以调用自身，这就是递归。== 下面就是通过递归，计算斐波那契数列的代码。

```JavaScript
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6) // 8
```

### 函数名的提升

==JavaScript 引擎将函数名视同变量名，所以采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。== 所以，下面的代码不会报错。

```JavaScript
f();

function f() {}
```

但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```JavaScript
f();
var f = function (){};
// TypeError: undefined is not a function
```

上面的代码等同于下面的形式。

```JavaScript
var f;
f();
f = function () {};
```

### 函数的属性和方法

#### name

函数的 `name` 属性返回函数的名字。

```JavaScript
function f1() {}
f1.name // "f1"
```

#### length 属性

函数的 `length` 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

```JavaScript
function f(a, b) {}
f.length // 2
```

#### toString()

函数的 `toString` 方法返回一个字符串，内容是函数的源码。

```JavaScript
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }
```

对于那些原生的函数，`toString()` 方法返回 `function (){[native code]}`。

### 函数作用域

#### 定义

作用域指的是变量存在的范围。在 ES5 的规范中，JavaScript 只有两种作用域：==一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本笔记不涉及。==

==对于顶层函数来说，函数外部声明的变量就是全局变量，它可以在函数内部读取。==

```JavaScript
var v = 1;

function f() {
  console.log(v);
}

f()
// 1
```

==在函数内部定义的变量，外部无法读取，称为“局部变量”。==

```JavaScript
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

==函数内部定义的变量，会在该作用域内覆盖同名全局变量。==

```JavaScript
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

==对于 var 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。==

```JavaScript
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

#### 函数内部的变量提升

==与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。==

```JavaScript
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}

// 等同于
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}
```

#### 函数本身的作用域

函数本身也是一个值，也有自己的作用域。==它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。==

```JavaScript
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```

### 参数

#### 概述

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

函数参数不是必需的，JavaScript 允许省略参数。但是，没有办法只省略靠前的参数，而保留靠后的参数。如果一定要省略靠前的参数，只有显式传入 `undefined`。

#### 传递方式

函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递。这意味着，在函数体内修改参数值，不会影响到函数外部。

```JavaScript
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```

### 闭包

理解闭包，首先必须理解变量作用域。前面提到，JavaScript 有两种作用域：==全局作用域和函数作用域。函数内部可以直接读取全局变量，函数外部无法读取函数内部声明的变量。==

如果需要得到函数内的局部变量。正常情况下，这是办不到的，只有通过变通方法才能实现。那就是在函数的内部，再定义一个函数。

```JavaScript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

由于在 JavaScript 语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。

闭包的最大用处有两个：
- 可以读取函数内部的变量；
- 让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在；
- 封装对象的私有属性和私有方法。

```JavaScript
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('张三');
p1.setAge(25);
p1.getAge() // 25
```

==外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。== 因此不能滥用闭包，否则会造成网页的性能问题。

### 立即调用的函数表达式（IIFE）

在 JavaScript 中，圆括号 `()` 是一种运算符，跟在函数名之后，表示调用该函数。比如，`print()` 就表示调用 `print` 函数。

```JavaScript
(function(){ /* code */ }());
// 或者
(function(){ /* code */ })();
```

==注意，上面两种写法最后的分号都是必须的。如果省略分号，遇到连着两个 IIFE，可能就会报错。==

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。

它的目的有两个：
- 一是不必为函数命名，避免了污染全局变量；
- 二是 IIFE 内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

```JavaScript
// 写法一
var tmp = newData;
processData(tmp);
storeData(tmp);

// 写法二（推荐：因为完全避免了污染全局变量）
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
```

---

# 变量的声明

## ES 5.1

- `var`
- `function`

## ES 6

- `var`
- `function`
- `const`
- `let`
- `import`
- `class`

---

# 运算符

## 取反运算符（!）

将布尔值变为反向值，==以下 6 个值取反后为 `true`，其他值都为 `false`。==

- `undefined`
- `null`
- `NaN`
- `0`
- `false`
- `空字符串('')`

注意：==空数组 [ ]、空对象 { } 这些转为布尔值都为 true，取反为 false。==

## 或运算符（a || b）

如果 a 返回的布尔值为 `true`，返回 a 的值，不再对 b 求值；如果 a 返回的布尔值为 `false`，直接返回 b 的值。（注意：==这里返回的是 a 或者 b 表达式的结果值，而不是布尔值。==）

## 且运算符（a && b）

如果 a 返回的布尔值为 `true`，则返回 b 的值，如果 a 返回的布尔值是 `false`，则直接返回 a 的值。（注意：==这里返回的是 a 或者 b 表达式的结果值，而不是布尔值。==）

## == 和 ===

- `==` 比较两个值是否相等，类型可以不同。
- `===` 比较两个值是否为“同一个值”，类型必须相同。

## 三元条件运算符（a ? b : c）

如果第一个表达式 `a` 的布尔值为 `true`，则返回 `b` 表达式的值，否则返回 `c` 表达式的值。

```JavaScript
a ? b : c // a 如果返回 true ，则执行 b ，否则执行 c
```

## 自增和自减

将运算符首先转为数值，然后加上 `1` 或者减去 `1`。它们会修改原始变量。

```JavaScript
var x = 1;
++x // 2
x // 2

--x // 1
x // 1
```

放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

```JavaScript
var x = 1;
var y = 1;

x++ // 1
++y // 2
```

---

# 数据类型转换

## 强制转换

- `Number()`
- `String()`
- `Boolean()`

## 自动转换

自动转换具有不确定性，而且不易除错，==建议在预期为布尔值、数值、字符串的地方，全部使用 Boolean、Number 和 String 函数进行显式转换。==

### 自动转换为布尔值

除了 `undefined、null、+0、0` 或者 `-0、NaN`、空字符串 `""`，其它都会自动转换为 `true`。

### 自动转换为字符串

字符串加法运算时候，当一个值为字符串，另一个值为非字符串，则后者会自动转换为字符串。

### 自动转换为数值

除了加法运算符（`+`）有可能会运算子转化为字符串，其它运算符都会把运算子自动转换为数值。

---

# String 常见用法

## String.prototype.slice()

==用于从原来字符串中提取字符串并返回，不会改变原来的字符串。== 第一个参数是字符串开始位置，第二个参数是字符串结束位置（不包含该位置）。

```JavaScript
'JavaScript'.slice(0, 4) // "Java"
```

## String.prototype.substring()、String.prototype.substr()

用法基本和 `String.prototype.slice()` 一样的，一般建议用 `slice` 方法即可。

## String.prototype.indexOf()、String.prototype.lastIndexOf()

`indexOf` 方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回 -1 就表示不匹配。 `lastIndexOf` 用法和 `indexOf` 基本一样，区别在于从字符串的尾部，向前查找。

```JavaScript
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
```

支持第二个参数，表示从该位置向后查询。

```JavaScript
'hello world'.indexOf('o', 6) // 7
```

## String.prototype.trim()

去除字符串两端的空格，返回新的字符串，==不改变原字符串。==

```JavaScript
'  hello world  '.trim() // "hello world"
```

## String.prototype.toLowerCase()、toUpperCase()

`toLowerCase` 方法用于将一个字符串全部转为小写，`toUpperCase` 则是全部转为大写。==它们都返回一个新字符串，不改变原字符串。==

## String.prototype.match()

用于确定字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到，返回 `null`。

```JavaScript
'gkasjdlfs'.match('s') // ["s", index: 3, input: "gkasjdlfs", groups: undefined]
'guopengsong'.match('d') // null
```

## String.prorotype.search()

`search` 方法的用法基本等同于 `match`，但是返回的是匹配的第一个索引位置。如果没有找到匹配，返回 `-1`。

```JavaScript
'asdfghjkl'.search('d') // 2
'asdfsdf'.search('fgse') // -1
```

## String.prototype.replace()

`replace` 方法用于替换匹配的字符串，一般情况下只替换第一个匹配（除非使用带有 `g` 修饰符的正则表达式）。

```JavaScript
'asdfsadf'.replace('a','---') // "---sdfsadf"
```

## String.prototype.split()

==`split` 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。==

```JavaScript
'a|b|c'.split('|') // ['a','b','c']
```

---

# Number 常见用法

## Number.prototype.toString()

将一个数值转化为字符串形式。

```JavaScript
(10).toString() // '10'
```

## Number.prototype.toFiexd()

`toFiexd()` 方法先将一个数值转化为指定位数的小数，然后返回这个小数对应的字符串。

```JavaScript
10.005.toFixed(2) // "10.01"
```

## 全局方法 parseInt()

用于将字符串转为整数，会删除小数部分。

```JavaScript
parseInt('123') // 123
parseInt('3.4') // 3
```

## 全局方法 parseFloat()

`parseFloat()` 方法用于将一个字符串转为浮点数。

```JavaScript
parseFloat('3.244') // 3.244
```

## NaN、全局方法 isNaN()

`NaN` 特殊值，表示“非数值”，出现在将字符串解析成数值出错的场合。

`isNaN` 方法可以用来判断一个值是否为 `NaN`。

```JavaScript
isNaN(NaN) // true
isNaN(213) // false
```

---

# Array 常见用法

`Array` 是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。

## Array.isArray()

返回一个布尔值，表示参数是否为数组，可以弥补 `typeof` 运算符的不足。

```JavaScript
var arr = [1,2,3];
typeof arr // 'object'
Array.isArray(arr) // true
```

## push()

==`push` 方法用于在数组的末端添加一个或者多个元素，并且返回新元素后的数组长度。注意，该方法会改变原数组。==

```JavaScript
var arr = [];
arr.push(3) // 1
arr.push('a','b') // 3
arr // [3,'a','b']
```

## pop()

==`pop` 方法用于删除数组的最后一个元素，并且返回该元素。注意，该方法会改变原数组。==

```Javascript
var arr = ['a','b','c'];
arr.pop() // 'c'
arr // ['a','b']
```


## shift()

==`shift` 方法用于删除数组的第一个元素，并返回该元素。注意，该方法会改变原数组。==

```JavaScript
var a = ['a','b','c'];
arr.shift() // 'a'
a // ['b','c']
```

## unshift()

==`unshift` 方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。注意，该方法会改变原数组。==

```JavaScript
var a = ['a','b','c'];

a.unshift('x'); // 4

a // ['x','a','b','c']

var arr = ['c','d'];
arr.unshift('a','b') // 4
arr // ['a','b','c','d']
```

## join()

`join` 方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。==该方法不改变原数组。==

```JavaScript
var a = ['a','b','c']

a.join('--') // 'a--b--c'
```

## concat()

`concat` 方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，不改变原数组。

```JavaScript
var a = ['a','b']
var b = ['c','d']

a.concat(b) // ['a','b','c','d']
```

## slice()

`slice` 方法用户提取目标数组中的一部分，==返回一个新数组，原数组不变。==

它第一个参数为起始位置（从0开始），第二个参数为终止位置（包含该元素本身）。如果第二个参数省略，则一直返回到数组最后一个成员。

```JavaScript
var a = ['a','b','c','d'];

a.slice(1,3) // ['b','c']
```

## splice()

`splice` 方法用于删除原数组中的一部分成员，并且可以在删除的位置添加新的数组成员，返回值是被删除的元素，该方法会改变原数组。

```JavaScript
arr.splice(start,count,addElement1,addElement2,...)
```

第一个参数是删除的起始位置（从0开始），第二个参数是被删除的元素个数，后面的参数为要插入数组的新元素。

```JavaScript
var a = ['a','b','c','d']

a.splice(1,2,'e','f') // ['b','c']

a // ['a','e','f','d']
```

## indexOf()、lastIndexOf()

`indexOf` 方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回 `-1`。

```JavaScript
var a = ['a','b','c','d']

a.indexOf('b') // 1
a.indexOf('x') // -1
```

可以接受第二个参数，表示搜索的开始位置。

```JavaScript
var a = ['a','b','c','d']

a.indexOf('b',2) // -1
```

`lastIndexOf` 方法返回给定元素在数组中最后一次出现的次数，如果没有出现则返回 `-1`。具体用法和 `indexOf` 相似。

## map()

`map` 方法将数组的所有成员依次传入函数参数，然后把每一次执行结果组成一个新数组返回。

```JavaScript
var a = ['a','b','c','d']

a.map(function(elem,index,arr){
    return elem +'-';
}) // ['a-','b-','c-','d-']

a // ['a','b','c','d']
```

`map` 方法的回调函数有三个参数，`elem` 为当前成员的值，`index` 为当前成员的索引位置，`arr` 为原数组 `a` 。

## forEach()

`forEach` 方法与 `map` 方法很像，也是对数组的所有成员依次执行参数函数。但是，==`forEach` 方法不返回值，只用来操作数据。如果数组遍历的目的是为了得到返回值，那么使用 `map` 方法，否则使用 `forEach` 方法。==

```JavaScript
var a = ['a','b','c','d']

a.forEach(function(elem,index,arr){
    return elem+'-';
}) // undefind(无返回值)

a // ['a','b','c','d']
```

## filter()

`filter` 方法用于过滤数组成员，满足条件的成员数组组成一个新的数组返回。

它的参数是一个函数，所有数组依次执行该函数，返回结果为 `true` 的成员组成一个新数组返回。==该方法不改变原数组。==

```JavaScript
var a = [2,3,5,3,2,1,4,6];

a.filter(function(v){
    return v>2;
}) // [3, 5, 3, 4, 6]

a // [2,3,5,3,2,1,4,6]
```

## in 运算符、for ... in 循环

因为数组属于特殊的对象，所以也可以使用对象的 `in` 运算符，和 `for ... in` 循环。

## 数组的遍历

数组的遍历可以使用 `for` 循环或者 `while` 循环。

```JavaScript
var a = ['a','b','c']
for(var i = 0 ; i < a.length ; i++){
    console.log(a[i])
}
```

## 类数组对象

如果一个对象的所有键名都是正数或零，并且拥有 `length` 属性，那么这个对象就很像数组，语法上成为“类似数组的对象”。

==典型的“类似数组对象”有函数的 `arguments` 对象，以及大多数的 `DOM` 元素集，还有字符串。==

==数组的 `slice` 方法可以将“类似数组的对象”转换为真正的数组。==

```JavaScript
var arr = Array.prototype.slice.call(arrayLike);
```

---

# Object 常见用法

==对象所有的键名都是字符串（ES6 又引入了 `Symbol` 值也可以作为键名），所以加不加引号都可以。==

属性的读取、操作可以使用点或者中括号运算符操作。

```JavaScript
var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj[foo]  // 2
```

## delete 命令

`delete` 命令用于删除对象的属性，删除成功后返回 `true`。==`delete`  命令只能删除对象本身的属性，无法删除继承的属性。==

## in 运算符

`in` 运算符用于检查对象是否包含某个属性（注意，==检查的是键名而不是键值==），如果包含返回 `true`，否则返回 `false`。

```JavaScript
var obj = {
    p:1
}

'p' in obj // true（自身属性）
'toString' in obj //ture（继承属性）
```

==`in` 运算符有个问题，它不能识别那些属性是自身的，哪些属性是继承的。==

==可以使用对象的 `hasOwnProperty` 方法判断一下，是否为对象自身的属性。==

```JavaScript
var obj = {};

if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```


## for ... in 循环

`for ... in` 循环用来遍历一个对象的所有属性。

有两个点需要注意：

- 它遍历的是对象所有可遍历的属性，会跳过不可遍历的属性。
- 它不仅遍历对象自身的属性，还遍历继承的属性。

==一般情况下，都是只想遍历对象的自身属性，所以使用 `for ... in` 的时候，应该结合使用 `hasOwnProperty` 方法，在循环内部判断一下，某个属性是否为对象的自身属性。==

```JavaScript
var person = {name:'张三'}

for(var key in person){
    if(person.hasOwnProperty(key)){
        console.log(key);
    }
}

// name
```

## Object.keys()、Object.getOwnPropertyNames()

==`Object.keys` 方法的参数是一个对象，返回一个数组。该数组的成员都是该对象自身的（而不是继承的）所有属性名。==

```JavaScript
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj) // ["p1", "p2"]
```

==`Object.getOwnPropertyNames` 方法与 `Object.keys` 类似，也是接受一个对象作为参数，返回一个数组，包含了该对象自身的（而不是继承的）所有属性名。==

```JavaScript
var obj = {
  p1: 123,
  p2: 456
};

Object.getOwnPropertyNames(obj) // ["p1", "p2"]
```

一般来说，两个方法返回结果是一样的，只有涉及不可枚举属性时，才会不一样，==`Object.keys` 方法只返回可枚举的属性，`Object.getOwnPropertyNames` 方法还返回不可枚举属性名。==

## toString()应用：判断数据类型

`Object.prototype.toString` 方法返回对象的类型字符串，可以用来判断一个值的类型。

==由于实例对象可能会自定义 `toString` 方法，覆盖掉 `Object.prototype.toString` 方法，所以为了得到类型字符串，最好直接使用 `Object.prototype.toString` 方法。==

==通过函数 `call` 方法，可以在任意值上调用这个方法，来判断数据类型。==

```JavaScript
Object.prototype.toString.call(value)
```


## Object.prototype.hasOwnProperty()

==`Object.prototype.hasOwnProperty`  方法接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性。==

```JavaScript
var obj = {a:1}

obj.hasOwnProperty('a') // true
obj.hasOwnProperty('toString') // false
```

---

# Math 用法

## Math.abs()

`Math.abs` 方法返回参数的绝对值。

```JavaScript
Math.abs(1) // 1
Math.abs(-1) // -1
```

## Math.max()、Math.min()

`Math.max` 方法返回参数中最大的那个值，`Math.min` 方法返回参数中最小的那个值。

```JavaScript
Math.max(2,1,4) // 4
Math.min(-2,4,1) // -2
```

## Math.floor()、Math.ceil()

`Math.floor` 方法返回小于参数值的最大整数（地板值）。

```JavaScript
Math.flor(3.9) // 3
```

`Math.ceil` 方法返回大于单数值的最小整数（天花板值）。

```JavaScript
Math.ceil(1.1) // 2
```

## Math.round()

`Math.round` 方法用于四舍五入。

```JavaScript
Math.round(0.1) // 0
Math.round(4.5) // 5
```

## Math.random()

`Math.random` 方法返回 `0` 到 `1` 之间的一个伪随机数，可能等于 `0` ，但一定小于 `1`。

```JavaScript
Math.random() // 0.38556088984648396
```

---

# Date 对象常见用法

`Date` 对象是 JavaScript 原生的时间库。它以国际标准时间`（UTC）1970年1月1日00:00:00` 作为时间的零点，可以表示的时间范围是前后各1亿天（单位为毫秒）。

## Date()

`Date` 对象可以作为普通函数直接调用，返回一个代表当前时间的字符串。

```JavaScript
Date() // "Sat Dec 14 2019 14:43:17 GMT+0800 (中国标准时间)"
```

`Date` 可以当作构造函数使用，使用 `new` 命令，返回一个 `Date` 对象的实例。如果不加参数，实例代表的就是当前时间。

```JavaScript
new Date() // Sat Dec 14 2019 14:43:42 GMT+0800 (中国标准时间)
```

## Date.now()

`Date.now` 方法返回当前时间距离时间零点（`1970年1月1日 00:00:00 UTC`）的毫秒数。时间戳的常用方法。

```JavaScript
Date.now() // 1576306248004
```

## get 类方法（set*）

`Date` 对象提供了一系列 `get*` 方法，用于获取某个实例对象某方面的值。

`set*` 类方法用于设置某个实例对象某方面的值，详情翻阅相关文档，用法差不多，这里做省略。

### getTime()

`getTime` 返回实例对象距离 `1970年1月1日 00:00:00` 的毫秒数。

```JavaScript
var time = new Date()

// 时间戳常用写法
time.getTime() // 1576306856840
```

### getFullYear()、getMonth()、getDate()、getDay()

`getFullYear` 返回四位数的年份。

`getMonth` 返回月份（0 表示1月，11 表示 12月）。

`getDate` 方法返回实例对象对应的每个月的几号（从 1 开始）。

`getDay` 方法返回星期几，星期日为 0 ，星期一为 1 ，以此类推。

```JavaScript
var time = new Date()

time.getFullYear() // 2019
time.getMonth() // 11
time.getDate() // 14
time.getDay() // 6
```

### getHours()、getMinutes()、getSeconds()

`getHours` 返回小时（0 - 23）

`getMinutes` 返回分钟

`getSeconds` 返回秒

```JavaScript
var time = new Date()

time.getHours() // 15
time.getMinutes() // 17
time.getSeconds() // 45
```

---

# Regexp 用法

暂省略

---

# JSON 对象用法

`JSON` 格式是一种用于数据交换的文本格式。

每个 `JSON` 对象就是一个值，可能是一个数组或对象，也可能是一个原始类型的值。

`JSON` 对值的类型和格式有严格的规定：

- 复合类型的值只能是数组或对象，不能是函数、正则表达式对象、日期对象。
- 原始类型的值只有四种：字符串、数值（必须以十进制表示）、布尔值和 `null`（不能使用 `NaN`, `Infinity`, `-Infinity` 和 `undefined`）。
- ==字符串必须使用双引号表示，不能使用单引号。==
- 对象的键名必须放在双引号里面。
- 数组或对象最后一个成员的后面，不能加逗号。

## JSON.stringify()、JSON.parse()

`JSON.stringify` 方法用于将一个值转为 `JSON` 字符串。该字符串符合 `JSON` 格式，并且可以被 `JSON.parse` 方法还原。

`JSON.parse` 方法用于将 `JSON` 字符串转换成对应的值。

```JavaScript
var obj ={a:123,b:'BBB'}

JSON.stringify(obj) // "{"a":123,"b":"BBB"}"
```

---

# 面向对象编程

面向对象编程（Object Oriented Programming，缩写为 OOP）是目前主流的编程范式。它将真实世界各种复杂的关系，抽象为一个个对象，然后由对象之间的分工与合作，完成对真实世界的模拟。

## 构造函数

JavaScript 语言使用构造函数（`constructor`）作为对象的模板。所谓“构造函数”，就是专门用来生成实例对象的函数。

构造函数就是一个普通的函数，为了与普通函数区别，构造函数名字的第一个字母通常大写。

```JavaScript
var Vehicle = function () {
  this.price = 1000;
};
```

构造函数特点：

- 函数体内部使用了 `this` 关键字，代表了所要生成对象的实例。
- 生成对象时，必须使用 `new` 命令。

## new 命令

`new` 命令的作用，就是执行构造函数，返回一个实例对象。

```JavaScript
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000
```

`new` 命令原理：

- ==创建一个空对象，作为要返回的对象实例。==
- ==将这个空对象的原型，指向构造函数的 `prototype` 属性。==
- ==将这个空对象赋值给函数内部的 `this` 关键字。==
- ==开始执行构造函数内部代码。==

## Object.create() 创建实例对象

构造函数作为模板，可以生成实例对象。但是，有时候需要用对象作为模板，生成新的实例对象，这时就可以使用 `Object.create()` 方法。

```JavaScript
var guopengsong = {
    mingzi:'郭鹏松',
    xingbie:'男',
    leixing:'人类'
}

var pingyuan = Object.create(guopengsong)

pingyuan.leixing // 人类
pingyuan.xingbie // 男
```

## this 关键字

`this` 就是属性或方法“当前”所在的对象。不管是什么场合，`this` 都有一个共同点：==它总是返回一个对象。==

==在 JavaScript 语言中，一切皆对象，运行环境也是对象，所以函数都是在某个对象之中运行，`this` 就是函数运行时所在的对象（环境）。== 这本来不会让用户糊涂，但是 JavaScript 支持运行环境动态切换，也就是说，`this` 的指向时动态的，没办法事先确定到底指向哪个对象，这才是让人困惑的地方。

```JavaScript
function f() {
  return '姓名：'+ this.name;
}

var A = {
  name: '张三',
  describe: f
};

var B = {
  name: '李四',
  describe: f
};

A.describe() // "姓名：张三"
B.describe() // "姓名：李四"
```

`this` 使用场合：

- ==全局环境：全局环境使用 `this` ，它指向的就是顶层对象 `window`。==
- ==构造函数：构造函数中的 `this` ，指的就是实例对象。==
- ==对象的方法：如果对象的方法里面包含 `this` , `this` 的指向就是方法所运行时所在的对象。该方法赋值给另一个对象，就会改变 this 的指向。==

`this` 使用注意点：

- 避免多层 `this`：由于 `this` 的指向是不确定的，避免在函数中包含多层 `this`。
- 避免数组方法中 `this`：数组的 `map` 和 `foreach` 方法，允许提供一个函数作为参数。这个函数内部不应该使用 `this`。
- 避免回调函数中的 `this`：回调函数中的 `this` 往往会改变指向，最好避免使用。

### 绑定 this 的方法

==JavaScript 提供了 `call、apply、bind` 这三个方法，来切换/固定 `this` 的指向。==

#### Function.prototype.call()

==函数实例的 `call` 方法，可以指定函数内部的 `this`  指向（即函数执行时所在的作用域），然后在指定的作用域中，调用该函数。==

`call` 方法的参数，应该是一个对象。如果参数为 `空、null` 和 `undefined` ，则默认传入全局对象。

```JavaScript
var obj = {};

var f = function () {
  return this;
};

f() === window // true
f.call(obj) === obj // true
```

==`call` 方法还可以接受多个参数。`call` 的第一个参数就是 `this` 所要指向的那个对象，后面的参数则是函数调用时所需的参数。==

```JavaScript
func.call(thisValue, arg1, arg2, ...)
```

```JavaScript
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```

#### Function.prototype.apply()

`apply` 方法的作用与 `call` 方法类似，也是改变 `this` 指向，然后再调用该函数。==唯一的区别就是，它接收一个数组作为函数执行时的参数。==

```JavaScript
func.apply(thisValue, [arg1, arg2, ...])
```

#### Function.prototype.bind()

`bind` 方法用于将函数体内的 `this` 绑定到某个对象，然后返回一个新函数。

```JavaScript
var d = new Date();
d.getTime() // 1481869925657

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.
```

上面代码中，我们将 `d.getTime()` 方法赋给变量 `print`，然后调用 `print()` 就报错了。这是因为 `getTime()` 方法内部的 `this`，绑定 `Date` 对象的实例，赋给变量 `print` 以后，内部的 `this` 已经不指向 `Date` 对象的实例了。

`bind()` 方法可以解决这个问题。

```JavaScript
var print = d.getTime.bind(d);
print() // 1481869925657
```

上面代码中，`bind()` 方法将 `getTime()` 方法内部的 `this` 绑定到 `d` 对象，这时就可以安全地将这个方法赋值给其他变量了。

==`bind()` 的作用与 `call()` 和 `apply()` 一样，都是可以改变函数运行时上下文，区别是 `call()` 和 `apply()` 在调用函数之后会立即执行，而 `bind()` 方法调用并改变函数运行时上下文后，返回一个新的函数，供我们需要时再调用。==

### 如何选用

- 如果不需要关心具体有多少参数被传入函数，选用 `apply()`；
- 如果确定函数可接收多少个参数，并且想一目了然表达形参和实参的对应关系，用 `call()`；
- 如果我们想要将来再调用方法，不需立即得到函数返回结果，则使用 `bind()`。

### 特点总结

- `call()`、`apply()` 和 `bind()` 都是用来改变函数执行时的上下文，可借助它们实现继承；
- `call()` 和 `apply()` 唯一区别是参数不一样，`call()` 是 `apply()` 的语法糖；
- `bind()` 是返回一个新函数，供以后调用，而 `apply()` 和 `call()` 是立即调用。

## 对象的继承

面向对象编程很重要的一个方面，就是对象的继承。A 对象通过继承 B 对象，就能直接拥有 B 对象的所有属性和方法。这对于代码的复用是非常有用的。

大部分面向对象的编程语言，都是通过“类”（class）实现对象的继承。传统上，JavaScript 语言的继承不通过 class，而是通过“原型对象”（prototype）实现。

### 原型对象概述

#### 构造函数的缺点

通过构造函数为实例对象定义属性，虽然方便，但是又个缺点，==同一个构造函数的多个实例对象之间，无法共享属性，从而对系统资源造成浪费。==

```JavaScript
function Cat(name,color){
    this.name = name;
    this.color = color;
    this.meow = function(){
        console.log('喵喵')
    }
}

var cat1 = new Cat('大毛','白色')；
var cat2 = new Cat('二毛','黄色');

cat1.meow === cat2.meow // false
```

#### prototype 属性的作用

JavaScript 继承机制的设计思想：==原型对象的所有属性和方法，都能被实例对象共享。如果属性和方法定义在原型上，那么所有实例就能共享。==

==JavaScript 规定，每个函数都有一个 `prototype` 属性，指向一个对象。==

```JavaScript
function f() { }
typeof f.prototype // 'object'
```

对于普通函数来说，该属性基本无用。==对于构造函数来说，生成实例的时候，该属性（`prototype`）会自动成为实例对象的原型。==

```JavaScript
function Animal(name) {
  this.name = name;
}

Animal.prototype.color = 'white';

var cat1 = new Animal('大毛');
var cat2 = new Animal('二毛');

cat1.color // 'white'
cat2.color // 'white'
```

==原型对象的属性不是实例对象自身的属性。只要修改原型对象，变动就会立刻体现在所有实例对象上。==

```JavaScript
Animal.prototype.color = 'yellow';

cat1.color // "yellow"
cat2.color // "yellow"
```

==如果实例对象自身就有某个属性或者方法，它就不会再去原型对象寻找这个属性或者方法。==

```JavaScript
cat1.color = 'black';

cat1.color // 'black'
cat2.color // 'yellow'
Animal.prototype.color // 'yellow';
```

==原型对象的作用，就是定义所有实例对象共享的属性和方法。==

#### 原型链

==JavaScript 规定，所有的对象都有自己的原型对象（`prototype`）。一方面，任何一个对象，都可以充当其它对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”：对象到原型，再到原型的原型……==

==一层一层往上追溯，所有的对象原型最终都可以追溯到 `Object.prototype` ，即 `Object` 构造函数的 `prototype` 属性。`Object.prototype` 的原型是 `null`。`null` 没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是 `null`。==

#### constructor 属性

==`prototype` 对象有一个 `constructor` 属性，默认指向 `prototype` 对象所在的构造函数。==

```JavaScript
function P(){ };

P.prototype.constructor === P // ture
```

==`constructor` 属性表示原型对象与构造函数之间的关联关系，如果修改了原型对象，一般会同时修改 `constructor` 属性，防止引用的时候出错。==

```JavaScript
// 坏的写法
C.prototype = {
    method1:function(...){...}
    // ...
}

// 好的写法
C.prototype = {
    constructor:C,
    method1:function(...){...}
    // ...
}

// 更好的写法
C.prototype.method1 = function(...){...}
```

确定 `constructor` 属性是什么函数，可以使用 `name` 属性，从实例得到构造函数的名称。

```JavaScript
function Foo () { }

var f = new Foo()

f.constructor.name // "Foo"
```

### instanceof 运算符

==`instanceof` 运算符返回一个布尔值，表示对象是否是某个构造函数的实例。==

```JavaScript
var p = new Person();

p instanceof Person // true
```

==由于 `instanceof` 检查整个原型链，因此同一个实例对象，可能会对多个构造函数都返回 `true`。==

```JavaScript
var d = new Date();

d instanceof Date // true
d instanceof Object // true
```

==`instanceof` 运算符只能适用于对象，不适用于原始类型的值。==

### 构造函数继承

#### 思考

现在有一个"动物"对象的构造函数。

```JavaScript
function Animal(){
　this.species = "动物";
}
```

还有一个"猫"对象的构造函数。

```JavaScript
function Cat(name,color){
　　this.name = name;
　　this.color = color;
}
```

怎样才能使"猫"继承"动物"呢？

#### 一、构造函数绑定

第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：

```JavaScript
　　function Cat(name,color){

　　　　Animal.apply(this, arguments);

　　　　this.name = name;

　　　　this.color = color;

　　}

　　var cat1 = new Cat("大毛","黄色");

　　alert(cat1.species); // 动物
```

#### 二、prototype 模式

第二种方法更常见，使用 `prototype` 属性。

如果"猫"的 `prototype` 对象，指向一个 `Animal` 的实例，那么所有"猫"的实例，就能继承 `Animal` 了。

```JavaScript
　　Cat.prototype = new Animal();

　　Cat.prototype.constructor = Cat;

　　var cat1 = new Cat("大毛","黄色");

　　alert(cat1.species); // 动物
```

代码的第一行，我们将 `Cat` 的 `prototype` 对象指向一个 `Animal` 的实例。

```JavaScript
　　Cat.prototype = new Animal();
```

它相当于完全删除了 `prototype` 对象原先的值，然后赋予一个新值。但是，第二行又是什么意思呢？

```JavaScript
　　Cat.prototype.constructor = Cat;
```

原来，任何一个 `prototype` 对象都有一个 `constructor` 属性，指向它的构造函数。如果没有 `"Cat.prototype = new Animal();"` 这一行，`Cat.prototype.constructor` 是指向 `Cat` 的；加了这一行以后，`Cat.prototype.constructor` 指向 `Animal`。

```JavaScript
　　alert(Cat.prototype.constructor == Animal); //true
```

更重要的是，每一个实例也有一个 `constructor` 属性，默认调用 `prototype` 对象的 `constructor` 属性。

```JavaScript
　　alert(cat1.constructor == Cat.prototype.constructor); // true
```

因此，在运行 `"Cat.prototype = new Animal();"` 这一行之后，`cat1.constructor` 也指向 `Animal` ！

```JavaScript
　　alert(cat1.constructor == Animal); // true
```

这显然会导致继承链的紊乱（`cat1` 明明是用构造函数 `Cat` 生成的），因此我们必须手动纠正，将 `Cat.prototype` 对象的 `constructor` 值改为 `Cat`。这就是第二行的意思。

这是很重要的一点，编程时务必要遵守。下文都遵循这一点，即如果替换了 `prototype` 对象，

```JavaScript
　　o.prototype = {};
```

那么，下一步必然是为新的 `prototype` 对象加上 `constructor` 属性，并将这个属性指回原来的构造函数。

```JavaScript
　　o.prototype.constructor = o;
```

#### 三、直接继承 prototype

第三种方法是对第二种方法的改进。由于 `Animal` 对象中，不变的属性都可以直接写入 `Animal.prototype`。所以，我们也可以让 `Cat()` 跳过 `Animal()`，直接继承 `Animal.prototype`。

现在，我们先将 `Animal` 对象改写：

```JavaScript
　　function Animal(){ }

　　Animal.prototype.species = "动物";
```

然后，将 `Cat` 的 `prototype` 对象，然后指向 `Animal` 的 `prototype` 对象，这样就完成了继承。

```JavaScript
　　Cat.prototype = Animal.prototype;

　　Cat.prototype.constructor = Cat;

　　var cat1 = new Cat("大毛","黄色");

　　alert(cat1.species); // 动物
```

与前一种方法相比，这样做的优点是效率比较高（不用执行和建立 `Animal` 的实例了），比较省内存。缺点是  `Cat.prototype` 和 `Animal.prototype` 现在指向了同一个对象，那么任何对 `Cat.prototype` 的修改，都会反映到 `Animal.prototype`。

所以，上面这一段代码其实是有问题的。请看第二行

```JavaScript
　　Cat.prototype.constructor = Cat;
```

这一句实际上把 `Animal.prototype` 对象的 `constructor` 属性也改掉了！

```JavaScript
　　alert(Animal.prototype.constructor); // Cat
```

#### 四、利用空对象作为中介

由于"直接继承 `prototype`"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。

```JavaScript
　　var F = function(){};

　　F.prototype = Animal.prototype;

　　Cat.prototype = new F();

　　Cat.prototype.constructor = Cat;
```

`F` 是空对象，所以几乎不占内存。这时，修改 `Cat` 的 `prototype` 对象，就不会影响到 `Animal` 的 `prototype` 对象。

```JavaScript
　　alert(Animal.prototype.constructor); // Animal
```

我们将上面的方法，封装成一个函数，便于使用。

```JavaScript
　　function extend(Child, Parent) {

　　　　var F = function(){};

　　　　F.prototype = Parent.prototype;

　　　　Child.prototype = new F();

　　　　Child.prototype.constructor = Child;

　　　　Child.uber = Parent.prototype;

　　}
```

使用的时候，方法如下

```JavaScript
　　extend(Cat,Animal);

　　var cat1 = new Cat("大毛","黄色");

　　alert(cat1.species); // 动物
```

这个 `extend` 函数，就是 `YUI` 库如何实现继承的方法。

另外，说明一点，函数体最后一行

```JavaScript
　　Child.uber = Parent.prototype;
```

意思是为子对象设一个 `uber` 属性，这个属性直接指向父对象的 `prototype` 属性。（`uber` 是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。

#### 五、拷贝继承

上面是采用 `prototype` 对象，实现继承。我们也可以换一种思路，纯粹采用"拷贝"方法实现继承。简单说，如果把父对象的所有属性和方法，拷贝进子对象，不也能够实现继承吗？这样我们就有了第五种方法。

首先，还是把 `Animal` 的所有不变属性，都放到它的 `prototype` 对象上。

```JavaScript
　　function Animal(){}

　　Animal.prototype.species = "动物";
```

然后，再写一个函数，实现属性拷贝的目的。

```JavaScript
　　function extend2(Child, Parent) {

　　　　var p = Parent.prototype;

　　　　var c = Child.prototype;

　　　　for (var i in p) {

　　　　　　c[i] = p[i];

　　　　　　}

　　　　c.uber = p;

　　}
```

这个函数的作用，就是将父对象的 `prototype` 对象中的属性，一一拷贝给 `Child` 对象的 `prototype` 对象。

使用的时候，这样写：

```JavaScript
　　extend2(Cat, Animal);

　　var cat1 = new Cat("大毛","黄色");

　　alert(cat1.species); // 动物
```

### 非构造函数继承

#### 思考

什么是"非构造函数"的继承？

比如，现在有一个对象，叫做"中国人"。

```JavaScript
　　var Chinese = {
　　　　nation:'中国'
　　};
```

还有一个对象，叫做"医生"。

```JavaScript
　　var Doctor ={
　　　　career:'医生'
　　}
```

请问怎样才能让"医生"去继承"中国人"，也就是说，我怎样才能生成一个"中国医生"的对象？

这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。

#### 一、object() 方法

`json` 格式的发明人 Douglas Crockford，提出了一个 `object()` 函数，可以做到这一点。

```JavaScript
　　function object(o) {

　　　　function F() {}

　　　　F.prototype = o;

　　　　return new F();

　　}
```

这个 `object()` 函数，其实只做一件事，就是把子对象的 `prototype` 属性，指向父对象，从而使得子对象与父对象连在一起。

使用的时候，第一步先在父对象的基础上，生成子对象：

```JavaScript
　　var Doctor = object(Chinese);
```

然后，再加上子对象本身的属性：

```JavaScript
　　Doctor.career = '医生';
```

这时，子对象已经继承了父对象的属性了。

```JavaScript
　　alert(Doctor.nation); //中国
```

#### 二、浅拷贝

除了使用 `"prototype链"` 以外，还有另一种思路：把父对象的属性，全部拷贝给子对象，也能实现继承。

下面这个函数，就是在做拷贝：

```JavaScript
　　function extendCopy(p) {

　　　　var c = {};

　　　　for (var i in p) { 
　　　　　　c[i] = p[i];
　　　　}

　　　　c.uber = p;

　　　　return c;
　　}
```

使用的时候，这样写：

```JavaScript
　　var Doctor = extendCopy(Chinese);

　　Doctor.career = '医生';

　　alert(Doctor.nation); // 中国
```

但是，这样的拷贝有一个问题。那就是，如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。

请看，现在给 `Chinese` 添加一个"出生地"属性，它的值是一个数组。

```JavaScript
　　Chinese.birthPlaces = ['北京','上海','香港'];
```

通过 `extendCopy()` 函数，`Doctor` 继承了 `Chinese`。

```JavaScript
　　var Doctor = extendCopy(Chinese);
```

然后，我们为 `Doctor` 的"出生地"添加一个城市：

```JavaScript
　　Doctor.birthPlaces.push('厦门');
```

发生了什么事？`Chinese` 的"出生地"也被改掉了！

```JavaScript
　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门

　　alert(Chinese.birthPlaces); //北京, 上海, 香港, 厦门
```

所以，`extendCopy()` 只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"。这是早期 `jQuery ` 实现继承的方式。

#### 三、深拷贝

所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。

```JavaScript
　　function deepCopy(p, c) {

　　　　var c = c || {};

　　　　for (var i in p) {

　　　　　　if (typeof p[i] === 'object') {

　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};

　　　　　　　　deepCopy(p[i], c[i]);

　　　　　　} else {

　　　　　　　　　c[i] = p[i];

　　　　　　}
　　　　}

　　　　return c;
　　}
```

使用的时候这样写：

```JavaScript
　　var Doctor = deepCopy(Chinese);
```

现在，给父对象加一个属性，值为数组。然后，在子对象上修改这个属性：

```JavaScript
　　Chinese.birthPlaces = ['北京','上海','香港'];

　　Doctor.birthPlaces.push('厦门');
```

这时，父对象就不会受到影响了。

```JavaScript
　　alert(Doctor.birthPlaces); //北京, 上海, 香港, 厦门

　　alert(Chinese.birthPlaces); //北京, 上海, 香港
```

目前，`jQuery` 库使用的就是这种继承方法。

### 多重继承

JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。

```JavaScript
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);

// 指定构造函数
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```

上面代码中，子类S同时继承了父类 M1 和 M2 。这种模式又称为 `Mixin`（混入）。

## 模块化

暂时省略

## Object 对象的相关方法

关于面向对象编程，`Object` 对象也提供了相关的方法。

### Object.getPrototypeOf()

==`Object.getPrototypeOf` 方法返回参数对象的原型。这是获取原型对象的标准方法。==

```JavaScript
var F = function(){ }

var f = new F();

Object.getPrototypeOf(f) === F.prototype // true
```

### Object.setPrototypeOf()

==`Object.setPrototypeOf` 方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。==

```JavaScript
var a = { };

var b = {x:1};

Object.setPrototypeOf(a,b);

Object.getPrototypeOf(a) === b // true

a.x // 1
```

### Object.create()

`Object.create` 方法可以实现从一个实例对象，生成另一个实例对象。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。==该实例对象完全继承原型对象的属性。==

```JavaScript
// 原型对象

var A = {
    print:function(){
        console.log('hello')
    }
}

// 实例对象
var B = Object.create(A)

Object.getPrototypeOf(B) === A // true

B.print() // hello
B.print === A.print //true
```

下面三种方式生成的新对象是等价的。

```JavaScript
var obj1 = Object.create({})
var obj2 = Object.create(Object.prototype)
var obj3 = new Object();
```

==如果想要生成一个不继承任何属性（比如没有 `toString` 和 `valueOf` 方法）的对象，可以将 `Object.create` 的参数设为 `null` 。==

```JavaScript
var obj = Object.create(null)

obj.valueOf() // TypeError: Object [object Object] has no method 'valueOf'
```

### Object.prototype.isPrototypeOf

实例对象的 `isPrototypeOf` 方法，用来判断该对象是否为参数对象的原型。

```JavaScript
var o1 = {}
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o2) // true
```

### `Object.prototype.__proto__`

实例对象的属性（前后两个下划线）`__proto__` ，返回该对象的原型，该属性可读写。

```JavaScript
var obj = {}
var p = {}

obj.__proto__ = p
Object.getPrototypeOf(obj) === p // true
```

### 获取原型对象方法比较

获取实例对象 `obj` 的原型对象，有三种方法：

- `obj.__proto__`
- `obj.constructor.prototype`
- `Object.getPrototypeOf(obj)`

==三种方法中，`__proto__` 只有浏览器才需要部署，其它环境可以不部署。而 `obj.constructor.prototype` 在手动改变原型对象时，有可能失效。推荐使用第三种 `Object.getPrototypeOf` 方法，获取原型对象。==

## 对象的拷贝

拷贝一个对象，需要做到下面两点：

- 确保拷贝后的对象，与原对象具有同样的原型
- 确保拷贝后的对象，与原对象具有同样的实例属性

---

# 定时器

## setTimeout()

`setTimeout` 函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

`setTimeout` 函数接受两个参数，第一个参数 `func|code` 是将要推迟执行的函数名或者一段代码，第二个参数 `delay` 是推迟执行的毫秒数。

```JavaScript
var timerId = setTimeout(func|code,delay);
```

## setInterval()

`setInterval` 函数的用法与 `setTimeout` 完全一致，区别仅在于 `setInterval` 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行。

```JavaScript
var i = 1
var timer = setInterval(function() {
  console.log(2);
}, 1000)
```

## clearTimeout()、clearInterval()

`setTimeout` 和 `setInterval` 函数，都返回一个整数值，表示计数器编号。将该整数编号传入 `clearTimeout` 和 `clearInterval` 函数，就可以取消对应的定时器。

```JavaScript
var id1 = setTimeout(f,1000);
var id2 = setInterval(f,1000);

clearTimeout(id1);
clearInterval(id2);
```

