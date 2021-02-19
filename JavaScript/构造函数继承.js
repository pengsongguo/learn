function Animal() {
  this.species = "动物";
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

// function Cat(name,color){
//     Animal.call(this,name,color);
//     this.name = name;
//     this.color = color;
// }

// Cat.prototype = new Animal();
// Cat.prototype.constructor = Cat;

// Cat.prototype.species = new Animal();

function extend(Child, Parent) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

var c1 = new Cat("小花", "花色");
console.log(c1.species);
console.log(c1);

console.log(Cat.prototype);
