// Problem 1

// Declare a JS object called carThree with
// A property called wheels with a number value
// A property called owner with a string value
// A property called isBroken with a boolean value
// A property called color with a string value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isBroken property
// Use dot notation to read the value of owner
// Create a new variable (not part of the object) called clientIsInterested that has no value.
// Check if car color is blue. If true, set clientIsInterested to true, else false.
// Delete the owner property of carThree.


console.log("Problem-1")

let carThree = {
    wheels: 4,
    owner: "Parul",
    isBroken: true,
    color: "Red"
}

carThree.price=65000
carThree["year"]=2001
carThree.isBroken=false
console.log(carThree.owner)

let clientIsInterested=undefined;

clientIsInterested = carThree.color === "Blue" ? true : false
 console.log(clientIsInterested)
 delete carThree.owner
console.log(carThree)


// Problem 2

// Declare a JS object called store with
// A property called profit with a number value
// A property called manager with a string value
// A property called isOpenNow with a boolean value
// A property called isVeryExpensive with a boolean value

// Use dot notation to add a new property called location with a string value
// Use bracket notation to add a new property called storeType with a string value
// Use dot notation to change the value of the isOpenNow property
// Use dot notation to read the value of isVeryExpensive 
// Create a new variable (not part of the object) called canShopHere that has no value.
// Check if isOpenNow and NOT isVeryExpensive. If true set canShopHere to true, else false
// Delete the profit property of store.

console.log("Problem 2")

let store = {
    profit:200000,
    manager:"Maria",
    isOpenNow: false,
    isVeryExpensive: true,
}

store.location="Seattle";
store["storeType"]="Fashion";
store.isOpenNow=true;
console.log(store.isVeryExpensive)

let canShopHere=undefined;

canShopHere = "isOpenNow"===true && !isVeryExpensive ? true: false

console.log({canShopHere})

delete store.profit;

console.log(store)



console.log("Problem 3")

 

// Declare a JS object called home with
// A property called rooms with a number value
// A property called bathrooms with a number value
// A property called isForSale with a boolean value
// A property called isInGoodLocation with a boolean value
// Use dot notation to add a new property called price with a number value
// Use bracket notation to add a new property called year with a number value
// Use dot notation to change the value of the isForSale property
// Use dot notation to read the value of bathrooms
// Create a new variable (not part of the object) called buyHouse that has no value.
// Check if isForSale and isInGoodLocation. If true set buyHouse to true, else false
// Delete the isForSale property of home.


let home ={
    rooms: 5,
    bathrooms: 3.5,
    isForSale:false,
    isInGoodLocation:true,

}

home.price=11000000;
home["year"]=2018;
home.isForSale=false
console.log(home.bathrooms)

let buyHouse = undefined
buyHouse= "isForSale" === true && "isInGoodLocation" === true ? true: false

console.log({buyHouse})

delete home.isForSale


console.log("Problem 4 , 5")

// Declare a JS object with 4 properties (4 keys and 4 values).
// Use dot notation to add a new property.
// Use bracket notation to add a new property.
// Use dot notation to change the value of one of the properties.
// Use dot notation to read the value of one of the properties.
// Create a new variable (not part of the object) that has no value.
// Write some kind of if / else statement to check some information of the object. Based on true / false set the value of the variable you made in number 6 to true or false.
// Delete one of the object properties.
// I'm adding some Audio PLayer code that might break the application
const person = {
    name: 'John',
    age: 27,
    occupation: 'Software Engineer',
    city: 'San Francisco'
  };

  person.leaves= true
  person["zipCode"]= 87610
  person.city= "San Diego"

  let canVacation = undefined

  canVacation=   person.leaves=== true ? true : false
  console.log({canVacation})

  delete person.zipCode

  console.log(person)

