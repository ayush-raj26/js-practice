// Immediately Invoked Function Expressions (IIFE)

// To make sure the function is executed immediately, you can wrap the function in parentheses and then call it. This is known as an Immediately Invoked Function Expression (IIFE).
// This helps to prevent polluting the global scope with variables that are only needed within the function.\

(function chai() {
    // Named IIFE
    console.log(`DATABASE CONNECTED`)
})(); // DATABASE CONNECTED

( () => (console.log(`DB CONNECTED AGAIN`)))();

(( username ) => {
    console.log(`Welcome ${username}`)
})('John Doe'); // Welcome John Doe

