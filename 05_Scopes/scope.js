// ***************don't use var **************** //

var c = 100;//bhai c to 100 hi print hona chahiye

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;// aaji 100 print hoga
}

// console.log(a) ye to error dega kyuki let to local scope me hai
// console.log(b); //ye bhi error dega
console.log(c); //print 30 but c=100 likha h
//agr if statement bahar se import ho rhi hogi to use ghanta pta chalega kon change kr rha hai 100 ko 30
//isiliye kbhi bhi var mt use krna simple let c=100 likh lo
