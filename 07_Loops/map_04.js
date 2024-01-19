//ye koi map datatype nhi hai balki inbuilt function hai like filter jo ki value return krta h

const arr = [1,2,3,4,5,6,7];

let values = arr.map((item)=> {
    return item+100;
})

//chaining 
let newval = arr
            .map((num)=> num*10)
            .map((num)=>num+1)
            .filter((num)=>num>50)


// console.log(values)//will give an array as output with changed values
console.log(newval)

// Note: filter me humesha bool values check krna yes ya no wali