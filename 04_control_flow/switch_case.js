// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3;  // March

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break; // if break not here then the code will execute all the cases below it except default
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;  
    default:
        console.log("Other months");   // If no case matches then default is executed
        break;
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values that you would confuse with falsy values
// "0", " ", [], {}, function(){} 

// 0 == '' // true


// Nullish coalescing operator (??): null undefined
let val1;
val1 = 4 ?? 10; // 4
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10, in place of undefined, we can all a different function for a big code

// Terniary operator
// condition ? true : false;

let age = 20;
age >= 18 ? console.log("You are an adult") : console.log("You are a child");