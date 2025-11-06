class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}
const s1 = new Student("Vijaya", 22, "IT");
const s2 = new Student("Ashok", 23, "CS");
Student.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name} and I study ${this.course}.`);
};
s1.greet();
s2.greet();