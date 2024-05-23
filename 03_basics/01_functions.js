function addTwoNumbers(number1, number2) {

    // return number1 + number2;anything will
    let result = number1 + number2;
    return result;
} // function ends here

result = addTwoNumbers(3,4);
console.log("Result: ", result);

function loginUserMessage(userName){
    return `${userName} has logged in`;
}

let msg = loginUserMessage("John"); // if not passed anything, it will return undefined
console.log(msg);


function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500))  // When we don't know how many arguments will be passed, we can use rest operator
// Return an array of the arguments passed

const user = {
    userName: "John",
    price: 199
};

function handleObject(anyObject) {
    console.log(`User ${anyObject.userName} has purchased an item of price: ${anyObject.price}`);
}

handleObject(user);

handleObject({
    userName: "Jane",
    price: 299
});

const myNewArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function retrunSecondValue (getArray) {
    return getArray[1];
}

console.log(retrunSecondValue(myNewArray));
