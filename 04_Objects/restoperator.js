//objects ko kaise combine krte hai?

obj1 = { 1: 'a', 2: 'b' };
obj2 = { 3: 'c', 4: 'd' };
obj3 = { 5: 'e', 6: 'f' };

//*********** wrong method */
const objj = { obj1, obj2, obj3 };//kyuki ye krenge to array ke andar array aa jayega but hume to single combined array values chahiye
console.log("objj:",objj)

// ********* right method

// method-1(assign operator) i.e. (Object.assign(obj_names))

// const obj1meadded = Object.assign(obj1, obj2, obj3); //saari values obj1 me jaa rhi hai
// console.log("obj1:",obj1)
const objwithassign = Object.assign({}, obj1, obj2, obj3); //saari values {} me jaa rhi hai

//method-2(spread operator) i.e. (...obj_name)
const objwithrest = { ...obj2,...obj1, ...obj3 };

console.log("objwithrest:",objwithrest);
console.log("objwithassign:",objwithassign);
