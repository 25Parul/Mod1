let movie = {

    name: "Titanic",

    releaseYear: 1997,

    director: "James Cameron",

    actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],

    starActor: {

        name: "Leonardo Dicaprio",

        age: 5,

        born: 1889,

        linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",

        headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"

    },

    budgetInMillions: 200

}

 
// Try to make functions that do the following: 
// Access the star actor’s age property  and change the value to 48.

const func = (variable, obj, key, value) => {
         variable[obj][key]=value
         return variable[obj][key]
}

func(movie, "starActor", "age", 48)
console.log(movie.starActor.age);



// Access the star actor’s born property and change the value to 1989.


func(movie, "starActor", "born", 1989)
console.log(movie.starActor.born);

// Add a new property to the starActor object called isPopular and set its value to true.

func(movie, "starActor", "isPopular", true)
console.log(movie.starActor.isPopular);


// Add a new property to the movie object called isGoodMovie with a value of undefined.

const funcisGoodMovie = (variable, key, value) => {
    return variable[key] =value
}

funcisGoodMovie(movie, "isGoodMovie", undefined)
console.log(movie.isGoodMovie)

// Access the actors array, loop through it and check if the movie has “Tom Cruise” in it. If true, set isGoodMovie to true, else set isGoodMovie to false.


for (i=0; i<movie.actors.length; i++ ) {
    if (movie.actors[i]=="Tom Cruise") {
        movie.isGoodMovie= true
    } else {
        movie.isGoodMovie= false
    }
}

console.log(movie.isGoodMovie)

// ===================================================================================================
console.log("Problem 2")

let cohortFour = {

    classSize: 5,

    instructor: {

        name: "Fred",

        age: 40,

        completedCohortIds: [3, 77, 45, 23],

        email: "fred@fred.com",

        assistant: {

            name: "Brad",

            age: 38,

            email: "Brad@brad.com"

        }

    },

    classGrades: [99, 100, 89, 88, 95]

}

 

// Try to make functions that do the following: 
// Check if the class size is > 10
const classSize =(num) => {
    return num> 10
}

console.log(classSize(5));

// Check if the instructor has completed more than 2 cohorts.

const checkCohorts = () => {
    let completedCohorts = cohortFour.instructor.completedCohortIds.length;
    return completedCohorts > 2;
  }
  
  console.log(checkCohorts());

// Create a function called changeAssistant that will change the name, age, and email of the assistant
const changeAssistant = (variable, obj, key, value) => {
    return variable[obj][key]=value
}

changeAssistant(cohortFour,"instructor", "name", "Ross" )
changeAssistant(cohortFour,"instructor", "age", 32 )
changeAssistant(cohortFour,"instructor", "email", "rossgeo@gmail.com" )

console.log(cohortFour.instructor.name)
console.log(cohortFour.instructor.age)
console.log(cohortFour.instructor.email)

// Loop through the completedCohortIds array and check if Fred completed cohort 55


checkIfCompleted =() => {
    for (i=0; i<cohortFour.instructor.completedCohortIds.length; i++) {
        if (cohortFour.instructor.completedCohortIds[i]=== 55) {
            return true
        } else {
            return false
        }
    }

}

console.log(checkIfCompleted())



// Loop through the classGrades and check if the average grade is > 90

sum=0
const classGradesAvg = () => {
    for (i=0; i<cohortFour.classGrades.length; i++ ) {
        sum=sum+cohortFour.classGrades[i]
    }

    avg= (sum)/(cohortFour.classGrades.length)
    if (avg>90) {
        return true
    } else {
        return false
    }

}

console.log(classGradesAvg())

