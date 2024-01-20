//isme hume agr koi property of a user class hai jaise ki pswd ab wo koi bahar ka banda access kre to encrypt hokr show hona chahiye to hum uske liye getter and setter use krenge
//but agr getter and setter me same naam ho jo aapke constructor me ho to phir ambiguity hogi and ek race lag jayegi jisse callstack memory exceed kr jaegi to uske liye hum _password use kiye hai
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //agr getter hai to setter ko bhi mention krna padega
    //get me hamesha return hota hai
    get email(){
        return this._email.toUpperCase()
    }
    //set me humesha value equate hoti hai no return value
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);