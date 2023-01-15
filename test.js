function addTwoNumbers(num1, num2){
    return num1 + num2
}

//Declaring a function means giving it a name, parameters (the variables to be passed into the function) and what it will do and/or return
function quotientof2numbers(num1, num2){
    return num1 * num2
}

//Calling a function is using it and passing it actual numbers / strings etc.
quotientof2numbers(67, 13)

//Console.log is a tool for debugging to see variables / results of function etc.
// console.log(quotientof2numbers(67, 13))

//You can access specific indexes of an array using "bracket notation"
const testArr = [1, 2, 3]
//Arrays are zero-indexed, so "testArr[0]" will be 1, the first entry in the array
// console.log(testArr[0])

let birthdates = [14, 10, 5, 8, 16, 19, 11, 10, 9]

//Initialise a counter variable, determine the condition to be met for the loop to continue, update the counter 
    //Start i as 0; While i is less than the number of entries in birthdays (9), keep going; Add 1 to i each time
let birthdaysPlus34 = []
for (let i = 0; i < birthdates.length; i++) {
    birthdaysPlus34.push(addTwoNumbers(birthdates[i], 34))
}

// console.log(birthdaysPlus34)

                    //Property: value
let birthdayObject = {"jack": 10}

let birthdays = [{name: "keira", day: 14, favourite_colour: "pink"}, {name: "jack", day: 15, favourite_colour: "green"}]

//go to jack's day, change day from 15 to 10. go to jack's colour, change colour from green to blue. 
for (let x=0; x < birthdays.length; x++) {
    birthdays[x].name = "jack"
    if (birthdays[x].name==="jack"){
        birthdays[x].day=10
        birthdays[x].favourite_colour="blue"
    }
}

console.log("test: ", birthdays)