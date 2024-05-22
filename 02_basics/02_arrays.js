const marvel_heros = ["thor", "ironman", "captain america", "black widow", "hulk"];
const dc_heros = ["batman", "superman", "flash", "wonder woman", "green lantern"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Array of arrays

// all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // Array of strings of all heros

const all_heros = [...marvel_heros, ...dc_heros]; // Spread operator 
// Spread operator is used to expand an array into individual elements
console.log(all_heros); // Array of strings of all heros

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const usable_array = another_array.flat(2); // flat() method is used to flatten an array
const usable_array = another_array.flat(Infinity); // flat() method is used to flatten an array
console.log(usable_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("hello")) // false
console.log(Array.from("hello")) // ["h", "e", "l", "l", "o"]   
console.log(Array.from({name : "hello"})) // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]


