//reducer function 

//isme krna kuch nhi h bas accumulator ek khali jhola h jo ek initial value mangta hai aur 
// aage ke saare log accumulator me add hote jate hai

const arr = [1,2,3,4,5]
const intial_val = 0;


let mytotal = arr.reduce(function (accumulator,current_val){
return accumulator + current_val;
}, intial_val);//function ke bahar intial value dete hai smjhe babua :)

console.log(mytotal);


//or the above code can be written using arrow function also bit confusing :|
let yourtotal = arr.reduce((acc,curr)=> (acc+curr),intial_val);
console.log(yourtotal);


//chalo real world problem solve kre
const shopping_cart = [
    {
        coursename: "js course",
        price: 1999
    },
    {
        coursename: "py course",
        price: 999
    },
    {
        coursename: "mobile dev course",
        price: 3999
    },
    {
        coursename: "datascience course",
        price: 5999
    }
]

//interviewer: add prices of all the items in the cart and show total checkout price

const total_price = shopping_cart.reduce((acc,curr)=>acc+curr.price,0);
console.log(total_price);

//ya phir forEach se bhi kr skte h kyuki array of object h
let sum=0;
shopping_cart.forEach((it)=>{
  sum+=it.price;
})
console.log(sum)