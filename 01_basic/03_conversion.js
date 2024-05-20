let score = "33"
score = "33ac"
score = null
score = undefined

console.log(typeof score);  // String

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

console.log(isLoggedIn);  // true

// 1=> true; 0 => false; 
// "" => false
// "Ayush" => true