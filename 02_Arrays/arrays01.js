// Arrays

const myArr = [0, 1, 2, 3, 4, 5]; //aise array declare hota hai with definition


const myHeors = ['shaktiman', 'naagraj']; //aise bhi

const vec = new Array(1, 2, 3, 4); //aur ye ek dynamic array
// console.log(vec[1]);

// *******************************  Array methods  ************************************//

myArr.push(6)//aise push back kr skte hai
myArr.push(7)
myArr.pop()//aur ye last wale ko hi pop krega

myArr.unshift(9)//ye push front krta hai but expensive hota h to practice mt krna
myArr.shift()//ye pop front krta hai

console.log(myArr.includes(9));//ye true ya false return krega
console.log(myArr.indexOf(3));//ye index show krega if not exist then -1

const newArr = myArr.join()//ye array ki copy krke string me change krke store krlega
console.log(myArr);//int array
console.log( newArr);//string values

// ******************************   slice, splice  **********************************//

//slice means aapke original array ki copy ban ke samne wale ko denge aur usme range se phle tak saare
//elments included honge i.e. arr.slice(1,5) prints: 1 2 3 4
//slice me original array ka ghnta kuch nhi bigdega

console.log('A(original array) => ', myArr); //original array

const myn1 = myArr.slice(1, 3); //include idx 1 to 2

// console.log("B => ", myArr);//original array
console.log('sliced  array ', myn1, '\n'); //printing new array1
console.log("og array after slicing", myArr,'\n')
//splice aur slice me ye difference hai ki isme ek to range include ho jaegi i.e. original arr: 0 1 2 3 4 5 6 7 8 9
//arr.splice(1,5)  prints: 1 2 3 4 5
//but ye itne bhaag ko original array se ukhaad ke le jata hai, isme original array ka bahut kuch bigdega
//original arr: 0 6 7 8 9
const myn2 = myArr.splice(1, 3); //it include values from idx 1 to 3
console.log('spliced array2 ', myn2); //new array2
console.log('C(original array) after splicing => ', myArr); //original array

//donee
