interface person {
    xing:string,
    ming:string
}

function sayHi(person){
    return `你好，我是${person.xing}-${person.ming}`
}

let a={xing:'周',ming:'结论'}
sayHi(a)