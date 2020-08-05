async function foo() {
    await f1();
    await f2()
}

function f1() {
    console.log(1);
}

function f2() {
    console.log(2);
}

foo().then(function (a,b) {
    console.log(a);
})