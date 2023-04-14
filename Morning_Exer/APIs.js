let getAndReturnPeople = async () => {
    let response = await fetch('https://swapi.dev/api/people')
    let parsedResponse = await response.json()
    let peopleArray = parsedResponse.results;

    return peopleArray;
}
let peopleArray = getAndReturnPeople();

/*
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    console.log(peopleArray);
    // do your work here inside this function
}
doProblem()

*/


// Take the code above and take a look at the people array that we get from this API.

// Copy this code and do one of the following in a js file:

// "Easy" - Loop through this array of objects and and log the name of each person


const doProblem1 = async () => {
    let peopleArray = await getAndReturnPeople();
    // console.log(peopleArray);
    for (i=0; i <peopleArray.length; i++) {
        console.log(peopleArray[i].name)
    }
}
doProblem1()


// Medium - Loop through this array and make a new array that only contains people that are shorter than 165cm


let newArr=[]
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    //console.log(peopleArray);
    // do your work here inside this function
    for (i=0; i<peopleArray.length; i++ ) {
        if (peopleArray[i].height<165) {
            newArr.push(peopleArray[i])
        }
    }
    console.log(newArr)
}
doProblem()


// Hard - loop thorugh and find the tallest and shortest males and females.

/* 
const doProblem = async () => {
    let peopleArray = await getAndReturnPeople();
    //console.log(peopleArray);
    // do your work here inside this function
    
    let tallestMale = peopleArray[0]; // set the initial value to the first person in the array
    for (let i = 1; i < peopleArray.length; i++) {
      if (peopleArray[i].height > tallestMale.height && peopleArray.gender=="male") {
        tallestMale = peopleArray[i];
      }
    }
    console.log(tallestMale);

    let tallestFemale = peopleArray[0]; // set the initial value to the first person in the array
    for (let i = 1; i < peopleArray.length; i++) {
      if (peopleArray[i].height > tallestFemale.height && peopleArray.gender=="female") {
        tallestFemale = peopleArray[i];
      }
    }
  console.log(tallestFemale);
}
doProblem()
*/

// Very Hard - loop through and for each person write a string that says "This person is <name> and their ship is <name of ship if any>"
// if no ship, say "and they have no ship."