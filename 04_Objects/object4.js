//objects ko kaise combine krte hai?

obj1 = { 1: 'a', 2: 'b' };
obj2 = { 3: 'c', 4: 'd' };
obj3 = { 5: 'e', 6: 'f' };

//*********** wrong method */
// const obj = { obj1, obj2, obj3 };//kyuki ye krenge to array ke andar array aa jayega but hume to single combined array values chahiye

// ********* right method
// method-1(assign operator) i.e. (Object.assign(obj_names))

// const obj = Object.assign(obj1, obj2, obj3); //saari values obj1 me jaa rhi hai
const obj = Object.assign({}, obj1, obj2, obj3); //saari values {} me jaa rhi hai

//method-2(spread operator) i.e. (...obj_name)
const obbj = { ...obj1, ...obj2, ...obj3 };

console.log(obbj);
console.log(obj);
