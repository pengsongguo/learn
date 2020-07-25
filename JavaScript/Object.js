var obj = {
    name: '张三',
    age: 19,
    work: function () {
        console.log('写代码');
    }
};

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));