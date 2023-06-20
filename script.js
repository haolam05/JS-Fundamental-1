// LECTURE: Values and Variables
let country    = "Vietnam";
let continent  = "Asia";
let population = 100;
console.log(country, continent, population);

// LECTURE: Data Types
let isIsland = false;
let language;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

// LECTURE: let, const and var
language        = 'Vietnamese';
const birthYear = 2001;     // birthYear = 2002; will throw error

// LECTURE: Basic Operators
console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
console.log(description);

// LECTURE: Strings and Template Literals
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5');                     // 4
console.log('19' - '13' + '17');            // '617'
console.log('19' - '13' + 17);              // 23
console.log('123' < 57);                    // false
console.log(5 + 6 + '4' + 9 - 4 - 2);       // 1143

// LECTURE: Equality Operators: == vs. ===
const numNeighbors = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbors === 1) {
    console.log('Only 1 border!');
} else if (numNeighbors >= 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

// LECTURE: Logical Operators
if (language === 'English' && (population < 50) && !isIsland) {
    console.log('You should live in ' + country + ' :)');
} else {
    console.log(country + ' does not meet your criteria :(');
}

// LECTURE: The switch Statement
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// LECTURE: The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`)

// Coding Challenge #1 and #2
let markMass      = 78;
let markHeight    = 1.69;
let markBMI       = Math.round(markMass * 10 / (markHeight * markHeight)) / 10;
let johnMass      = 92;
let johnHeight    = 1.95;
let johnBMI       = Math.round(johnMass * 10 / (johnHeight * johnHeight)) / 10;
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else               console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);

markMass          = 95;
markHeight        = 1.88;
markBMI           = Math.round(markMass * 10 / (markHeight * markHeight)) / 10;
johnMass          = 85;
johnHeight        = 1.76;
johnBMI           = Math.round(johnMass * 10 / (johnHeight * johnHeight)) / 10;
markHigherBMI     = markBMI > johnBMI;
if (markHigherBMI) console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else               console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);

// Coding Challenge #3
let scoreDolphins  = (96 + 108 + 89) / 3;
let scoreKoalas    = (88 + 91 + 110) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

scoreDolphins  = (97 + 112 + 101) / 3;
scoreKoalas    = (109 + 95 + 123) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}

scoreDolphins  = (97 + 112 + 101) / 3;
scoreKoalas    = (109 + 95 + 106) / 3;
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log("Both win the trophy");
} else {
    console.log("No one wins the trophy");
}

// Coding Challenge #4
let bill = 275;
let tip  = (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
bill = 40;
tip  = (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
bill = 430;
tip  = (bill >= 50 && bill <= 300 ? 0.15 : 0.2) * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
