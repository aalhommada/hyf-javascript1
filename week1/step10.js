let array = [30, "Tom", true];
console.log("Here is an array with the following elements: " + array)
console.log("the type of " + array[0] + " is " + typeof array[0]);
console.log("the type of " + array[1] + " is " + typeof array[1]);
console.log("the type of " + array[2] + " is " + typeof array[2]);
let x = 6/0;
let y = 10/0;
if (x === y) {
  console.log("You CAN compare infinities because " + x + " = " + y);
}
if (x > y) {
  console.log("While both results are infinity 6/0 is greater than 10/0");
}
if (x < y) {
  console.log("While both results are infinity 10/0 is greater than 6/0");
}
else console.log("Both are infinities but no infinity is greater than the other");
