# This is our second project
## Topic - BMI calculator

## To directly start coding for this project in  javascript only and not to worry about css and html we have created a plateform in stackblitz website where you can practice, click on preview button on top right corner of vs code

[Go to stackblitz website](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 2

```javascript

<!-- Here I can write my javacript code, its just a way to ease your study for readable codes -->

//I need to select two things first is body and second is buttons
const bodycolor = document.querySelector('body');
const colorbutton = document.querySelectorAll('.button');

// now we have to make a click event so that background changes
// I will use for loop for button because whn I click on any then it must do something

colorbutton.forEach(function (butt) {
  //at first we need to go inside form coz whn we submit form only after tht we will get values

const form = document.querySelector('form');

form.addEventListener('submit', function (submit) {
  // console.log(submit);
  submit.preventDefault();
  //now take both height and weight values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  //for inputing result
  const result = document.querySelector('#results');
  //now check if height and weight me invalid ya khali values aa rhi h ky if yes then result me invalid likh do

  console.log(weight)
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'You have eneterd invalid height';
  } 
  else if (weight === '' || weight < 0 || isNaN(weight) ) {
    result.innerHTML = 'You have eneterd invalid weight';
  } 
  else {
    const ans = (weight / ((height * height) / 10000)).toFixed(2);
    //now iss ans ko show karao
   
    if(ans<18.6){
      result.innerHTML = `${ans}, You are underweight`
    }
    else if(ans>=18.6 && ans <=24.9){
      result.innerHTML = `${ans}, You are Normal`
    }
    else if(ans>24.9){
      result.innerHTML = `${ans}, You are overweight`
    }
  }
});


```