// I set a variable called myAge to my real age.
var myAge = 42;

// made a variable representing the first two years of a dog's growth.
var earlyYears = 2;

// Multiply the fisrt two years by 10.5 and assign the new value to itself.
earlyYears *= 10.5;


// subtracting two from the myAge value and assigning it to a new variable.
var laterYears = myAge - 2;

//multiplying laterYears by the 8.
laterYears *= 8; 

// adding variables earlyYears and laterYears and placing them in a new variable.
var myAgeInDogYears = earlyYears + laterYears;


// set a variable to hold my name and to display it lower lowercase.
var name = "James"; 
var myName = name.toLowerCase();

// wrote out this string using string interpolation. 
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
