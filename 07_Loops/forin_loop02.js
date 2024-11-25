//************************** "forin" loop *****************************/ map se parhej krta h
// for (const key in object) {
    //     if (Object.hasOwnProperty.call(object, key)) {
        //         const element = object[key];
        
        //     }
        // }
        
const obj = {
            cpp:"c++",
            js: "javascript",
            rb: "ruby",
            swift: "swift by google"
        }


//ab is sasura ko iterate krne ke liye humne forin loop izaat kiya kyuki forEach se kaam nhi ho rha tha
        
for(const key in obj){
    console.log(` ${key} : ${obj[key]}`)//seedha value print krra :)
}

//Note: "forin" loop array,object me to chl jayega pr map pe nhi "prints nothing"

