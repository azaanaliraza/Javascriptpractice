/*
let js = "123";
if (js === "123") alert("Js is amazing")

console.log(10 + 40 + 60 + 33 + 22 + 43 - 11 - 45 - 78)

//First assignment
const country = "India"
const continent = "Asia"
let population = 200

console.log(country)
console.log(continent)
console.log(population)
//-------------------------------------------------------------

// Second Assignment

let isIsland = false;
let language;

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

//-------------------------------------------------------------

// Third Assignment

language = "Hindi"

//-------------------------------------------------------------

// Fourth Assignment

let halfPopulation = population / 2;
population++;
console.log(population);
let finlPopu = 6
if (population > finlPopu) console.log("Yes")

let avgpop = 33
console.log(population < avgpop)
const description1 =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;
console.log(description1);

//-------------------------------------------------------------
*/

// Codiing Challenge #1

let marksweight = 78;
let marksheight = 1.69;

let johnsweight = 92;
let johnsheight = 1.95;

let bmiJohn = johnsweight / johnsheight ** 2;
let bmimark = marksweight / marksheight ** 2;

console.log("John's BMI is " + bmiJohn, "Mark's BMI is " + bmimark);

let markHigherBMI = bmimark > bmiJohn;
console.log(markHigherBMI);