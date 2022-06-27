function sayHi(person) {
    return "\u4F60\u597D\uFF0C\u6211\u662F".concat(person.xing, "-").concat(person.ming);
}
var a = { xing: '周', ming: '结论' };
sayHi(a);
