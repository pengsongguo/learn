var arr1 = ['a', 'b', 'c'];

// console.log(Array.isArray(arr1));
//
// console.log(arr1.push('d'));
// console.log(arr1);
//
// console.log(arr1.pop());
//
// console.log(arr1);
//
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.unshift('1'));
// console.log(arr1);
//
// console.log(arr1.join('0'));
// console.log(arr1);
// console.log(arr1.splice(0, 2));
// console.log(arr1);

// var arr2=arr1.map(function (v,i) {
//   return v+'3';
// });
// console.log(arr2);

console.log(arr1.filter(function (v) {
    return v === 'b';
}));

for(let v in arr1){
    console.log(v);
}

var arr=Array.prototype.slice.call(arr1)
