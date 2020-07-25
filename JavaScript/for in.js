let obj = {
    a: 'a1',
    b: 'b2',
    c: 'c3'
};

console.log(obj);

console.log('a' in obj);

for(let v in obj){
    if(obj.hasOwnProperty(v)){
        console.log(v);
    }
};