//Use of .call and their two parameters
// call - current execution context kisi aur ko pass krta hai

//yha pe humne function ke andar agr koi function ho to usme aapko uske argument access krne me ky problem hoti hai aur use this ka use krke kaise solve krte hai wo discuss kiya hai

function SetUsername(username){//child function
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){//parent function
    // SetUsername(username);//isse to problem hogi kyuki ye call to ho rha hai but wo assign nhi kr rha username to uske liye .call use krte hai
    //isko aise smjho ki ye method callstack me gya aur wha chla pr phir gayab ho gya to uske liye mujhe reference chahiye taaki original method me changes ho 

    SetUsername.call(this, username)//call to child func
    //yha pe hum apne func createusr ka this use kr rhe hai to ye original reference ho gya
   
    this.email = email
    this.password = password
}

const chai = new createUser("Ayush", "chai@facebook.com", "Ayush@223")
console.log(chai);