# This is our first project
## Topic - Color Change project

## To directly start coding for this project in  javascript only and not to worry about css and html we have created a plateform in stackblitz website where you can practice, click on preview button on top right corner of vs code

[Go to stackblitz website](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1 

```javascript

<!-- Here I can write my javacript code, its just a way to ease your study for readable codes -->

//I need to select two things first is body and second is buttons
const bodycolor = document.querySelector('body');
const colorbutton = document.querySelectorAll('.button');

// now we have to make a click event so that background changes
// I will use for loop for button because whn I click on any then it must do something

colorbutton.forEach(function (butt) {
  console.log(butt); //this will give all 4 colors

  //now we put event click for each butt
  butt.addEventListener('click', function (eventobj) {
    console.log(eventobj);
    // bodycolor.style.backgroundColor = 'red';
    //now for every button I have different color so
    if (eventobj.target.id === 'grey') {
      bodycolor.style.backgroundColor = 'grey';
    }
    if (eventobj.target.id === 'white') {
      bodycolor.style.backgroundColor = eventobj.target.id;
    }
    if (eventobj.target.id === 'blue') {
      bodycolor.style.backgroundColor = 'blue';
    }
    if (eventobj.target.id === 'yellow') {
      bodycolor.style.backgroundColor = eventobj.target.id;
    }
  });
});

```