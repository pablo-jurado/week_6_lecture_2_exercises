// Complete both of the following tasks:

// Review the list of global built-in objects on MDN - Global Objects. Disregarding
// global properties and functions, list three global objects you recall learning
// about in class and write a one sentence description of that object's purpose.

// 'Math: This object allows you to perform mathematical operations,
// like rounding numbers, generating random numbers, maximum, minimum, etc.'

// 'Date: This object lets us work with dates. You can manipulate data like
//  years, months, days, hours, minutes, seconds, and milliseconds.

// 'JSON: This object lets you convert any JavaScript object into JSON notation,
// so we can exchange data between a browser and a server
// We can also convert any JSON received from the server into JavaScript objects.'

// Review the list of global built-in objects on MDN - Global Objects.
// Disregarding global properties and functions, list three global objects you
// have not learned about in class. Review the documentation for that object
// and write a one sentence description of its purpose.

// Set: The Set object lets you store unique values of any type, whether primitive values or object references.
// WeakMap: This object is a collection of key/value pairs in which the keys are weakly referenced.  The keys must be objects and the values can be arbitrary values.
// Promise: This object is used for asynchronous computations. A Promise represents a value which may be available now, or in the future, or never.

// Write a program that does the following:
// Generate a random decimal number between 0 and 100 (EG: 93.60745257237626) and store it in a variable.
var randomDecimal = Math.random() * 100

// Round the number to the nearest integer (EG: 94)
var num1 = Math.round(randomDecimal)

// Round the number up to the next largest integer (EG: 94)
var num2 = Math.ceil(randomDecimal)

// Round the number down to the next smallest integer (EG: 93)
var num3 = Math.floor(randomDecimal)
// Print all four numbers out with labels.
console.log('Round the number to the nearest integer', randomDecimal, num1)
console.log('Round the number up to the next largest integer', randomDecimal, num2)
console.log('Round the number down to the next smallest integer', randomDecimal, num3)

// Write JavaScript code that generates a random integer in the range -10 to 10.
console.log(Math.round(Math.random() * 10) - Math.round(Math.random() * 10))
