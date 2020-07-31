class Person {
    constructor() {
        this.keMu = '灵长类动物'
    }

    teZheng() {
        console.log('会使用工具');
    }

    ziJi(){
        console.log(this)
    }

    static nianXian(){
        console.log('已经存在于地球500万年');
    }

    shuXing='属性'

    fangFa=()=>{
        console.log(123);
    }
}

// console.log(Person);
//
// const p1 = new Person();
//
// console.log(p1);
// console.log(p1.teZheng());

//类本身就指向构造函数
// console.log(Person === Person.prototype.constructor);

//类内部所有的属性和方法都是不可枚举的
console.log(Object.getOwnPropertyNames(Person.prototype));

//类必须使用new调用，否则报错
// console.log(Person());

const p2=new Person();

console.log(p2);
//静态方法
// console.log(p2.nianXian);
// console.log(Person);
// console.log(p2.ziJi());