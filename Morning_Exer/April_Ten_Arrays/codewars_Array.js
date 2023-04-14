/*Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings! You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
ie:["1", "2", "3"] to [1, 2, 3]
Note that you can receive floats as well.*/
console.log("Medium One: Convert an array of strings to array of numbers")

let stringArr=["1", "76", "00", "99", "9.8", "-2", "9876.456"]
let numArr=[]

const numSeq =(str) => {
    for(i=0; i<str.length; i++) {
        if (typeof str[i]==='string'){
            let num= parseFloat(str[i])
            numArr.push(num)
        } 
}

    console.log(numArr)
}


numSeq(stringArr);



/*Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).*/

console.log("Easy one: Sum of differences in array")

let numList= [2, 1, 10, 8, 4, 100];
sum=0

const diffOfCons = () => {
    numList.sort(function(a, b){
        return b-a });
    console.log(numList)
    for(let i=0; i<numList.length-1; i++) {
            sum+= numList[i]-numList[i+1]
            

        }
     console.log(sum)    
    } 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
diffOfCons()