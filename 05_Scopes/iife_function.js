// IIFE : Imediately Invoked Function Expression (2 paranthesis lagao aur fursat pao)


// syntax:  ()() => (this is for function definition) (this is for calling that function)

//interviewer : Why we use IIFE function?
// Ans1: to imediately invoke any function. (Rejected)
// Ans2: to reduce the global pollution that global variable may produce so to make local scope pollution free we use iife. (Accepted :))

// normal function 
(function chai(){//function calling
    console.log("This is for normal function")
})();//invoking the function

//arrow function wo bhi bina naam ka
((name)=>{//here we are calling the function
    console.log(`This is arrow function ${name}` )
})("Ayush");//here we are invoking the function as well

// Advise: Always put semicolon ";" at the end of IIFE function otherwise error milega aur tum pagal ho jaoge