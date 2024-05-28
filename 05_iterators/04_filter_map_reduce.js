// for each loop doesn't return anything

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
greaterThanFour = myNumbers.filter( (num) => num > 4 )
console.log(greaterThanFour);

// if you want to do this with forEach

// const newNumbers = []  
// myNumbers.forEach( (num) => {
//     if (num > 4) {
//         newNumbers.push(num)
//     }
// })
// console.log(newNumbers);

// MAP Function

const myNumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers1 = myNumbers1.map( (num) => num * 2 )
console.log(newNumbers1);

// const newNumbers1 = myNumbers1.map( (num) => num > 4 )
// console.log(newNumbers1); // will return boolean values for each element in array format


// Chaininig filter and map, we can do the chain any number of times
const chainedOutput = myNumbers1
                        .map( (num) => num * 2 )
                        .filter( (num) => num > 10 );
console.log(chainedOutput);

// REDUCE Function
const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce( function (acc, currNum) {
//     console.log(`acc is ${acc}, currNum is ${currNum}`);
//     return acc + currNum
// }, 0)

const myTotal = myNums.reduce( (acc, currNum) => acc + currNum, 0)

console.log(myTotal);

// at start acc is 0 and currNum is 1

const shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.qty * item.price, 0)
console.log(totalPrice);