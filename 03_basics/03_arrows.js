const user = {
    name: "John", 
    price: 400,

    welcomeMessage: function(){
        console.log(`Hello Mr. ${this.name}. We welcome you to our website`) // this function refers to the current object
        console.log(this) 
    }

}

user.welcomeMessage()

user.name = "Sami"
user.welcomeMessage()

console.log(this) // this refers to the global object
// this here will give us the global object which is the window object in the browser and the global object in node.js

//  function chai(){
//      let username = "Ayush"
//      console.log(this); // many many things
//      //console.log(this.username) // undefined, this cannot be used in fuctions, can only be used in objects
//  }
//  chai() // this refers to the global object


// const chai2 = () => {
//     let username = "Ayush"
//     console.log(this); // {}
//     console.log(this.username) // undefined, this cannot be used in fuctions, can only be used in objects
// }
// chai2()     // way to create an arrow function


// () => {} // this is syntax of an arrow function

const addTwoNumbers1 = (a, b) => {
    return a + b;
}

console.log(addTwoNumbers1(2, 3))

// doing this the implicit return way
const addTwoNumbers2 = (a, b) => a + b;
const addTwoNumbers3 = (a, b) => ( a + b );

console.log(addTwoNumbers2(3,5));
console.log(addTwoNumbers3(3,5));


const returnObject = (a, b) => ({username: "Ayush "});
console.log(returnObject(3,5));
