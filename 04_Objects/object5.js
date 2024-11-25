//important use of arrays,keys,values

// i.e. Arrays as output => Object.keys(obj_name), Object.values(obj_name), Object.entries(obj_name)
//and boolean as output => obj_name.hasOwnProperty('property')
const tinderuser = {
  id: 1,
  name: 'Sammy',
  isloggedin: false,
};
//ab agr is user ki mujhe key chahiye in the array then
console.log(Object.keys(tinderuser)); //no. of column present
console.log(Object.values(tinderuser)); //total response present
console.log(Object.entries(tinderuser)); //gives key value pair as an output
console.log(tinderuser.hasOwnProperty('isloggedin')); //ky aapke database me "isloggedin" naam ka column h?
console.log(tinderuser.hasOwnProperty('email')); //ky aapke db me "email" ka column hai?

//now ab arrays me bohot saare objects hai aur unke kisi ek object ko access krna ho to i.e. (arr[i].key)
const arr = [
  {
    id: 1,
    login: true,
  },
  {
    id: 2,
    login: false,
  },
  {
    id: 3,
    login: false,
  },
  {
    id: 4,
    login: true,
  },
];
console.log(arr[1].login);
console.log(arr[2]);
