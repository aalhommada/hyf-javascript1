"use strict";
let fooNumber = 123;
let fooString = "123";
let fooArray = [1,2,3];
let fooX;
console.log("The value of my variable number is: " + fooNumber);
console.log("The value of my variable string is: " + fooString);
console.log("The value of my variable array is: " + fooArray);
console.log("The value of my variable x is: " + fooX);
console.log("The type of my variable number is: integer");
console.log("The type of my variable string is: string" );
console.log("The type of my variable array is: object");
console.log("The type of my variable x is: undefined");
if (fooNumber === fooString) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooNumber's type is: " + typeof fooNumber + " while fooString's type is:" + typeof fooString);
}
if (fooNumber === fooArray) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooNumber's type is: " + typeof fooNumber + " while fooArray's type is:" + typeof fooArray);
}
if (fooNumber === fooX) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooNumber's type is: " + typeof fooNumber + " while fooX's type is:" + typeof fooX);
}
if (fooString === fooArray) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooString's type is: " + typeof fooString + " while fooArray's type is:" + typeof fooArray);
}
if (fooString === fooX) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooString's type is: " + typeof fooString + " while fooX's type is:" + typeof fooX);
}
if (fooArray === fooX) {
  console.log("SAME TYPE");
}
else {
  console.log("NOT SAME TYPE: fooArray's type is: " + typeof fooArray + " while fooX's type is:" + typeof fooX);
}
