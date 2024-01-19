//**************************** "foreach" loop *************************************/
// const arr = [1,2,4,3,8,9]
// arr.forEach(function (it){
//     console.log(it)//will print the arr or mp values
// })

//most important use of "foreach" loop
//array ke andar objects hai
const myarr = [
    {
        langname : "js",
        lang : "javascript"
    },
    {
        langname : "cpp",
        lang : "c++14"
    },
    {
        langname : "cpp",
        lang : "c++17"
    },
    {
        langname : "py",
        lang : "python 3.0"
    },
    {
        langname : "py",
        lang : "python 4.2"
    },
    {   
        langname : "kt",
        lang : "kotlin"
    }
]

myarr.forEach((i)=>{
// console.log(i.langname)
// console.log(i.lang)
console.log(i)
})

const mylangval  = myarr.filter((item)=>{
 return item.langname=== "py"; //yha se object return kiya
})
console.log(mylangval)//mei yha lang ke basis me value filter kr rha hu


//now ab problem ye hai "foreach" me ki mujhe koi mid value access krni hai to kaise kru?
//Solution hai use filter kyuki foreach loop kuch return nhi krta but filter krta h aap krwao to shi
const arr = [1,2,4,3,8,9,14]
const values = arr.filter((i)=> i>=4)//ye bhi function le leta h apne andar
console.log(values);


// Note: "foreach" loop array and map me chlegi pr obj me nhi gives "error"