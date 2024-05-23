// Dates

let myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // Tue May 21 2024 09:25:35 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue May 21 2024
console.log(myDate.toLocaleString()); // 5/21/2024, 9:25:35 AM

let myNewDate = new Date(2023, 3, 23)
console.log(myNewDate.toDateString()); // Sun Apr 23 2023 
// Months start from 0, so 3 is April
let myNewDate2 = new Date(2023, 3, 23, 4, 5) 
console.log(myNewDate2.toLocaleString());  // 4/23/2023, 4:05:00 AM
let myNewDate3 = new Date("2023-03-23") // In this format month starts from 1
console.log(myNewDate3.toDateString()); // Sun March 23 2023 
let myNewDate4 = new Date("01-04-2023") // In this format month starts from 1
console.log(myNewDate4.toDateString()); // Wed Jan 04 2023 

let myTimeStamp = Date.now();

console.log(myTimeStamp) // 1653135935000 (mili seconds)
console.log(myDate.getTime()) // 1653135935000 
console.log(Math.floor(Date.now() / 1000)) // 1653135935 (in seconds)

let Date1 = new Date();
console.log(Date1.getFullYear());
console.log(Date1.getMonth() + 1); // Months start from 0 therefore +1
console.log(Date1.getDate());

// To customise the output of locale string
myNewDate.toLocaleDateString( 'defualt', {
    weekday : 'long',  
}
); 
