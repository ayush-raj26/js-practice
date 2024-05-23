let a = 10
const b = 20
var c = 30

if (true) {
    let a = 50
    const b = 60
    var c = 70

    // console.log("a => BLOCK SCOPE: ",a)  // 50
}

// console.log(a)  // Scope of let is within the block
// console.log(b)  // Scope of const is within the block
// console.log(c)  // Scope of var is global

// Global scope in JavaScript is the outermost scope. Variables declared outside of any function are in the global scope. Global variables can be accessed and modified from any part of the code.

// Global scope is different in console of browser and when we use it through node.js


function one(){
    const userName = "Ayush"

    function two(){
        const website = "www.ayush.com"
        console.log(userName)
    }
    // console.log(website)  // ReferenceError: webSite is not defined

    two()
}

one()


// ********************** INTERESTING SHIT ***********************

console.log(add1(5)) // Can use it before declaration

function add1(num) {
    return num + 1;
}


// add2(5) // Error, if function is stored in a variable then we cannot access it before its declaration
const add2 = function(num) {
    return num + 2
}









