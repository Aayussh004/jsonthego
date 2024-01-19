# This is our second project
## Topic - Clock

[Go to stackblitz website](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 3

```javascript
const time = document.getElementById('clock');

// const date = new Date();
// const realtime = date.toLocaleTimeString();
// time.innerHTML = `${realtime}`;

//but mujhe hr second nya time milega to uske liye mujhe date ko hr second change krna hoga to we use setInterval in milliseconds

setInterval(function () {
  const date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

```