//interviewer:  "how will you implement nested objects", its also known as optional chaining

const user = {
  name: 'Ayush Suryawanshi',
  father: {
    //ek object banaya hu user object ke andar
    name: 'Sarvind Suryawanshi',
    father: {
      name: 'Kishori Lal Suryawanshi',
    },
  },
};

console.log(user.name);//Ayush
console.log(user.father.name);//Sarvind
console.log(user.father.father.name);//Kishori Lal



//Destructuring
//syntax to directly use object keys without using dot operator - object destructure
const obj = {
  name: 'Ayush',
  email: 'ayush@gmail.com',
  age: 23,
};
//ab mujhe email access krna h to me baar baar obj.email thodi likhunga bs ek baar ye likhunga(below)

const { email } = obj;
console.log(email);
