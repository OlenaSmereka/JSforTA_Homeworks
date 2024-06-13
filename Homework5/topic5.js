// *** Task 1. Write the function propsCount(currentObject), which accepts an object and determines the number of properties of this object .

			                     	
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
const mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};
console.log(propsCount(mentor)) 

// **Task2 

const PeronalData = {
    name: "Olena",
    age: 37,
    city: "Lviv",
    children: true,
    hobby: null
};
function showProps(obj) {
    const properties = Object.keys(obj);
    const values = Object.values(obj);
    return {
        properties,
        values
    };
}
console.log(showProps(PeronalData).properties); 
console.log(showProps(PeronalData).values);   

// **Task3**

class Person {
    constructor (name, surname) {
            this.name=name,
            this.surname=surname
        } 
        showFullName () {
            return `${this.name} ${this.surname}`;
        }
    }
class Student extends Person {
    constructor (name, surname, year) {
                super  (name, surname);
                this.year=year;
}
showFullName ( middleName ) {
    return `${this.name} ${middleName} ${this.surname}`;
}
showCourse() {
    let currentYear = new Date().getFullYear();
    const CurentCourse = currentYear - this.year;
    return CurentCourse;
    }
}
const stud1 = new Student("Olena", "Smereka", 2021);
console.log(stud1.showFullName("Borysivna")); // 
console.log("Current course:" + stud1.showCourse());


// **Task 4 

    class Worker {
        #experience = 1.2;
        constructor (fullName,dayRate,workingDays) {
            this.fullName = fullName;
            this.dayRate = dayRate;
            this.workingDays = workingDays;
        }
        showSalary() {
            let salary = this.dayRate * this.workingDays;
            console.log(`Salary of ${this.fullName} is $${salary}`);
            return salary;
        }
        showSalaryWithExperience() {
            let salaryExperienced = this.dayRate * this.workingDays * this.#experience;
            console.log(`Salary of ${this.fullName} with experience is $${salaryExperienced}`);
            return salaryExperienced;
        }
    get showExp() {
                return this.#experience;
            }
    set setExp (ExpValue) {
        if (ExpValue > 0) {
            this.#experience = ExpValue;
        } else {
            console.log('The experience couldnt be negative!');
        }
    }
}
function sortWorkers(workers){
    workers.sort((a, b) => {
                 return a.getSalaryWithExperience() - b.getSalaryWithExperience();
    });
    return;
}
        let worker1 = new Worker("John Johnson", 20, 23);
            console.log(worker1.fullName);
            worker1.showSalary();
            console.log("New experience: " + worker1.showExp);
            worker1.showSalaryWithExperience();
            worker1.setExp = 1.5;
            console.log("New experience: " + worker1.showExp);
            worker1.showSalaryWithExperience();
        
        let worker2 = new Worker("Tom Thomson", 48, 22);
            console.log(worker2.fullName);
            worker2.showSalary();
            console.log("New experience: " + worker2.showExp);
            worker2.showSalaryWithExperience();
            worker2.setExp = 1.5;
            console.log("New experience: " + worker2.showExp);
            worker2.showSalaryWithExperience();

        let worker3 = new Worker("Andy Ander", 29, 23);
            console.log(worker3.fullName);
            worker3.showSalary();
            console.log("New experience: " + worker3.showExp);
            worker3.showSalaryWithExperience();
            worker3.setExp = 1.5;
            console.log("New experience: " + worker3.showExp);
            worker3.showSalaryWithExperience();


//  **Task5**
class GeometricFigure {
    getArea () {
        return ;
    }
    toString () {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }
    getArea () {
        return 0.5 * this.a * this.h;
    }
}
class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea (){
        return this.a*this.a;
    }
}
class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
function handleFigures(figures) {
    let totalArea = figures.reduce((total, figure) => {
        if (figure instanceof GeometricFigure) {
            let area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return total + area;
        }
        return total;
    }, 0);
    return totalArea;
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));