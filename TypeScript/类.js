var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + middleInitial + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello,".concat(person.firstName, "-").concat(person.lastName);
}
var s1 = new Student('阿尔', '波特', '爱因斯坦');
document.body.innerHTML = greeter(s1);
