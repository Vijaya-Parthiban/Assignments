class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
const s1 = new Student("Vijaya", 22, "A");
const s2 = new Student("Ashok", 22, "B");
const s3 = new Student("Anu", 21, "A+")
s1.display();
s2.display();
s3.display();