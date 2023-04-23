// Part I
// For each example create 3 objects that are from the extending class (the one with more properties)

// Create a class called Animal that has a name property and a speak method. Then, create a class called Dog that extends Animal and has an additional breed property and a bark method.

class Animal {
    constructor(name) {
        this.name=name;
    }

    speak() {
        return `${this.name} speaks`
    }
}


class Dog extends Animal {
    constructor(name,breed) {
        super(name)
        this.breed=breed;

    }

    bark () {
       return `${this.name} barks`;
    }
}


const Dog1= new Dog("bear", "Golden Retriever");
const Dog2 = new Dog("Max", "Labrador Retriever");
const Dog3 = new Dog("Daisy", "Poodle");


console.log(Dog1);
console.log(Dog2.name); 
console.log(Dog3.breed);
console.log(Dog1.bark());
console.log(Dog3.speak());

// Create a class called Shape that has a name property and a calculateArea method. 
// Then, create a class called Circle that extends Shape and has an additional radius property and overrides the calculateArea method to calculate the area of a circle.


class Shape {
    constructor(name) {
        this.name=name;
    }

    calculateArea(length, width) {
       let area= length*width;
        return `The area of ${this.name} is ${area} sq ft.`

    }
}


class Circle extends Shape{
    constructor(name,radius){
        super(name)
        this.radius=radius;
    }

    calculateArea() {
        const area = Math.PI * this.radius ** 2;
        return `The area of the ${this.name} with radius ${this.radius} is ${area} sq m.`;

    }
}


let rectangle = new Shape("rectangle")
let circle= new Circle("Circle", 2)
let circle2 = new Circle("Circle", 8)


console.log(rectangle.calculateArea(78, 90))
console.log(circle);
console.log(circle2.calculateArea())