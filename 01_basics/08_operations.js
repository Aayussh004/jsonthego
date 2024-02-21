// console.log("2">1); //true
// console.log("02">1); //true

console.log(null>0);
console.log(null<0);
console.log(null==0);

// The reason is that an equality check == and comparison > < >= and <=
// work differently 
//comparison convert null to a number, treating it as 0
//that's why null>=0 is true and null>0 is false same goes with undefined
console.log(null<=0);
console.log(null>=0);

//"===" this will strictly check the datatypes also
console.log("2"===2);