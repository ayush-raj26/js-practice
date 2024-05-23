// Object.create() // making objects through constructor functions, we get singleton objects

// object literals 

const mySym = Symbol("key1")

const JsUser = { 
    name: 'Ayush',
    age: 20,
    [mySym]: 'myKey1', // Symbol key
    location: 'Vadodara',
    email: 'ayushraj26012004@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Thursday', 'Saturday']
}

console.log(JsUser.isLoggedIn);
console.log(JsUser["name"]);

JsUser.isLoggedIn = true;

JsUser.greeting = function() {
    console.log(`Hello our brethen with the name of ${this.name}`);
}

console.log(JsUser.greeting); // [function (anonymous)]
// console.log(JsUser.greeting());
JsUser.greeting();

Object.freeze(JsUser); // freeze the object, now no one can change the values inside the object
