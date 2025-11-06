class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }

  displayInfo() {
    console.log(`Manager Name: ${this.name}, Salary: ₹${this.salary}, Department: ${this.department}`);
  }
}

const mgr1 = new Manager("Vijaya", 60000, "IT");
mgr1.displayInfo();