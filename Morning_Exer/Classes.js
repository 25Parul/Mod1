// Create a class called "Person" that has properties for name, age, and occupation.
//  Add a method called "introduce" that logs a message to the console introducing the person and their occupation.

class Person {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  
    introduce() {
      return `Hello! I am ${this.name}. I am ${this.age} year old. I am a ${this.occupation} and I love my work.`;
    }
  }
  
  let Jerry = new Person("Jerry", 35, "Dermatologist");
  let Elena = new Person("Elena", 28, "Astronaut");
  let Tanya = new Person("Tanya", 25, "Program Manager");
  
  console.log(Elena);
  console.log(Tanya.introduce());
  
  // Create a class called "Animal" that has properties for name, species, and sound.
  // Add a method called "makeSound" that logs the animal's sound to the console.
  
  class Animal {
    constructor(name, species, sound) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  
    makeSound() {
      return `${this.name} ${this.sound}`;
    }
  }
  
  let Lion = new Animal("Lions", "Panthera leo", "Roar");
  let Elephant = new Animal("Elephants", "Loxodonta africana", "Trumpet");
  let Dog = new Animal("Dogs", "Canis lupus familiaris", "Bark");
  
  console.log(Elephant);
  console.log(Lion.makeSound());
  console.log(Dog.makeSound());
  
  // Create a class called "Book" that has properties for title, author, and number of pages.
  //  Add a method called "read" that logs a message to the console indicating that the book has been read.
  
  class Book {
    constructor(title, author, numberOfPages) {
      this.title = title;
      this.author = author;
      this.numberOfPages = numberOfPages;
    }
  
    read(isRead) {
      return isRead === true
        ? `This book "${this.title}" has been read.`
        : `This book "${this.title}" is not yet read.`;
    }
  }
  
  let book1 = new Book("The Sanatorium", "Sarah Pearse", 400);
  let book2 = new Book("The Shadow Box", "Luanne Rice", 368);
  let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
  
  console.log(book1);
  
  console.log(book2.read(false));
  console.log(book3.read(true));
  
  // Create a class called "Car" that has properties for make, model, and year.
  // Add a method called "start" that logs a message to the console indicating that the car has been started.
  
  class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(isStarted) {
      return isStarted
        ? `The car ${this.make} has been started`
        : `The car ${this.make} is not yet started`;
    }
  }
  
  let Toyota_Corolla = new Car("Toyota", "Corolla", 2022);
  let Ford_Mustang = new Car("Ford", "Mustang", 2021);
  let Honda_Civic = new Car("Honda", "Civic", 2020);
  
  console.log(Toyota_Corolla);
  console.log(Ford_Mustang.start(true));
  console.log(Honda_Civic.start(false));
  
  // Create a class called "Shape" that has properties for width and height.
  // Add methods called "getArea" and "getPerimeter" that calculate and return the shape's area and perimeter.
  
  class Shape {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      let area = this.width * this.height;
      return `The area of this shape is ${area}`;
    }
  
    getPerimeter() {
      let perimeter = 2 * (this.width + this.height);
      return `The Perimeter of this shape is ${perimeter}`;
    }
  }
  
  let shape1 = new Shape(4, 6);
  let shape2 = new Shape(98, 36);
  let shape3 = new Shape(100, 88);
  
  console.log(shape3.getArea());
  console.log(shape1.getPerimeter());
  
  // Create a class called "Movie" that has properties for title, director, and rating.
  // Add a method called "play" that logs a message to the console indicating that the movie is playing.
  
  class Movie {
    constructor(title, director, rating) {
      this.title = title;
      this.director = director;
      this.rating = rating;
    }
  
    play(isPlaying) {
      return isPlaying
        ? `The movie "${this.title}" is playing`
        : `The movie "${this.title}" is not playing.`;
    }
  }
  
  let movie1 = new Movie("No Time to Die", "Cary Joji Fukunaga", 7.6 / 10);
  let movie2 = new Movie("Old", "M. Night Shyamalan", 5.7 / 10);
  let movie3 = new Movie("The Little Things", "John Lee Hancock", 6.3 / 10);
  
  console.log(movie2);
  console.log(movie3.play(false));
  console.log(movie1.play(true));
  
  // Create a class called "Product" that has properties for name, price, and description.
  //  Add a method called "display" that logs a message to the console displaying the product's name, price, and description.
  
  class Product {
    constructor(name, price, description) {
      this.name = name;
      this.price = price;
      this.description = description;
    }
  
    display() {
      return `${this.name} - $${this.price}\n${this.description}`;
    }
  }
  
  let Mascara = new Product(
    "Maybelline Great Lash Mascara",
    6.99,
    "Lash-doubling formula glides on smoothly to create voluminous,bold and long lashes."
  );
  let Moisturizer = new Product(
    "Neutrogena Hydro Boost Water Gel Moisturizer",
    19.99,
    " Instantly quenches dry skin and boosts hydration, leaving your skin smooth and supple"
  );
  let Lipstick = new Product(
    "MAC Matte Lipstick",
    19,
    "Rich and creamy formula that provides bold color and long-lasting wear"
  );
  
  console.log(Mascara);
  console.log(Lipstick.display());
  
  // (Optional) Create a class called "BankAccount" that has properties for account number and balance.
  // Add methods called "deposit" and "withdraw" that allow users to deposit or withdraw money from the account.
  
  class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      let newBalance = this.balance + amount;
      return `The deposited amount is ${amount}. Your new balance is ${newBalance}`;
    }
  
    withdraw(amount) {
      if (amount < this.balance) {
        let newBalance1 = this.balance - amount;
        return `The withdrawal amount is ${amount}. Your new balance is ${newBalance1}`;
      } else {
        return `Insufficient fund!. Your current balance is ${this.balance}`;
      }
    }
  }
  
  let Elijah = new BankAccount(8943759363975, 9876);
  let Stefan = new BankAccount(8676876898324, 2000);
  let Caroline = new BankAccount(8446896498578, 988756);
  
  console.log(Caroline);
  console.log(Stefan.withdraw(3000));
  console.log(Elijah.deposit(2500));
  console.log(Caroline.withdraw(4000));
  
  
  // (Optional) Create a class called "Recipe" that has properties for name, ingredients, and instructions. 
  // Add a method called "cook" that logs a message to the console indicating that the recipe is being cooked.
  
  
  class Recipe {
      constructor(name, ingredients, instructions) {
          this.name=name;
          this.ingredients = ingredients;
          this.instructions= instructions;
      }
  
      cook (doesSmellGood) {
          return `hmmmmmmmmm! Smelling good. The ${this.name} is ready to be served.`
  
      }
  }
  
  let Recipe1= new Recipe("Avocado Toast", "1 slice of bread, 1/2 ripe avocado, Salt and pepper to taste", "Check the Youtube")
  let Recipe2= new Recipe("Fruit Salad", "1 apple,1 banana,1/2 cup strawberries,1/2 cup blueberries", "Just mix everything and serve")
  let Recipe3= new Recipe("Scrambled Eggs", "2 eggs, 1 tablespoon butter, Salt and pepper to taste", "Just cook it")
  
  console.log(Recipe1);
  console.log(Recipe3.cook(true));
  
  
  // (Optional) Create a class called "Employee" that has properties for name, job title, and salary.
  //  Add a method called "calculateBonus" that calculates and returns the employee's bonus based on their salary.
  
  
  class Employee {
      constructor( name, jobTitle, salary) {
          this.name=name;
          this.jobTitle= jobTitle;
          this.salary=salary;
      }
  
      // calculateBonus (bonus) {
      //     hike= salary*(bonus/100);
      //     return ` You got a hike of ${bonus} %. You new salary is ${hike}`
  
      // }
  
  
  
      calculateBonus() {
          let bonus = 0;
          if (this.salary > 80000) {
            bonus = this.salary * 0.1;
          } else {
            bonus = this.salary * 0.05;
          }
          let newSalary= this.salary+ bonus
          return `You got a hike of ${bonus} Dollars. You new salary is ${newSalary}`;
        }
  
  
  }
   let John = new Employee("John Smith", "Software Engineer",100000 );
   let Sarah = new Employee("Sarah Lee", "Marketing Manager", 85000)
   let Michael = new Employee("Michael Johnson", "Human Resources Coordinato", 50000)
  
  
  console.log(Sarah);
  console.log(John.calculateBonus());
  console.log(Michael.calculateBonus());
  
  
  