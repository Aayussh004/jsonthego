// Function ko aur dusre tarike se bhi declare kr skte hai like arrow func.

// "Note" :
// Arrow function smjhne ke liye "this" keyword smjhna pdega
// Arrow func ke andar "this" use nhi krte


//*********************** "this" and "Arrow function"***********************************/

// I: FUNCTION DECLARATION USING OBJECT
const user = {
  username: 'Ayush',
  price: 999,

  welcomemsg: function () {
    console.log(`Welcome to the website... ${this.username}`); //to refer to the local value of username
    console.log(this); //to see the current values of variables
  },
};

user.welcomemsg();
user.username = 'Rupali'; //changed the name
user.welcomemsg();

// interviewer : why the global console.log(this) gives blank value in nodejs but windows object in browser console?
console.log(this);
// bcoz phle ke zamane me saari js browser ke console se seekhi jati this to window compatible chije thi but ab us js engine ko nikal
// ke software compatible bnaya gya jisme windows object ki zarurat nhi hai, to this khali hi rhega na


// II: FUNCTION DECLARATION USING FUNCTION ONLY hehe :)

function hello(){
    const username = "Sachin"
    console.log("hello world");
    console.log(this.username)//will print undefined kyuki "this" keyword ki sirf object ke andar chalti hai baaki jagah bhigibilli ban jata h same goes with "variable stored function"
}
hello()


// III: FUNCTION DECLARATION USING VARIABLE STORED FUNCTION

const hellog = function(){
    console.log("this is variable stored function")
}

hellog()


// IV: FUNCTION DECLARATION USING ARROW FUNCTION 
//do a slight change in III wala :  function ki jagah "=>" ye use krlo 

const arrowfunc = ()=>{
    username = "Hellow moto"
    console.log("This is arrow function ")
    console.log(this.username)// undefined
    console.log(this)// {} empty object tht's why we don't use this keyword in arrow function
}

arrowfunc()

//types of arrow function : 

// Type I: Explicit declaration => isme return likhna pdta h kyuki code curly braces me enclosed hota hai { return something; }

const func1 = (n1,n2)=>{
 return n1+n2;
}
console.log(func1(5,8));


// Type II: Implicit declaration => isme return nhi likhna pdta h kyuki code paranthesis me enclosed hota hai ( something; )
const func2 = (n1,n2)=> (n1+n2);

//iska use tb hota h jb aapko object return krna ho to {username:"Ayush"} ko likhna ({username:"Ayush"}) to return ho jaega
console.log(func2(2,12));
