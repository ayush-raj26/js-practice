const tinderUser = new Object() // singleton object
// const tinderUser = {} // non singleton object

tinderUser.id = "ayu1346"
tinderUser.name = "Ayush"
tinderUser.isLoggedIn = true

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            userFirstName: "Ayush",
            userLastName: "Raj"
        }
    }
}

console.log(regularUser.fullName?.userFullName.userFirstName);  // optional chaining operator

const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}

// const obj3 = Object.assign({}, obj1, obj2) // 1st is Source object, target object
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        name: "Ayush",
    },
    {
        id: 2,
        name: "Raj",
    },
    {
        id: 3,
        name: "Gunnu",
    }
]

console.log(users[2].name);

console.log(Object.keys(tinderUser)); // returns an array of keys
console.log(Object.values(tinderUser)); // returns an array of values
console.log(Object.entries(tinderUser)); // returns an array of arrays of key value pairs

console.log(tinderUser.hasOwnProperty("name")); // returns true if the object has the property



const course = {
    courseName: "JavaScript",
    price: 1000,
    courseInstructor: "Hitesh",
}

// Another syntax to extract the property
const {courseInstructor: instructor} = course;
console.log(instructor);


// In general APIs are just objects
// EventTarget. of typical JSON file contents
// {
//     "name": "Ayush",
//     "course": "JavaScript",
//     "courseDureation": "2 months",
// }

// API can also be in forms of arrays, not necessarily objects