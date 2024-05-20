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
