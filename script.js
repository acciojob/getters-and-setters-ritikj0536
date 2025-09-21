class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }
}

// Student class extends Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Teacher class extends Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// ----------------------
// Example Usage
// ----------------------

// Creating a Person instance
const person = new Person("John", 25);
console.log(person.name);  // Output: John

person.age = 30;  // Using the setter to change the age
console.log(person.age);  // Output: 30

// Creating a Student instance
const student = new Student("Alice", 22);
student.study();  // Output: Alice is studying

// Creating a Teacher instance
const teacher = new Teacher("Bob", 40);
teacher.teach();  // Output: Bob is teaching
