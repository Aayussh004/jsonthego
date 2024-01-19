const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);//gives length of no.
console.log(balance.toFixed(3));//it will extend to 3 digit after decimal 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));//it will round off upto 4 digits

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//it will give commas in the no.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//gives random values from 0 to 1
console.log((Math.random()*10) + 1);//value will not be 0 and between 1 to 10
console.log(Math.floor(Math.random()*10) + 1);//will be integer

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//to have random values of a dice from 1 to 6 formula