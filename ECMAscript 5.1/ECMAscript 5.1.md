[toc]


# 基本语法

## 语句

==JavaScript 程序的执行单位为行，也就是一行一行地执行。== 一般情况下，每一行就是一个语句。

语句是为了完成某种任务而进行的操作，比如下面就是一行赋值语句。

```javascript
var a = 1 + 3;
```

`1 + 3` 叫做表达式，指一个为了得到返回值的计算式。==语句和表达式的区别在于，前者主要为了进行某种操作，一般情况下不需要返回值；后者则是为了得到返回值，一定会返回一个值。==

## 变量

### 概念

变量是对“值”的具名引用。变量就是为“值”起名，然后引用这个名字，就等同于引用这个值。变量的名字就是变量名。

```javascript
var a = 1;
```

注意，==JavaScript 的变量名区分大小写，A 和 a 是两个不同的变量。==

### 变量提升

==JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升。==

```javascript
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

JavaScript 使用大括号，将多个相关的语句组合在一起，称为“区块”。==对于 var 命令来说，JavaScript 的区块不构成单独的作用域。==

## 条件语句

### if 结构

`if` 结构先判断一个表达式的布尔值，然后根据布尔值的真伪，执行不同的语句。所谓布尔值，指的是 JavaScript 的两个特殊值，`true` 表示真，`false` 表示伪。

```javascript
if (布尔值){
  语句;  
}
```


### if ... else 结构

`if` 代码块后面，还可以跟一个 `else` 代码块，表示不满足条件时，所要执行的代码。

```javascript
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

```javascript
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

上面代码根据变量 `fruit` 的值，选择执行相应的 `case`。如果所有 `case` 都不符合，则执行最后的 default 部分。==需要注意的是，每个 `case` 代码块内部的 `break` 语句不能少，否则会接下去执行下一个 `case` 代码块，而不是跳出 `switch` 结构。==

### 三元运算符 ? :

JavaScript 还有一个三元运算符（即该运算符需要三个运算子）`x ? x : x `，也可以用于逻辑判断。

```javascript
(条件) ? 表达式1 : 表达式2
```

==上面代码中，如果“条件”为 `true`，则返回“表达式1”的值，否则返回“表达式2”的值。==

## 循环语句

循环语句用于重复执行某个操作，它有多种形式。

### while 循环

`while` 语句包括一个循环条件和一段代码块，只要条件为真，就不断循环执行代码块。

```javascript
while (条件) {
  语句;
}
```

### for 循环

`for` 语句是循环命令的另一种形式，可以指定循环的起点、终点和终止条件。它的格式如下。

```javascript
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

```javascript
do {
  语句
} while (条件);
```

不管条件是否为真，`do ... while` 循环至少运行一次，这是这种结构最大的特点。另外，==while 语句后面的分号注意不要省略。==

### break 语句和 continue 语句

`break` 语句和 `continue` 语句都具有跳转作用，可以让代码不按既有的顺序执行。适用于 `while 、for` 循环等语句。

==`break`语句用于跳出代码块或循环。==

==`continue` 语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。==

---

# 数据类型

## 数据分类

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 `Symbol` 类型的值）

- 数值（`number`）：整数和小数（比如 `1` 和 `3.14`）；
- 字符串（`string`）：文本（比如 `'Hello World'`）；
- 布尔值（`boolean`）：表示真伪的两个特殊值，即 `true`（真）和 `false`（假）；
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值；
- `null`：表示空值，即此处的值为空；
- `Symbol`：表示独一无二的值（ES6 新增）；
- 对象（`object`）：各种值组成的集合。

对象是最复杂的数据类型，又可以分成三个子类型。

- 狭义的对象（`object`）
- 数组（`array`）
- 函数（`function`）

## typeof 运算符

JavaScript 有三种方法，可以确定一个值到底是什么类型。

- `typeof` 运算符
- `instanceof` 运算符
- `Object.prototype.toString` 方法

`typeof` 运算符可以返回一个值的数据类型。

==数值、字符串、布尔值分别返回 `number、string、boolean`；函数返回 `function`、`undefined` 返回 `undefined`、对象返回 `object`、`null` 返回 `object`（历史原因）。==

## null, undefined 和布尔值

### null 和 undefined

`null` 与 `undefined` 都可以表示“没有”，含义非常相似。将一个变量赋值为 `undefined` 或 `null`，老实说，语法效果几乎没区别。

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

```javascript
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

```javascript
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

```javascript
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

```javascript
function myIsNaN(value) {
  return value !== value;
}
```

## 字符串

字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```javascript
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

```javascript
console.log('1\n2')
// 1
// 2
```


### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。

```javascript
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

==对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合。==

```javascript
var obj = {
  foo: 'Hello',
  bar: 'World'
};
```


### 键名

==对象的所有键名都是字符串（ES6 又引入了 `Symbol` 值也可以作为键名），所以加不加引号都可以。==

==对象的属性之间用逗号分隔，最后一个属性后面可以加逗号，也可以不加。==

### 对象的引用

==如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量。==

```javascript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
```

### 表达式还是语句？

```javascript
{ foo: 123 }
```


JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含 `foo`  属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签 `foo`，指向表达式 `123`。

为了避免这种歧义，JavaScript 引擎的做法是，==如果遇到这种情况，无法确定是对象还是代码块，一律解释为代码块。==

```javascript
{ console.log(123) } // 123
```

==如果要解释为对象，最好在大括号前加上圆括号。== 因为圆括号的里面，只能是表达式，所以确保大括号只能解释为对象。

```javascript
({ foo: 123 }) // 正确
({ console.log(123) }) // 报错
```

### 属性操作

#### 属性读取

==读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。==

```javascript
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```


==注意，数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。==

#### 属性赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```javascript
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```

#### 属性的查看

查看一个对象本身的所有属性，可以使用 `Object.keys` 方法。

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);   // ['key1', 'key2']
```

#### 属性的删除：delete 命令

`delete` 命令用于删除对象的属性，删除成功后返回 `true`。

```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

==注意，删除一个不存在的属性，`delete` 不报错，而且返回 `true`。==

```javascript
var obj = {};
delete obj.p // true
```

#### 属性是否存在：in 运算符

==`in` 运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回 `true`，否则返回 `false`。== 它的左边是一个字符串，表示属性名，右边是一个对象。

```javascript
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
```

==`in` 运算符的一个问题是，它不能识别哪些属性是对象自身的，哪些属性是继承的。== 可以使用对象的 `hasOwnProperty` 方法判断一下，是否为对象自身的属性。

```javascript
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

#### 属性的遍历：for...in 循环

`for...in` 循环用来遍历一个对象的全部属性。

```javascript
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

```javascript
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```

## 函数

### 概述

函数是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

#### 函数的声明

JavaScript 有三种声明函数的方法。

##### 1. function 命令

```javascript
function print(s) {
  console.log(s);
}
```

##### 2. 函数表达式

```javascript
var print = function(s) {
  console.log(s);
};
```

##### 3. Function 构造函数（几乎不用）

```javascript
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


#### 函数的重复声明

==如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。==

#### 圆括号运算符，return 语句和递归

调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。

```javascript
function add(x, y) {
  return x + y;
}

add(1, 1) // 2
```

==函数体内部的 `return` 语句，表示返回。JavaScript 引擎遇到 `return` 语句，就直接返回 `return` 后面的那个表达式的值，后面即使还有语句，也不会得到执行。== 也就是说，`return` 语句所带的那个表达式，就是函数的返回值。`return` 语句不是必需的，如果没有的话，该函数就不返回任何值，或者说返回 `undefined`。

==函数可以调用自身，这就是递归。== 下面就是通过递归，计算斐波那契数列的代码。

```javascript
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6) // 8
```

#### 函数名的提升

==JavaScript 引擎将函数名视同变量名，所以采用 `function` 命令声明函数时，整个函数会像变量声明一样，被提升到代码头部。== 所以，下面的代码不会报错。

```javascript
f();

function f() {}
```

但是，如果采用赋值语句定义函数，JavaScript 就会报错。

```javascript
f();
var f = function (){};
// TypeError: undefined is not a function
```

上面的代码等同于下面的形式。

```javascript
var f;
f();
f = function () {};
```

### 函数的属性和方法

#### name

函数的 `name` 属性返回函数的名字。

```javascript
function f1() {}
f1.name // "f1"
```

#### length 属性

函数的 `length` 属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

```javascript
function f(a, b) {}
f.length // 2
```

#### toString()

函数的 `toString` 方法返回一个字符串，内容是函数的源码。

```javascript
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

作用域指的是变量存在的范围。==在 ES5 的规范中，JavaScript 只有两种作用域：一种是全局作用域，变量在整个程序中一直存在，所有地方都可以读取；另一种是函数作用域，变量只在函数内部存在。ES6 又新增了块级作用域，本笔记不涉及。==

==对于顶层函数来说，函数外部声明的变量就是全局变量，它可以在函数内部读取。==

```javascript
var v = 1;

function f() {
  console.log(v);
}

f()
// 1
```

==在函数内部定义的变量，外部无法读取，称为“局部变量”。==

```javascript
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

==函数内部定义的变量，会在该作用域内覆盖同名全局变量。==

```javascript
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

==对于 var 命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。==

```javascript
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

#### 函数内部的变量提升

==与全局作用域一样，函数作用域内部也会产生“变量提升”现象。var 命令声明的变量，不管在什么位置，变量声明都会被提升到函数体的头部。==

```javascript
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

```javascript
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

```javascript
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```



---

# 变量的声明

## JavaScript 5.1

- `var`
- `function`

## ES6

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

```javascript
a ? b : c // a 如果返回 true ，则执行 b ，否则执行 c
```

## 自增和自减

将运算符首先转为数值，然后加上 `1` 或者减去 `1`。它们会修改原始变量。

```javascript
var x = 1;
++x // 2
x // 2

--x // 1
x // 1
```

放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。

```javascript
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

```javascript
'JavaScript'.slice(0, 4) // "Java"
```

## String.prototype.substring()、String.prototype.substr()

用法基本和 `String.prototype.slice()` 一样的，一般建议用 `slice` 方法即可。

## String.prototype.indexOf()、String.prototype.lastIndexOf()

`indexOf` 方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回 -1 就表示不匹配。 `lastIndexOf` 用法和 `indexOf` 基本一样，区别在于从字符串的尾部，向前查找。

```javascript
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
```

支持第二个参数，表示从该位置向后查询。

```javascript
'hello world'.indexOf('o', 6) // 7
```

## String.prototype.trim()

去除字符串两端的空格，返回新的字符串，==不改变原字符串。==

```javascript
'  hello world  '.trim() // "hello world"
```

## String.prototype.toLowerCase()、toUpperCase()

`toLowerCase` 方法用于将一个字符串全部转为小写，`toUpperCase` 则是全部转为大写。==它们都返回一个新字符串，不改变原字符串。==

## String.prototype.match()

用于确定字符串是否匹配某个子字符串，返回一个数组，成员为匹配的第一个字符串。如果没有找到，返回 `null`。

```javascript
'gkasjdlfs'.match('s') // ["s", index: 3, input: "gkasjdlfs", groups: undefined]
'guopengsong'.match('d') // null
```

## String.prorotype.search()

`search` 方法的用法基本等同于 `match`，但是返回的是匹配的第一个索引位置。如果没有找到匹配，返回 `-1`。

```javascript
'asdfghjkl'.search('d') // 2
'asdfsdf'.search('fgse') // -1
```

## String.prototype.replace()

`replace` 方法用于替换匹配的字符串，一般情况下只替换第一个匹配（除非使用带有 `g` 修饰符的正则表达式）。

```javascript
'asdfsadf'.replace('a','---') // "---sdfsadf"
```

## String.prototype.split()

==`split` 方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组。==

```javascript
'a|b|c'.split('|') // ['a','b','c']
```

---

# Number 常见用法

## Number.prototype.toString()

将一个数值转化为字符串形式。

```javascript
(10).toString() // '10'
```

## Number.prototype.toFiexd()

`toFiexd()` 方法先将一个数值转化为指定位数的小数，然后返回这个小数对应的字符串。

```javascript
10.005.toFixed(2) // "10.01"
```

## 全局方法 parseInt()

用于将字符串转为整数，会删除小数部分。

```javascript
parseInt('123') // 123
parseInt('3.4') // 3
```

## 全局方法 parseFloat()

`parseFloat()` 方法用于将一个字符串转为浮点数。

```javascript
parseFloat('3.244') // 3.244
```

## NaN、全局方法 isNaN()

`NaN` 特殊值，表示“非数值”，出现在将字符串解析成数值出错的场合。

`isNaN` 方法可以用来判断一个值是否为 `NaN`。

```javascript
isNaN(NaN) // true
isNaN(213) // false
```

---

# Array 常见用法

`Array` 是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。

## Array.isArray()

返回一个布尔值，表示参数是否为数组，可以弥补 `typeof` 运算符的不足。

```javascript
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

## 绑定 this 的方法

==JavaScript 提供了 `call、apply、bind` 这三个方法，来切换/固定 `this` 的指向。==

### Function.prototype.call()

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

### Function.prototype.apply()

`apply` 方法的作用与 `call` 方法类似，也是改变 `this` 指向，然后再调用该函数。==唯一的区别就是，它接收一个数组作为函数执行时的参数。==

```JavaScript
func.apply(thisValue, [arg1, arg2, ...])
```

### Function.prototype.bind()

`bind` 方法用于将函数体内的 `this` 绑定到某个对象，然后返回一个新函数。

## 构造函数的缺点

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

## prototype 属性的作用

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

## 原型链

==JavaScript 规定，所有的对象都有自己的原型对象（`prototype`）。一方面，任何一个对象，都可以充当其它对象的原型；另一方面，由于原型对象也是对象，所以它也有自己的原型。因此，就会形成一个“原型链”：对象到原型，再到原型的原型……==

==一层一层往上追溯，所有的对象原型最终都可以追溯到 `Object.prototype` ，即 `Object` 构造函数的 `prototype` 属性。`Object.prototype` 的原型是 `null`。`null` 没有任何属性和方法，也没有自己的原型。因此，原型链的尽头就是 `null`。==

## constructor 属性

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

## instanceof 运算符

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

## 构造函数继承

让一个构造函数继承另一个构造函数，是非常常见的需求。这可以分成两步实现。==第一步是在子类的构造函数中，调用父类的构造函数。==

```JavaScript
function Sub(value) {
  Super.call(this);
  this.prop = value;
}
```

上面代码中，`Sub` 是子类的构造函数，`this` 是子类的实例。在实例上调用父类的构造函数 `Super`，就会让子类实例具有父类实例的属性。

==第二步，是让子类的原型指向父类的原型，这样子类就可以继承父类原型。==

```JavaScript
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = '...';
```

上面代码中，`Sub.prototype`  是子类的原型，要将它赋值为 `Object.create(Super.prototype)` ，而不是直接等于 `Super.prototype`。否则后面两行对 `Sub.prototype` 的操作，会连父类的原型 `Super.prototype` 一起修改掉。

举例来说，下面是一个 Shape 构造函数。

```JavaScript
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
```

我们需要让 Rectangle 构造函数继承 Shape。

```JavaScript
// 第一步，子类继承父类的实例
function Rectangle() {
  Shape.call(this); // 调用父类构造函数
}
// 另一种写法
function Rectangle() {
  this.base = Shape;
  this.base();
}

// 第二步，子类继承父类的原型
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
```

采用这样的写法以后，`instanceof` 运算符会对子类和父类的构造函数，都返回 `true`。

```JavaScript
var rect = new Rectangle();

rect instanceof Rectangle  // true
rect instanceof Shape  // true
```

上面代码中，子类是整体继承父类。有时只需要单个方法的继承，这时可以采用下面的写法。

```JavaScript
ClassB.prototype.print = function() {
  ClassA.prototype.print.call(this);
  // some code
}
```

上面代码中，子类B的 `print` 方法先调用父类A的 `print` 方法，再部署自己的代码。这就等于继承了父类A的 `print` 方法。

## 多重继承

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

# DOM 概述

DOM

DOM 是 JavaScript 是操作网页的接口，全称为“文档对象模型”。严格讲，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 常见任务，离开了 DOM ，JavaScript 就无法控制网页。

节点

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM树），就是由各种不同的类型节点组成。每个节点可以看作文档树的一片叶子。

节点类型有 7 种：

Document：整个文档树的顶层节点
DocumentType：doctype 标签
Element：网页的各种 HTML 标签（）
Attribute：网页元素的属性
Text：标签之间或者标签包含的文本
Comment：注释
DocumentFragment：文档的片段

浏览器提供一个原生的节点对象 Node，上面这 7 种节点都继承了 Node，因此有一些共同属性和方法。

节点树

一个文档的所有节点，按照所在的层级，可以抽象成为一种树状结构，这种树状结构就是 DOM 树。

除了根节点，其它节点都有三种层级关系：

父节点关系：直接的那个上级节点
子节点关系：直接的下级节点
同级节点关系：拥有一个父节点的节点

--------------------------------------------------------------------------------

# Node 接口

所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。

Node.prototype.nodeType

nodeType 属性返回一个整数值，表示节点类型。

document.nodeType // 9


不同节点的 nodeType 属性值：

文档节点（document）：9，对应常量 Node.DOCUMENT_NODE
元素节点（element）：1，对应常量 Node.ELEMENT_NODE
属性节点（attr）：2，对应常量 Node.ATTRIBUTE_NODE
文本节点（text）：3，对应常量 Node.TEXT_NODE
文档片断节点（DocumentFragment）：11，对应常量 Node.DOCUMENT_FRAGMENT_NODE
文档类型节点（DocumentType）：10，对应常量 Node.DOCUMENT_TYPE_NODE
注释节点（Comment）：8，对应常量 Node.COMMENT_NODE

常用的节点为元素节点、属性节点、文本节点，其它了解即可，需要时请查阅相关文档。

Node.prototype.nodeName

nodeName 属性返回节点的名称。

var div = document.getElementById('d1');
div.nodeName // "DIV"


不同节点的 nodeName 属性值如下：

文档节点（document）：#document
元素节点（element）：大写的标签名
属性节点（attr）：属性的名称
文本节点（text）：#text
文档片断节点（DocumentFragment）：#document-fragment
文档类型节点（DocumentType）：文档的类型
注释节点（Comment）：#comment

Node.prototype.nodeValue

nodeValue 属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。

只有文本节点（text）、注释节点（comment）和属性节点（attr）有文本值，因此这三类节点 nodeValue 可以返回结果，其它节点一律返回 null 。

Node.prototype.textContent

textContent 属性返回当前节点和它的后代节点的文本内容。该属性可读写，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它可以自动对 HTML 标签转义。

// HTML 代码为
// <div id="divA">This is <span>some</span> text</div>

document.getElementById('divA').textContent;
//This is some text


textContent 属性自动忽略当前节点内部的 HTML 标签，返回所有文本内容。

Node.prototype.nextSibling

Node.nextSibling 属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回 null。

// HTML 代码如下
// <div id="d1">hello</div><div id="d2">world</div>

var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');

d1.nextSibling === d2 // true


该属性还包括文本节点和注释节点（）。因此，如果当前节点后面有空格，该属性会返回一个文本节点，内容为空格。

Node.prototype.previousSibling

previousSibling 属性返回当前节点前面的、距离最近的同级节点。如果当前节点前面没有同级节点，则返回 null 。用法和 nextSibling 完全一样。

Node.prototype.parentNode

parentNode 属性返回当前节点的父节点。对于一个节点来说，它的父节点只有可能是三种类型：元素节点（element）、文档节点（document）、和文档片段节点（documentfragment）。

Node.prototype.parentElement

parentElement 属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回 null。

Node.prototype.firstChild、Node.prototype.lastChild

firstChild 属性返回当前节点的第一个子节点，如果当前节点没有子节点，则返回 null。
lastChild 属性返回当前节点的最后一个子节点，如果当前节点没有子节点，则返回 null，用法与 firstChild 属性相同。

// HTML 代码如下
// <p id="p1"><span>First span</span></p>

var p1 = document.getElementById
p1.firstChild.nodeName // "SPAN"


注意，firstChild 返回的除了元素节点，还可能是文本节点或者注释节点。

// HTML 代码如下
// <p id="p1">
//  <span>First span</span>
// </p>

var p1 = document.getElementById('p1')
p1.firstChild.nodeName // "#text"


注意节点二字的含义。

Node.prototype.childNodes

childNodes 属性返回一个类似数组的对象（NodeList 集合），成员包括当前节点的所有子节点。注意，除了元素节点，childNodes 属性返回值还包括文本节点和注释节点。

Node.prototype.appendChild()

appendChild() 方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。如果参数节点是 DOM 已经存在的节点，appendChild() 方法会将其从原来的位置，移动到新位置。

var p = document.createElement('p');
document.body.appendChild(p);


Node.prototype.cloneNode()

cloneNode 方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。返回值是一个克隆出来的新的节点。

var cloneUl = document.querySelect('ul').cloneNode(ture);


使用注意点：

克隆一个节点，会拷贝节点所有属性，但是会丧失 addEventLister 方法和 on- 属性等事件。
该方法返回的节点不在文档之中，即没有任何父节点，必须使用 Node.appendChild 这样的方法添加到文档中。
克隆一个节点后，DOM 有可能会出现两个相同 id 属性的网页元素，需要手动修改。

Node.prototype.insertBefore()

insertBefore 方法用于将某个节点插入父节点内部的指定位置。

var insertedNode = parentNode.insertBefore(newNode,referenceNode);


第一个参数是要插入的节点 newNode，第二个参数是父节点 parentNode 内部的一个子节点 referenceNode。newNode 将插在 referenceNode 这个子节点的前面。

Node.prototype.removeChild()

removeChild 方法接受一个子节点作为参数，用于从当前节点移除该子节点。返回值是移除的子节点。

var divA = document.getElementById('A');
divA.parentNode.removeChild(divA);


--------------------------------------------------------------------------------

# NodeList接口、HTMLCollection接口

DOM 提供两种节点集合，用于容纳多个节点：NodeList 和 HTMLCollection。

NodeList 可以包含各种类型的节点，HTMLCollection 只包含 HTML 元素节点。

如下方法可以得到 NodeList 实例：

Node.childNodes
document.querySelectorAll() 等节点搜索

NodeList 实例很像数组，可以使用 length 属性和 forEach 方法。但是它不是真正的数组，不能使用 pop 或则 push 之类的数组特有方法。

HTMLCollection 是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与NodeList 接口不同，HTMLCollection 没有 forEach 方法，只能使用for 循环遍历。

--------------------------------------------------------------------------------

# ParentNode 接口、ChildNode 接口

节点对象除了继承 Node 接口以外，还拥有其他接口。ParentNode 接口表示当前节点是一个父节点，提供一些处理子节点的方法。ChildNode 接口表示当前节点是一个子节点，提供一些相关方法。

ParentNode 接口

由于只有元素节点（element）、文档节点（document）和文档片段节点（documentFragment）拥有子节点，因此只有这三类节点会拥有 ParentNode 接口。

ParentNode.children

children 属性返回一个 HTMLCollection 实例，成员是当前节点的所有元素子节点，该属性只读。

ParentNode.firstElementChild、ParentNode.lastElementChild

firstElementChild 属性返回当前节点的第一个元素子节点。
lastElementChild 属性返回当前节点的最后一个元素子节点。

ParentNode.append()、ParentNode.prepend()

append 方法为当前节点追加一个或者多个子节点，位置是最后一个元素节点的后面。该方法不仅可以添加元素子节点，还可以添加文本子节点。

var parent = document.body;

// 添加元素子节点
var p = document.createElement('p');
parent.append(p);

// 添加文本节点
parent.append('Hello');


prepend 方法为当前节点追加一个或者多个子节点，位置是第一个元素子节点的前面。该方法不仅可以添加元素子节点，还可以添加文本子节点。

ChildNode 接口

如果一个节点有父节点，那么该节点就拥有了 ChildNode 接口。

ChildNode.remove()

remove 方法用于从父节点移除当前节点。（移除的是当前节点，也就是自己）

el.remove()


上面代码在 DOM 里面移除了 el 节点。

ChildNode.before()、ChildNode.after()

before 方法用于在当前节点的前面，插入一个或者多个同级节点。两者拥有相同的父节点。该方法不仅可以插入元素节点，还可以插入文本节点。

var p = document.createElement('p');
var p1 = document.createElement('p');

// 插入元素节点
el.before(p);

// 插入文本节点
el.before('Hello');


after 方法用于在当前节点的后面，插入一个或多个同级节点，两者拥有相同的父节点。用法与before 方法完全相同。

--------------------------------------------------------------------------------

# Document 节点

document 节点代表整个文档，每张网页都有自己的 document 对象，这里只记录一些常用属性和方法、其余略。

document.querySelect()、document.querySelectorAll()

document.querySelect 方法接受一个 css 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。

var el1 = document.querySelect('.myclass')
var el2 = document.querySelect('#id')


document.querySelectAll 方法与 querySelect 用法类似，区别是返回一个 NodeList 对象，包含所有匹配给定选择器的节点。

elementList = document.querySelectAll('.myclass')


这两个方法除了定义在 document 对象上，还定义在元素节点上，即在元素节点上也可以使用。

document.getElementsByTagName()

document.getElementByTagName 方法搜索 HTML 标签名，返回符合条件的元素。返回值是类似数组对象，HTMLCollection实例。

var allElements = document.getElementsByTagName('p')


document.getElementsByClassName()

document.getElementsByClassName 方法返回一个类似数组的对象（HTMLCollection实例），包含了所有 class 名字符合指定条件的元素。

var elements = document.getElementsByClassName('foo bar')


上面代码返回同时具有 foo 和 bar 两个 class 的元素。

document.getElementById()

document.getElementById 方法返回匹配指定 id 属性的元素节点。

document.createElement()

document.createElement 方法用来生成元素节点，并返回该节点。

var newDiv = document.createElement('div');


createElement 方法的参数为元素的标签名，即元素节点的 tagName 属性。

document.createTextNode()

document.createTextNode 方法用来生成文本节点（Text实例），并返回该节点，它的参数是文本节点的内容。

var newDiv = document.createElement('div');
var newContent = document.createTextNode('hello');
newDiv.appendChild(newContent);


document.createAttribute()

document.createAttribute 方法生成一个新的属性节点（Attr实例），并返回它。

--------------------------------------------------------------------------------

# Element 节点

Element 节点对象对应网页的 HTML 元素。每一个 HTML 元素，在 DOM 树上都会转化成一个 Element 节点对象（以下简称元素节点）。

元素节点的 nodeType 属性都是 1 。

var p = document.querySelect('p');
p.nodeName // "P"
p.nodeType // 1


Element 对象继承了 Node 接口，因此 Node 的属性和方法在 ELement 对象都存在。

Element.id

Element.id 属性返回指定元素的 id 属性，该属性可读写。

// HTML 代码为 <p id="foo">

var p = document.querySelect('#foo')
p.id // 'foo'


Element.tagName 

Element.tagName 属性返回指定元素的大写标签名，与 nodeName 属性的值相等。

Element.attributes

返回一个类似数组的对象，成员是当前元素节点的所有属性节点。

Element.className，Element.classList

className 属性用来读写当前元素节点的 class 属性。它的值是一个字符串，每个 class 之间用空格分割。

classList 属性返回一个类似数组的对象，当前元素节点的每个 class 就是这个对象的成员。

// HTML 代码 <div class="one two three" id="myDiv"></div>
var div = document.getElementById("myDiv")

div.className // "one two three"

div.classList
// {
//   0: "one"
//   1: "two"
//   2: "three"
//   length: 3
// }


classList 对象有下列方法：

add（）：增加一个 class
remove（）：移除一个 class
contains（）：检查当前元素是否包含某个 class
toggle（）：将某个 class 移入或移出当前元素
item（）：返回指定索引位置的 class
toString（）：将 class 的列表转换为字符串

Element.dataset

网页元素可以自定义 data- 属性，用来添加数据。

<div data-timestamp="1343244234214234234"></div>


ELement.dataset 属性返回一个对象，可以从这个对象读写 data- 属性。获取的属性转换成 JavaScript 对应的 dataset 属性名，规则如下：

开头的 data- 会省略
如果连词线后面跟了一个英文字母，那么连词线会取消，该字母变成大写（驼峰命名）
其它字符不变

Element.innerHTML

Element.innerHTML 属性返回一个字符串，等同于该元素包含的所有 HTML 代码。该属性可读写，常用来设置某个节点的内容。它能改写所有元素节点的内容，包括 <html> 和 <body> 元素。innerHMTL 有安全风险，如果想得到或者插入的是文本，最好使用 element.textContent 来代替。

Element.outerHTML

Element.outerHTML 属性返回一个字符串，表示当前元素节点的所有 HTML 代码，包括该元素本身和所有子元素。

// HTML 代码如下
// <div id="d"><p>Hello</p></div>

var d = document.getElementById('d')
d.outerHTML
// '<div id="d"><p>Hello</p></div>'


outerHTML 属性可读写，对它进行赋值，等于替换掉当前元素。

Element.clientHeight，Element.clientWidth

Element.clientHeight 属性返回一个整数值，表示元素节点的 css 高度（单位像素），只对块儿级元素生效，对于行内元素返回 0 。如果没有设置 css 高度，则返回实际高度。

除了元素本身高度，还包括 padding 部分，但是不包括 border、margin。注意这个值始终是整数，如果是小数会被四舍五入。

Element.clientWidth 属性返回元素节点的宽度，用法和特点与 Element.clientHeight 完全一样。

Element.clientLeft，Element.clientTop

Element.clientLeft 属性等于元素节点左边框（left border）的宽度（单位像素），不包括左侧 padding 和 margin。element.clientTop 表示顶部边框的宽度，用法与 clientLeft 相同。

Element.scrollHeight，Element.scrollWidth

Element.scrollHeight 属性返回一个整数值（小数会四舍五入），表示当前元素的总高度（单位像素），包括溢出容器、当前不可见的部分。它包括 padding，但是不包括 border、margin 以及水水平滚动条的高度（如果有滚动条的话），还包括伪元素（::before 或 ::after）的高度。

Element.scrollWidth 表示总宽度，其它和 scrollHeight 特点相同。

Element.scrollLeft，Element.scrollTop

Element.scrollLeft 属性表示当前元素的水平滚动条向右侧滚动的像素数量，Element.scrollTop 属性表示当前元素的垂直滚动条向下滚动的像素数量。

document.documentElement.scrollLeft
document.documentElement.scrollTop


这两个属性都可读写，设置该属性的值，会导致浏览器将当前元素自动滚动到相应的位置。

Element.offsetParent

Element.offsetParent 属性返回最靠近当前元素的、并且 css 的 position 属性不等于 static 的上层元素。

Element.offsetHeight，Element.offsetWidth

Element.offsetHeight 属性返回一个整数，表示元素的 css 垂直高度（单位像素），包括元素自身的高度、padding 和 border，以及水平滚动条的高度（如果存在滚动条）。

Element.offsetWidht 返回水平宽度，其它用法与 Element.offsetHeight 相同。

这两个属性只读，只比 Element.clientHeight 和 Element.clientWidht 多了边框的高度或宽度。

Element.offsetLeft，Element.offsetTop

Element.offsetLeft 返回当前元素左上角相对于 Element.offsetParent 节点的水平位移，Element.offsetTop 返回垂直位移，单位为像素。通常，这两个值指相对于父节点的位移。

Element.children，Element.childrenElementCount

Element.children 属性返回一个类似数组的对象（HTMLCollection实例），包括当前元素节点的所有子元素。这个属性与 Node.childNodes 属性的区别是，它只包括元素类型的子节点，不包括其他类型的子节点。Element.childElementCount 属性返回当前元素节点包含的子元素节点个数。

Element.firstElementChild，Element.lastElementChild

Element.firstElementChild 属性返回当前元素的第一个元素的子节点，Element.lastElementChild 返回最后一个元素子节点。

Element.nextElementSibling，Element.previousElementSibling

Element.nextElementSibling 属性返回当前元素节点的后一个同级元素节点。Element.previousElementSibling属性返回当前元素节点的前一个同级元素节点。

Element.querySelector（）

用法和 document.querySelector 方法相同。

Element.querySelectAll（）

用法和 document.querySelectAll 方法相同。

Element.getElementsByClassName（）

该方法与 document.getElementsByClassName 方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

Element.getElementsByTagName（）

该方法与 document.getElementsByClassName 方法的用法类似，只是搜索范围不是整个文档，而是当前元素节点。

Element.scrollIntoView（）

Element.scrollIntoView 方法滚动当前元素，进入浏览器的课件区域。

--------------------------------------------------------------------------------

# 属性的操作

元素节点提供 6 个方法，来操作属性：

getAttribute（）：读取某个属性的值
getAttributeNames（）：返回当前元素的所有属性名
setAttribute（）：写入属性值
hasAttribute（）：某个属性是否存在
hasAttributes（）：当前元素是否有属性
removeAttribute（）：删除属性

--------------------------------------------------------------------------------

# CSS 操作

CSS 与 JavaScript 是两个有着明确分工的领域。有时候还会不可避免交叉相互配合，下面介绍几个常用的 JavaScript 操作 CSS 的方法。

HTML 元素的 style 属性

操作 CSS 样式最简单的方法，就是使用网页元素节点的 getAttribute（）方法、setAttribute（）方法和 removeAttribute（）方法，直接读写或者删除网页元素的 style 属性。

div.setAttribute('style','background-color:red;'+'border:1px solid black;')


以上代码相当于：

```html
<div style="background-color:red;border:1px solid black;" />
```

style 不仅可以使用字符串读写，style 本身也是一个对象，部署了 CSSStyleDeclaration 接口，可以直接读写个别属性。

e.style.fontSize = '18px';
e.style.color = 'black';


CSSStyleDeclaration 接口

元素节点的 style 属性（element.style）部署了该接口，可以直接读写 CSS 的样式属性，不过，连词号需要变成驼峰拼写法。

var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';

divStyle.backgroundColor // red
divStyle.border // 1px solid black
divStyle.height // 100px
divStyle.width // 100px


--------------------------------------------------------------------------------

# EventTarget 接口

DOM 的事件操作（监听和触发），都定义在 EventTarget 接口。所有节点对象都部署了这个接口，其它一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。

该接口主要提供 3 个实例方法：

addEventListener：绑定事件的监听函数
removeEventListener：移除事件的监听函数
dispatchEvent：触发事件

EventTarget.addEventListener（）

EventTarget.addEventListener（）用于在当前节点或对象上，定义一个特定事件的监听函数。一旦这个事件发生，就会执行监听函数。该方法没有返回值。

target.addEventListener（type,listener,useCapture）


该方法接受三个参数：

type：事件名称，大小写敏感
listener：监听函数。事件发生时，会调用该监听函数
useCapture：布尔值，表示监听函数是否在捕获阶段触发，默认为 false （监听函数只在冒泡阶段触发）。该参数可选。

function hello(){
    console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click',hello,false);


上述案例，button 节点的 addEventListener 方法绑定 click 事件的监听函数 hello，该函数只在冒泡阶段触发。

第二个参数除了监听函数，还可以是一个具有 handleEvent 方法的对象。

buttonElement.addEventListener('click',{
    handleEvent:function(event){
        console.log('click);
    }
});


第三个参数除了布尔值 useCapture，还可以是一个属性配置对象。该对象有以下属性：

capture：布尔值，表示该事件是否在捕获阶段触发监听函数
once：布尔值，表示监听函数是否只触发一次，然后自动移除
passive：布尔值，表示监听函数不会调用事件的 preventDefault 方法。

element.addEventListener('click',function(event){
    // 只执行一次的代码
},{once:true})


addEventListener 方法可以针对当前的对象的同一个事件，添加多个不同的监听函数。这些函数按照添加顺序触发，即先添加的先触发。如果为同一个事件多次添加同一个监听函数，该函数只会执行一次，多余的添加将自动被去除（不必使用removeEventListener方法手动去除）。

EventTarget.removeEventListener（）

EventTarget.removeEventListener 方法用来移除 addEventListener 方法添加的事件监听函数，该方法没有返回值。

div.addEventListener('click',listener,false);
div.removeEventListener('click',listener,false);


removeEventListener方法的参数，与addEventListener方法完全一致。它的第一个参数“事件类型”，大小写敏感。

注意，removeEventListener方法移除的监听函数，必须是addEventListener方法添加的那个监听函数，而且必须在同一个元素节点，否则无效。

EventTarget.dispatchEvent（）

EventTarget.dispatchEvent 方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了 Event.preventDefault（），则返回 false，否则为 true。

target.dispatchEvent(event)


despatchEvent 方法的参数是一个 Event 对象的实例。

para.addEventListener('click',hello,false);

var event = new Event('click');

para.dispatchEvent(event);


上面代码在当前节点触发了 click 事件。

--------------------------------------------------------------------------------

# 事件模型

浏览器的事件模型，就是通过监听函数对事件做出反应。事件发生后，浏览器监听到了这几个事件，就会执行对应的监听函数。这是事件驱动编程模式的主要编程方式。

JavaScript 有三种方法，可以为事件绑定监听函数。

方法一：HTML 的 on- 属性

HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。

<body onload="doSomethind()">
<div onclick="console.log('触发事件')">


元素的事件监听属性，都是 on 加上事件名。

注意，这些属性的值是将会执行的代码，而不是一个函数。

// 正确

<body onload="doSomething()">

//错误

<body onload="doSomething">


使用这个方法指定的监听代码，只会在冒泡阶段触发。

直接设置 on- 属性，与通过元素节点的 setAttribute 方法设置 on- 属性，效果是一样的。

el.setAttribute('onclick','doSomething()');
// 等同于
// <Element onclick="doSomething()">


该方法违反了 HTML 与 JavaScript 代码相分离的原则，不利于代码分工，不推荐使用。

方法二：元素节点的事件属性

元素节点对象的事件属性，同样也可以指定监听函数。

window.onload = doSomething;

div.onclick = function(event){
    console.log('触发事件');
}


使用这个方法指定的监听函数，也是只会在冒泡阶段触发。与 HTML 的 on- 属性的差别是，它的值是函数名（doSomething）,而不像后者，必须给出完整的监听代码（doSomething（））。

该方法缺点在于同一个事件只能定义一个监听函数，不推荐使用。

方法三：EventTarget.addEventListener（）

所有 DOM 节点实例都有 addEventListener 方法，用来为该节点定义事件的监听函数。

window.addEventListener('load',doSomething,false);


该方法推荐使用，有如下优点：

同一个事件可以添加多个监听函数
能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数
除了 DOM 节点，其它对象（比如 window、XMLHttpRequest 等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口

this 的指向

三种方法监听函数内部的 this 指向触发事件的那个元素节点。

<button id="btn" onclick="console.log(this.id)">点击</button>
// btn 


事件的传播

一个事件发生后，会在子元素和父元素之间传播，这种传播分为三个阶段：

第一阶段：从 window 对象传导到目标节点（上层传到底层），称为“捕获阶段”。
第二阶段：在目标节点上触发，称为“目标阶段”。
第三阶段：从目标节点传导回 window 对象（从底层传回上层），称为“冒泡阶段”。

事件的代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素事件。这种方法叫做事件的代理。

var ul = document.querySelector('ul');

ul.addEventListener('click',function(event){
    if(event.target.tagName.toLowerCase() === 'li'){
        // some code
    }
})


事件对象的 stopPropagation 方法可以使事件到某个节点为止，不再传播。

// 事件传播到 p 元素后，就不再向下传播了
p.addEventListener('click',function(event){
    event.stopPropagation();
},true)

// 事件冒泡到 p 元素后，就不再向上冒泡了
p.addEventListener('click',function(event){
    event.stopPropagation();
},false)


--------------------------------------------------------------------------------

# Event 对象

事件发生以后，会产生一个事件对象，作为参数传递给监听函数。浏览器原生提供一个 Event 对象，所有的事件都是这个对象的实例，或者继承了 Event.prototype 对象。此处仅做几个常用属性、方法介绍，其余略。

Event.currentTarget、Event.target

事件发生以后，会经过捕获和冒泡两个阶段，依次通过多个 DOM 节点。因此，任意时点都有两个与事件相关的节点，一个是事件的原始触发节点（Event.target），另一个是事件当前正在通过的节点（Event.currentTarget）。前者通常是后者的后代节点。

Event.currentTarget 属性返回事件当前所在的节点，即事件当前正在通过的节点，也就是当前正在执行的监听函数所在的那个节点。随着事件的传播，这个属性的值会变。

Event.target 属性返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。

// HTML 代码为
// <p id="para">Hello <em>World</em></p>

function hide(e){
    // 不管点击 Hello 或 World，总是返回 true
    console.log(this === e.currenttTarget)
    
    // 点击 Hello，返回 true
    // 点击 World，返回 false
    console.log(this === e.target)
}

document.getElementById('para').addEventListener('click'hide,false);



Event.preventDefault（）

Event.preventDefault 方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器会默认跳转到另一个页面，使用这个方法后就不会跳转了。该方法生效的前提是，事件对象的 cancelable 属性为 true，如果为 false，调用该方法没有任何效果。

注意，该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。如果要阻止传播，可以使用 stopPropagation（）或者 stopImmediatePropagation（）方法。

// HTML 代码为
// <input type="checkbox" id="my-checkbox" />
var cb = document.getElementById('my-checkbox');

cb.addEventListener('click',function(e){
    e.preventDefault()
},false)


上述代码，浏览器的默认行为是单击会选中单选框，取消这个行为，就会导致无法选中单选框。

Event.stopPropagation（）

stopPropagation 方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其它的事件监听函数。

Event.stopImmediatePropagation（）

Event.stopImmediatePropagation 方法阻止同一个事件的其他监听函数被调用，不管监听函数定义在当前节点还是其他节点。也就是说，该方法阻止事件的传播，比 Event.stopPropagation() 更彻底。

--------------------------------------------------------------------------------

# 常见事件种类

鼠标事件

click：按下鼠标（通常是按下主按钮）时触发
dbclick：在同一个元素上双击鼠标时触发
mousemove：当鼠标在一个节点内部移动时触发，当鼠标移动时，该事件会连续触发
mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件
mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件
mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件
contextmenu：按下鼠标右键时（上下文菜单出现前）触发
wheel：滚动鼠标滚轮时触发

MouseEvent 接口代表了鼠标相关的事件，单击、双击、松开鼠标、拖拽滑动等。相关接口方法使用时查阅相关文档。

键盘事件

keydown：按下键盘时触发
keypress：按下有值的键时触发，即按下 Ctrl、Alt、Shift 等这样无值的键，这个事件不会触发
keyup：松开键盘时触发该事件

KeyboardEvent 接口用来描述用户与键盘的互动。这个接口继承了 Event 接口，并且定义了自己的实例和方法。相关接口方法使用时查阅相关文档。

进度事件

进度事件用来描述资源的加载进度，主要由 AJAX 请求、<img>、<audio>、<video>、<style>、<link>等外部资源加载触发，继承了 ProgressEvent 接口。主要有以下几种事件：

abort：外部资源中止加载时（比如用户取消）触发。如果发生错误导致中止，不会触发该事件
error：由于错误导致外部资源无法加载时触发
load：外部资源加载成功时触发
loadstart：外部资源开始加载时触发
loadend：外部资源停止加载时触发
progress：外部资源加载过程中不断触发
timeout：加载超时时触发

ProgressEvent 接口主要用来描述外部资源加载的进度，比如 AJAX 加载、<img>、<video>、<style>、<link>等外部资源加载。进度相关的事件都继承了这个接口。

表单事件

input 事件：当 <input>、<select>、<textarea> 的值发生变化时触发。特点是连续触发，用户每按下一次按键，就会触发一次 input 事件。input 事件和 change 事件很像，不同之处在于 input 事件在元素的值发生变化后立即发生，而 change 在元素失去焦点时发生，而此内容可能已经发生多次变化
select 事件：select 事件当在 <input>、<textarea>里面选中文本时触发
change事件：当 <input>、<select>、<textarea> 的值发生变化时触发
submit事件：该事件发生在表单对象 <form> 上，而不是发生在表单成员上；submit 事件当表单数据向服务器提交时触发

InputEvent 接口主要用来描述 input 事件的实例。该接口继承了 Event 接口，还定义了一些自己的实例属性和实例方法。

触摸事件

触摸引发的事件，有以下几种：

touchstart：用户刚开始触摸时触发、它的 target 属性返回发生触摸的元素节点
touchend：用户不再接触触摸屏时（或者移除屏幕边缘）触发，它的 target 属性与 touchstart 事件一致的，就是开始触摸时所在的元素节点。
touchmove：用户移动触摸点时触发，它的target属性与touchstart事件一致。如果触摸的半径、角度、力度发生变化，也会触发该事件
touchcancel：触摸点取消时触发，比如在触摸区域跳出一个模态窗口（modal window）、触摸点离开了文档区域（进入浏览器菜单栏）、用户的触摸点太多，超过了支持的上限（自动取消早先的触摸点）

其它事件

load 事件在页面或某个资源加载成功时触发。注意，页面或资源从浏览器缓存加载，并不会触发 load 事件
postate 事件会在浏览器的 history 对象的当前记录发生显示切换（指鼠标点击“后退/前进”等操作，不包含调用 history.pushState 或者 history.replaceState 方法）时触发。
hashchange 事件在 URL 的 hash 部分（即#号后面的部分，包括#号）发生变化时触发。该事件一般在 window 对象上监听
readystatechange：当 Document 对象和 XMLHttpRequest 对象的 readyState 属性发生变化时触发
scroll：在文档或文档元素滚动时触发，主要出现在用户拖动滚动条。会连续地大量触发，所以它的监听函数之中不应该有非常耗费计算的操作。推荐的做法是使用requestAnimationFrame或setTimeout控制该事件的触发频率，然后可以结合customEvent抛出一个新事件。
resize：在改变浏览器窗口大小时触发，主要发生在window对象上面
focus：元素节点获得焦点后触发，该事件不会冒泡
blur：元素节点失去焦点后触发，该事件不会冒泡
