class Person {
    /* The Constructor is invoked once if an Instance of this Class is created */
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }
    logPerson() {
        console.log(`${this.name} is ${this.age} Years old`);
    }
}

const person = new Person("Michael", 27);
person.logPerson();

class Student extends Person {
    constructor(name, age, mail) {
        super(name, age);
        this.mail = mail;
    }
    logStudent() {
        console.log(`${this.name} is ${this.age} Years old and Mail is ${this.mail}`);
    }

    /* Static Methods belongs to the Class and not to their Object which is instantiated */
    static typeOfClass() {
        console.log(`Type of Class is Student`);
    }
}

const student = new Student("Marie", 26, "marie@mail.com");

student.logPerson();

student.logStudent();

Student.typeOfClass();