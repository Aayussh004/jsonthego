

function loginUserMessage(username) {
  if (username === undefined) {
    return 'User logged in';

  }
  return `${username} just logged in`;
}

console.log(loginUserMessage()); //undefined means false value
console.log(loginUserMessage("hitesh"))

// ********** Shopping cart issues ************ //

//aapka customer cart me kitne item add krega ye kisko pta hai to uske liye hum rest/spread operator use krte hai (three dots ...)





// *** rest operator ***




function calculateCartPrice(...num1) {
  return num1; // 2 4 5 20
}
console.log(calculateCartPrice(2, 4, 5, 20));

function calculateCartRate(val1, val2, ...num1) { //... is the rest operator we are using
  return {val1,val2,num1};// 500 2000
}

console.log(calculateCartRate(200, 400, 500, 2000));

//ab agar mujhe function parameter me ky lena hai nhi pta hai to anyObject use krenge
//ye user obj hai
const user = {
  username: 'hitesh',
  prices: 199,
};

//iss function me user ke keys ka shi naam likhna nhi to values fetch nhi honge
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

handleObject(user); //iske andar humne apna object pass kr diya
handleObject({
  username: 'sam',
  prices: 399,
}); //ya phir directly object bhi pass kr skte the

//isi tarah se array bhi pass kr skte hai by using getArray
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];//to get any idx val in array don't use spread or rest operator
}

console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
