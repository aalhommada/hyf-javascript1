'use strict';
let testObject = {
  test1: 1,
  test2: 2,
  test3: 3,
  test4: 4
};
function printProperties (object) {
  console.log('Object properties are: ' + Object.keys(testObject));
  console.log('Object properties\' values are: ' + Object.values(testObject));
}
printProperties(testObject);
