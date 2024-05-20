const accountId = 144553    
let accountEmail = "ayushRaj@gmail.com"  // let is used to declare a variable, it can be changed later, and it does not have any issue in block scope
var accountPassword = "12345"   // try not to use var, it is a global scope variable
accountCity = "Vadodara"
let accountState; // by default it is undefined

// accountId = 2   accountId is const therefore it cannot be changed further
// All the others can be changed
accountEmail = "ay@gmail.com"
accountPassword = "54321"
accountCity = "Ahmedabad"

console.log(accountId);
    
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])