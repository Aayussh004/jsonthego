// ********** MEMORY **********

// Saari primitive datatypes stack memory use krte hai
// stack memory mtlb copy banta hai

// Saari Non-Primitive datatypes ye reference datatypes heap memory use krte hai
// means unka copy nhi bnta original values change hoti h change krne pr just like in c++


let myName = "Ayush"
let dupName = "Surya"

console.log(myName)
console.log(dupName)

//now using object, function, arrays

let obj1 = {
    email: "ayush@gmail.com",
    upi_id: "surya@ybl",
}

let obj2=obj1
obj2.email="surya@gmail.com";
console.log(obj1.email)


//using array
let arr1 = ["Ayush", 23, "Male"];
console.log(arr1)

let arr2=arr1
arr2[0]="Surya"
console.log(arr1)



