
// I. Variables & Datatypes

// A. Q + A
// How do we assign a value to a variable?
const myArr = [1,2,3,4,] 

// How do we change the value of a variable?
myArr.unshift(5)
console.log(myArr)

// How do we assign an existing variable to a new variable?
let name = "Jason"
name = "Parul"
console.log(name)

// The strikethrough on the variable name indicates that the variable is no longer being used or has been overwritten. 
// Here, the variable name is assigned the value "Jason" and then immediately overwritten with the value "Parul". This means that the first assignment to name is not being used and can be safely removed.

// Remind me, what are declare, asisgn and define?

// Declaring is introducing a variable using var, let, or const.
//Here is an example of declaration where we are declaring the the variable "c" using let
let anyNum;

// Assign

//Assigning is giving a value to the variable, ie. String, number, array, boolean, object, etc.
//Below is the example of assignment where "c" is the variable and "8" is the value that we have assigned to the variable "c"
 anyNum = 8

// Define 

// Defining is when we create a named entity with var, let, const, or function that can be referenced and reused throughout the code.
// This is an example of definition. "d" is the named entity and a function which we can call as many times we like.
const mulTwoNum = (a, b) => {
    console.log(a * b);
}

mulTwoNum(5,6)

// What is pseudocoding and why should you do it?
// Psuedocode is explaining code in simple terms without using any actual coding syntax.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

//we have different opinion about it
//Person1 :  solving the problem should take 10% spent on thinking and 90% coding
//Person2 : 25-30% thinking, and 70% coding
//Person 3: 50% thinking and 50% coding

//=============================================================================

// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean
let firstVariable = "Hello World"
firstVariable = 6
let secondVariable = firstVariable
secondVariable="Per Scholas"
console.log(firstVariable)
let yourNameand = 'Jason'
console.log(`Hello! my name is ${yourNameand}`)

//==============================================================================

// C. Booleans
//  Using the provided variable definitions, replace the blanks so that all log statements
// print truein the console. Answers should be all be valid JS syntax and not weird things that don't
// make sense but happen to print trueto the console
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';
  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true ||  false);
    console.log(false && false || false && false || false || true);
  console.log(false === false);
  console.log(e === 'Kevin');
  console.log(a > b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

//==============================================================================

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
    const animal = "cat"
    

// Write code that will print out "mooooo" if the it is equal to cow
if (animal=== "cow") {
    console.log("mooooooooo")
}

// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
else {
    console.log("Hey! You're not a cow.")
}
// Commit

//============================================================================

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age= 35;
if (age >= 16){
    console.log("Here are the keys!")
} else { 
    console.log("Sorry, you're too young")
}   
// ===================================================================================
//==================================================================================

// II. Loops

// =============================================================================
// ==============================================================================
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 0; i <= 10; i++){
    console.log(i);
}

for (let i = 10; i <= 400; i++) {
    console.log(i);
}

for (let i = 12; i<= 4000; i+=3 ) {
    console.log(i)
}

// ===================================================================================

// B. Get even
// Print out the numbers that are within the range of 1 - 100


for (let num=0; num<=100; num++) {
    console.log(num)
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for (let num=0; num<=100; num++) {
    if (num%2==0) {
        console.log(`${num} is an even number`)
    }else {
        console.log(num)
    }
}


//====================================================================================
// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five

for (let i=1; i<=100; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(`I found a ${i}. High five! Three is a crowd`)
    }
    else if (i % 5 == 0) {
      console.log(`I found a ${i}. High five`)
        }
    else if (i % 3 == 0) {
        console.log(`I found a ${i}. Three is a crowd`)
        }
    }

// ====================================================================================

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

let bankAccount=0;
let num=0;
while(num<=10) {
    bankAccount= bankAccount+num;
    num++
}

console.log({bankAccount})

// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

let sum=0;
for (let pay=1; pay<=100; pay++) {
    sum=sum+pay;
    totalSum= sum*2;    
}

console.log(totalSum)

// Check your work! Your bank_account should have $10,100 in it.


//=====================================================================================
//=====================================================================================

// III. Arrays & Control flow

//======================================================================================
//======================================================================================

// A. Talk about it:

// What are the things in an array called?

/*
Things in the Array can be understood as the individual items of the list. Array is basically a collection of elements of any datatype (string, number, booleans,objects, arrays).
Each element is identified by an index that represents its position in the array, starting from 0 and ends at the length of the array minus 1.
The elements in an array can be accessed, modified, or removed by their index using various array methods like shift, unshift, pop, push.
*/

// Do Arrays guarantee those things will be in order?
/*
Yes, arrays always maintain the order of the elements they contain. Elements in an array are typically stored and retrieved in the same order that they were added to the array.
*/

// What real-life thing could you model with an array?

/*
I think we can model the scores of a sports team over the course of a season. 
This array "teamScores" stores the scores of each game, with each element representing the score from a different game. For example:

teamScores = [5, 3, 2, 4, 1, 2, 6, 2, 3, 4, 2, 1, 5, 2, 3, 4, 1, 3, 2, 4]

*/

//=================================================================================

// B. Easy Does It

// Create an array that contains three quotes and store it in a variable called quotes
let quotes = ['Jason', 'Maria', 'Parul']

//==================================================================================

// C. Accessing elements

// Given the following array
const randomThings = [1, 10, "Hello", true];
// How do you access the 1st element in the array?
randomThings[3];
console.log(randomThings[3])
// Change the value of "Hello"to "World"
randomThings[2] = "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

// =================================================================================

// D. Change values
// Given the following array const
// What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass[4]="Octocat"
console.log(ourClass);
// Add a new element, "Cloud City" to the array
ourClass.unshift("Cloud City");
console.log(ourClass);

//===================================================================================

// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: 
const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon", "29")

// Remove the 5from the beginning of the array.
myArray.shift()

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")

// Remove the string of your choice from the end of the array.
myArray.pop()

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

myArray.reverse()
console.log(myArray)


/* reverse() method reversed the array itself. It modified the original array rather than creating a new array with the reversed elements.
Array.prototype.reverse() method mutates the array. 
In programming, "mutation" refers to the modification of a data structure or object. 
In the context of arrays, a mutation occurs when we modify the contents of the array, such as changing the order of the elements.

We can also use a non-mutating method to reverse the array, such as using the slice() method or a loop.
This will create a new array with the reversed elements, then we would not be mutating the original array. 
Instead, we would be creating a new array with the reversed elements, leaving the original array intact.
*/

//=====================================================================================================

// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
const biggieSmalls = (number) => {
    if (number < 100) {
        console.log(`Smalls number`)
    } else {
        (number > 100); {
            console.log(`Biggie number`)
        }
    }
    }
    biggieSmalls(400)

//=========================================================================================================

// G. Monkey in the Middle
// Write an if ... else if ... elsestatement:
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let num1 = 6;
if (num1 < 5) {
    console.log ("little number")
} else if (num1 > 10) {
    console.log("big number")
} else {
    console.log("monkey")
};
// ========================================================================================================

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  // // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  //Kristyn
  // What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  // Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
  // Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
  console.log(`Krystyn is rocking that ${kristynsCloset[2]} today!`);
  kristynsCloset.splice(6, 0, "raybans");
  kristynsCloset[5] = "stained knit hat"
  console.log(kristynsCloset)
  //Thom
  // Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  // In the same way, access one item from Thom's pants array.
  // Access one item from Thom's accessories array.
  // Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
  // Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  console.log(thomsCloset[0][0])
  console.log(thomsCloset[1][2])
  console.log(thomsCloset[2][1])
  console.log(`Thom is looking great in his ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]}`)
  thomsCloset[1][2] = "Dinosaur PJs"
  console.log(`Thom is looking great in his ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]}`)


// ========================================================================================================

//IV. Functions

//=========================================================================================================
//=========================================================================================================

// A. printGreeting

// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the
//  greeting?

const printGreeting = (name) => {    
    return `Welcome, ${name}!`
}

console.log(printGreeting("Rachel"))

// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

//========================================================================================================

// B. printCool

// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

const printCool = (name) => {
    return `Captain ${name} is cool`

}

console.log(printCool("Raynolds"))

//=================================================================================================================

// C. calculateCube

// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125
const calculateCube = (num) => {
    return(num**3)
}
console.log(calculateCube(5))

//=================================================================================================================

// D. isVowel

// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
//The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

const isVowel = (char) => {
    char = char.toLowerCase()
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true
    } else {
        return false
    }

}

console.log(isVowel("i"))

//=============================================================================================================

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
const getTwoLengths = (string1, string2) => {
    return(array= [string1.length, string2.length])
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// ===========================================================================================================

// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (arrayOfStrings) => {
    const lengths = [];
    for (let i = 0; i < arrayOfStrings.length; i++) {
      lengths.push(arrayOfStrings[i].length);
    }
    return lengths;
  };
  console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//=============================================================================================================

// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().


const maxOfThree = (n1, n2, n3) => {
    let numbers = [n1, n2, n3]
    numbers.sort((a,b) => (b-a));
    const max= numbers[0]
    console.log(max)

}

maxOfThree(876,7,99)

// ======================================================================================================

// H. printLongestWord
//   Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
//   console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
//   => "Peanutbutter"
const printLongestWord = (longWords) => {
    let longestWord = '';
    for (let i = 0; i < longWords.length; i++) {
        if (longWords[i].length > longestWord.length) {
            longestWord = longWords[i];
        }
    }
    return longestWord;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))

//======================================================================================================
//======================================================================================================

//V.Objects

//========================================================================================================
//=======================================================================================================

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

let user = {
    name :"Maria",
    email: "marianik@gmail.com",
    age: 29,
    purchased: [],
}

//=========================================================================================================

// // B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "newmarianikemail@gmail.com";
user.age = 30
console.log(user)

// ========================================================================================================

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key location to the object,
// and give it a value or some-or-other location (a string).


user.location=("Vancouver");
console.log(user)

// ========================================================================================================

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
console.log(user.purchased[2])

// ==========================================================================================================

// // E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend = {
    name: 'Jason',
    age: '29',
    location: 'World Wide',
    purchased: [],
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = '55'
console.log(user.friend)
user.friend.purchased.push('The One Ring')
console.log(user.friend)
user.friend.purchased.push('a latte')
console.log(user.friend)

//============================================================================================================

// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i=0; i < user.purchased.length; i++ ) {
    console.log(user.purchased[i])
}

for (let j=0; j<user.friend.purchased.length; j++) {
    console.log(user.friend.purchased[j])
}

//=========================================================================================================================

// G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, 
// make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called.
//  Call your oldAndLoudfunction with useras the argument.


const updateUser = () => {
    user.age++;
    user.name= user.name.toUpperCase();

}

const oldAndLoud = (person) => {
    person.age++;
    person.name=person.name.toUpperCase()

}
oldAndLoud(user);
console.log(user);

//=========================================================================================================
//=======================================================================================================

//Cat Combinator

//=======================================================================================================
//=======================================================================================================

// 1. Mama cat
// Define an object called cat1 that contains the following properties:
// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed

const cat1 = {
    name: "Missy",
    breed: "American curl",
    age: 4,
    }
console.log(cat1.age)
console.log(cat1.breed)

//====================================================================================================================

// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {
    name: "Bob",
    breed: "Siamese",
    age: 5
}

//============================================================================================================================

// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.
// Make it so the combineCatsfunction will return a combination of the two incoming cats

let combineCats = (mama, papa) => {
    return { name: mama.name + papa.name, age:1,breed: mama.breed + "-" + papa.breed };
    }

console.log(combineCats(cat1, cat2));

// ========================================================================================================================

// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log(combineCats(combineCats(cat1, cat2),combineCats(combineCats(cat1, cat2), combineCats(combineCats(cat1, cat2),combineCats(cat1, cat2)))));
