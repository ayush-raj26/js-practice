// for of

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    console.log(`Value: ${val}`);
}

const str1 = "Hello Ayush"
for (const val of str1) {
    console.log(val);
}

// maps => has unique keys, has key value pairs, unordered, cannot find duplicate values in this
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('FR', 'France')

// console.log(map);

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}

const myObj = {
    game1: 'Cricket',
    game2: 'Football',
    game3: 'Basketball'
}

// for (const [key, value] of myObj) {
//     log(`Key: ${key}, Value: ${value}`);
// }

// object is not iterable through for of loops

// Object.entries() => returns an array of key value pairs

// FOR - IN loop

for (const key in myObj) {
    console.log(`Key: ${key}, Value: ${myObj[key]}`);
}

const programming = ['JavaScript', 'Python', 'Java', 'C++']
for (const key in programming) {
    console.log(`Index: ${key}, Value: ${programming[key]}`);
}

// for in loop takes indexes and not the value of the array

// cannot use for in loop with maps.

// FOR EACH LOOP
const coding = ['JavaScript', 'Python', 'Java', 'C++','Swift']
coding.forEach( function (val){
    console.log(val);
})

// Arrow function
// coding.forEach( (val) => {
//     console.log(val);
// })

function printMe(val) {
    console.log(val);
}

coding.forEach(printMe) // Give reference to the function

coding.forEach( (val, index, arr) => {
    console.log(`Index: ${index}, Value: ${val}, Array: ${arr}`);
})