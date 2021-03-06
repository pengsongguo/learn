//JavaScript作用域分为全局作用域和函数作用域
//函数内部可以访问函数外部的变量，而函数外部不能访问函数内部的变量

//闭包就是在函数内部再定义函数，用作用域向上查找的特点，访问函数内部变量

function f1() {
    var a = 123;

    function f2() {
        console.log(a);
    }

    return f2();
}

f1();

//外层函数每次运行，都会形成新的闭包，存在于内存中，滥用的会有性能问题消耗内存很大