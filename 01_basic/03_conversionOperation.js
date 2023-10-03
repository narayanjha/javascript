console.log("conversion and operation")
let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueOfNumber = Number(score);
console.log(typeof valueOfNumber);

// "33" => 33
// "33aee" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn)
// true => 1; false => 0
// "" => false
// "narayan" => true

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber)
console.log(typeof stringNumber)