// created a variabvle for my age
var myAge= 22

//first two years 
let earlyYears = 2

// reassigning earlyYears, no need to use "let again".10.5 years of a dog age to human age for the first two years
earlyYears= earlyYears *=10.5
console.log(earlyYears)

//this is my later age subtract the first two years of my life. the first two years and the other years in dog years are different. first two is 10.5, then the rest is 4 years.
let laterYears= myAge-2
console.log(laterYears)

//each year after the first year years in human life is equated to 4 years in dog years
laterYears *=4;
console.log(laterYears)

//to get your current age in dog years, you add you first two years calculated in dog years and your later years calculated in Dog years. 
var myAgeInDogYears = earlyYears + laterYears

//created a variable myNmae and using the string method, i convert my name to lowercase. just as i could assign and name a variable, but this time 
i added a method ".toLowerCase()". Don't forget the parenthesis
var myName = 'Ucheoma Okoma'.toLowerCase();
console.log(myName)

//printing out a statement using interpolation and template literals for myName, myAge and myAgeInDogYears.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
