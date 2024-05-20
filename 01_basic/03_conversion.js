let score = "33"
score = "33ac"
score = null
score = undefined

// console.log(typeof score);  // String

let scoreInNumber = Number(score)
// console.log(typeof scoreInNumber);  // Number
// console.log(scoreInNumber);  // 33
// console.log(typeof scoreInNumber);  // Number
// console.log(scoreInNumber);  // NaN
// console.log(typeof scoreInNumber);  // Number
// console.log(scoreInNumber);  // 0
// console.log(typeof scoreInNumber);  // Number
// console.log(scoreInNumber);  // NaN

let isLogged = 1
let isLoggedIn = Boolean(isLogged)

// console.log(isLoggedIn);  // true

// 1=> true; 0 => false; 
// "" => false
// "Ayush" => true


//  ********************* OPERATIONS *****************
let value = 3
let negValue = -value
// console.log(negValue); // -3


let str1 = "hello"
let str2 = "world"
str3 = str1 + str2;
// console.log(str1 + str2);  // helloworld
// console.log(str3);  // helloworld

console.log(str1 + 3);  // hello3
console.log(str1 + 3 + 3);  // hello33
console.log(3 + 3 + str1);  // 6hello
// whichever data type comes first node js will convert all other data types to that data type if possible

console.log(+true); //1
console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 3 + 3;
console.table([num1, num2, num3]);
