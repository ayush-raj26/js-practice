// Types of Datatypes
// 1. Primitive Datatypes ()
//     - Number, String, Boolean, undefined, null, Symbol, BigInt

const id = Symbol("ABC")
const anotherId = Symbol("ABC")

console.log(id === anotherId)  // false

// 2. Reference Datatypes / Non-Primitive Datatypes
//     - Objects, Array, Functions  

const heros = ["Batman", "Superman", "Flash"] //array
let mObj = {
    name: "Ayush",
    age: 21
} // object

const myFunction = function(){
    console.log("This is a function");
} 

// JS is a dynamically typed language, which means that the type of the variable is determined at runtime.  

// Documentation => https://262.ecma-international.org/5.1/#sec-11.4.3



// ********************* Memory Allocation ******************

// Primitve Datatypes are stored in the stack memory, while the reference datatypes are stored in the heap memory.
// Stack (Primitve) ; Heap (Non Primitve)
// In stack we get copy of the variable, while in heap we get the reference of the variable.

// Eg 1:
let myName = "Ayush"
let myAnotherName = myName
myAnotherName = "Ayush Raj"
console.log(myName);  // Ayush
console.log(myAnotherName);  // Ayush Raj

// Eg 2:
let user1 = {
    id: "user1@google.com",
    upi: "user1@ibl"

}
console.log("User ID before referencing to other variable(object): ", user1.id);  //

let user2 = user1;
user2.id = "changeid@google.com"

console.log(user1.id);  // changeid@google.com
console.log(user2.id);  // changeid@google.com