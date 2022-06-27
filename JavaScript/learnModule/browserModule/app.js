const unique=require('uniq');

const module1 = require("./module1.js")
const module2 = require("./module2.js")
const module3 = require("./module3.js")

console.log(module1.name);
console.log(module1);
console.log(module2);
console.log(module3);
console.log(unique(module3.arr));
