/* 1. Print a nice output to the console, saying who has the higher BMI.The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
BMI(28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉*/


let massMark = 78
let heightMark = 1.69
let massJohn = 92
let heightJohn = 1.95

bmiMark = massMark / heightMark ** 2
bmiJohn = massJohn / heightJohn ** 2
markHigherBMI = bmiMark > bmiJohn

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI(${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's (${bmiJohn}!`)
};



//Test Data 2
massMark = 95
heightMark = 1.88
massJohn = 85
heightJohn = 1.76

bmiMark = massMark / heightMark ** 2
bmiJohn = massJohn / heightJohn ** 2
markHigherBMI = bmiMark > bmiJohn

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI(${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's (${bmiMark}!`)
};

