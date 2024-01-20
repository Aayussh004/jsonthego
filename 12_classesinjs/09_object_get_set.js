//pichle wale me jo kiye the whi hai but yha direct native or core js ke roop me direct object ka use krke banaya gya hai
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)//bahut phle hum aise bhi object banate the here Object.create is a factory function
console.log(tea.email);//but humne to _email use kiya tha as a property iska mtlb ye get email() function hai