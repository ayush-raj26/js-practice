const name = "Ayush Raj"
const repoCout = 15

console.log(`My name is ${name}} and I have ${repoCout} repositories on GitHub.`);

// Another way of initialising string
const name1 = new String("Ayush-Raj")
console.log(name1[1]); // y
console.log(name1.__proto__); // String Object
console.log(name1.length); // 9
console.log(name1.toUpperCase()); // AYUSH-RAJ
console.log(name1.charAt(3)); // s
console.log(name1.indexOf('R')); // 6

const newString = name1.substring(1, 4); //char at 1,2,3
console.log(newString); // yus

const newString1 = name1.slice(-8, 4); //char at 1,2,3, we can use negative values too
console.log(newString1); // yus

const newString2 = "          ayush          ";
console.log(newString2) //           ayush
console.log(newString2.trim()); // ayush

const url = "https://www.google.com/ayush%20raj";
console.log(url.replace("%20", "-")); // https://www.google.com/ayush-raj
console.log(url.includes("ayush")); // true

console.log(url.split("/")); // [ 'https:', '', 'www.google.com', 'ayush%20raj' ]