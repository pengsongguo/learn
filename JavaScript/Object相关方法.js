function f() {

}

var obj={
    name:'guo'
};

f.prototype=obj;
Object.setPrototypeOf(f,obj);

console.log(Object.getPrototypeOf(f));