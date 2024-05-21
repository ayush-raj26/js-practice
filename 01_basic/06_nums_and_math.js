const score = 540;
console.log(score); // 540

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(`The balance in string form is ${balance.toString()} and its type is ${typeof balance.toString()} and its length is ${balance.toString().length}`); // The balance in string form is 100 and its type is string and its length is 3

console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.989
console.log(otherNumber.toPrecision(3)); // 124
console.log(otherNumber.toPrecision(2)); // 1.2e+2

const num1 = 1000000000;
console.log(num1.toLocaleString('en-IN')); // 1,00,00,00,000



// *********************** MATHS ************************

console.log("\n*********************** MATHS ************************");
console.log(Math); // Math object
console.log(Math.abs(-100)); // 100 

console.log(Math.round(4.3)) // 4
console.log(Math.round(4.6)) // 5

console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.6)) // 4

console.log(Math.min(2, 1, 3, 4, 5)) // 1
console.log(Math.max(1, 2, 3, 4, 5)) // 5

console.log(Math.random()); // Random number between 0 and 1
// Now to get random values between 10 and 20
const min = 10;
const max = 20; 
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20
