class Student {
    fullName: string;

    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + middleInitial + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello,${person.firstName}-${person.lastName}`
}

let s1 = new Student('阿尔', '波特', '爱因斯坦')

document.body.innerHTML = greeter(s1)