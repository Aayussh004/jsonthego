//function ke scope ke baare me baat ki hai

function one() {
  const name = 'Ayush';

  function two() {
    const gmail = 'ayush@gmail.com';
    console.log(name); //no error
  }

  //   console.log(gmail); //this will give error as gmail is only local to two func
  two();
}

one();

// ********************************** Hoisting ******************************

//isme simple ye pta rhna chahiye ki normal function ko hum unke definition se phle call kr skte hai
//but variable stored function ko nhi
//isi ko execution context bolte hai

//normal function
addone(4);
function addone(num) {
  console.log(num + 1);
}

//variable stored function

// addtwo(7);//error dega

const addtwo = function (num) {
  console.log(num + 2);
};
addtwo(7);
