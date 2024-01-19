//Objects
//ye key value pair hota hai

//we can create objects of two types
//ek me singleton object create hoga - object constructor
//or ek me non singleton hoga normal object hoga - object literals

//symbol
mysymbol = Symbol('chaabi-1');

//object literals or non-singleton
const obj = {
  name: 'Ayush',
  age: 23,
  [mysymbol]: 'chaabi - 3', //ye symbol ke liye hai syntax
  location: 'Chhindwara',
  email: 'ayushsuryawanshi004@gmail.com',
  isloggedin: false,
};

console.log(obj.name);
console.log(obj['age']); //ye jyada acha tarika hai obj ko access krne ke liye

//now abhi interviewer ne bola ki ek symbol ko object me use krke batao
//to uske liye sirf ye yaad rkhna h ki symbol ko square bracket me use krna h obj ke andar
console.log(typeof obj.mysymbol); //ye aapko string dega but aapko to symbol use krna tha
console.log(typeof [mysymbol]); //ye to symbol hai "Congratulations"
console.log(obj); //this will show you the types of chutiyas present in objects

//agr object me aap chahte hai ki koi further changes naa kre to use freeze functionality
// Object.freeze(obj)

//interviewer: now ab agr object ko function ke saath use krna ho to
obj.myfunc = function () {
  console.log(
    'We are writing inside the myfunc function of obj object, hehe...'
  );
};
//to print it
obj.myfunc()
