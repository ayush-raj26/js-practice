// Array

const myArr = [0, 1, 2, 3, 4, 5, "Ayush", true]   // Array of mixed data types and arrays are resizable
console.log(myArr[6]); // Ayush
// JS arrays copy operations are by reference, and thus they create shallow copies

const myNewArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // Another way to create an array


// Array methods
myNewArr.push(11); // Adds an element to the end of the array
console.log(myNewArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

myNewArr.pop(); // Removes the last element from the array
console.log(myNewArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNewArr.unshift(0); // Adds an element to the beginning of the array
console.log(myNewArr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNewArr.shift(); // Removes the first element from the array
console.log(myNewArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(myNewArr.includes(5)); // true
console.log(myNewArr.indexOf(19)); // -1

const arr2 = myNewArr.join()
console.log(arr2); // 1,2,3,4,5,6,7,8,9,10
console.log(typeof arr2) // string

// Slice and Splice

const myN = myNewArr.slice(2, 5); // Slices the array from index 2 to 5
console.log(myN); // [3, 4, 5] (index 2 to index 4)
console.log(myNewArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myN2 = myNewArr.splice(2, 3); // *splice(start, delete count)* Slices the array from index 2 to 5  
console.log(myN2); // [3, 4, 5, 6] 
console.log(myNewArr); // [1, 2, 7, 8, 9, 10]