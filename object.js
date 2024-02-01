/*const personPrototype = {
    greet(){
        console.log(`Hello, my name is ${this.name}`);
    },
};

const carl = Object.create(personPrototype);
carl.greet()

//using constructor to create object prototype
function Person(name){
    this.name = name;
}

Object.assign(Person.prototype, personPrototype)

const person = new Person("John")
person.greet()*/

const people = {
    myself(name, age){
        this.name = name;
        this.age = age
    },
}

function Student(year, department){
    this.year = year;
    this.department = department;
    this.introduceMyself = function(){
        console.log(`My name is ${this.name}, and I am ${this.age} years old. My course of study is ${this.department}, and it's a ${this.year} year course.`)
    }
}

function Professor(faculty){
    this.faculty = faculty
    this.grade = function(paper){
        console.log(`This paper ${paper} is graded ${paper}`)
    }
    this.introduceMyself = function(){
        console.log(`My name is ${this.name}, am ${this.age} years old, and I am a professor in the faculty of ${this.faculty}`)
    }
}

Object.assign(Student.prototype, people);
Object.assign(Professor.prototype, people);


const student1 = new Student("four", "Mechanical Engineering")
student1.name = "John";
student1.age = 28;
student1.introduceMyself();

const prof1 = new Professor("Engineering");
prof1.name = "Andrew";
prof1.age = 52;
prof1.introduceMyself();