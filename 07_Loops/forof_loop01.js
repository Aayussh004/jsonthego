//*************************** "forof" loop ************************************/
const arr = [11,12,13,14,15]
for (const i of arr) {
    console.log(i)
}
//just like for(auto i:arr){ cout<<i;} in c++

const mp = new Map();
mp.set("a","Ayush")
mp.set("b","Ball")
mp.set("c","Cat")
mp.set("d","Dog")
mp.set("e","Elephant")
// console.log(mp)

//agar khali value print krani ho to i ki jagah [key,val] lelo
for (const [key,val] of mp) {
    console.log(`${key} for:`,val);
}
console.log("\n")
// Note: forof loop cannot be used for object, forin loop use krlo simple :)


// for - arr,obj,map
// foreach - arr,map
// forin - arr,obj
// forof - arr,map