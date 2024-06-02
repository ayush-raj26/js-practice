# Projects related to DOM

## Project Link
### [Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-prwuyt?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,index.html)


# Solution Codes for Each Project

## Project 1

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target); // gets the target from where event is selected.
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } 
    else if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    } 
    else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } 
    else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    } 
    else if (event.target.id === 'wheat') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
```

## Project 2
``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
    results.style = 'font-size: 15px; color: black';
  } else if (weight === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid weight';
    results.style = 'font-size: 15px; color: black';
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `The BMI is ${BMI}`;
    results.style = 'font-size: 15px; color: black';
  }
});
```

## Project 3
``` javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // will run the function every 1000 ms
```

## Project 4

``` javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (event) {
    event.preventDefault();
    validateGuess(parseInt(userInput.value));
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else if (guess > 100) {
    alert('Please enter a number less than 101');
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      guessDisplay(guess);
      displayMessage(`Game Over! 
      Random Number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(guess);
      displayMessage(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations !!! You have guessed the correct number.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Your guess ${guess} is lower than the required number`);
  } else if (guess > randomNumber) {
    displayMessage(`Your guess ${guess} is higher than the required number`);
  }
}

function guessDisplay(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}, `;
  numGuesses += 1;
  remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h3 id="newGame"> Start New Game</h3>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const startNew = document.querySelector('#newGame');
  startNew.addEventListener('click', function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}
```