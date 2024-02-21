// Datatypes

// Primitive
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// Arrays, Objects, Functions

//ex :ss

// ##########  Primitive
// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedin = false;
const temperature = null;
console.log(typeof temperature); //ye mujhe object type batayega
let useremail; //its type is undefined now

//the values in below consts are not same ye symbol ka jyadu hai
const id = Symbol('123');
const anotherid = Symbol('123');
//these are not equal
console.log("id==anotherid:",id == anotherid);

// const bigNumber= 234561645615652n;//n will automatically convert const to BigInt
// console.log(typeof(bigNumber))

//########### Reference (Non Primitive)
// Arrays, Objects, Functions

//array
const heros = ['shaktiman', 'nagraj', 'doga'];

//object
let myObj = {
  name: 'Ayush',
  age: 23,
};

//functions
const myfunc = function () {
  console.log('Hello World');
};
myfunc();
console.log(typeof myfunc); //its type is function but actually its function object
