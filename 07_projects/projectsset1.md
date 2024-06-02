# Projects related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-prwuyt?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,index.html)


# Solution Code

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