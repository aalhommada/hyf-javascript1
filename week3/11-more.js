
'use strict';
const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;
if (x === y) {
  console.log(x + ' equals ' + y + ' .');
}
console.log(x + ' and ' + y + ' are not equals even when not using strict equality.');
if (z == y) {
  console.log('y and z are equals');
} else {
  console.log('strangely x, y and z are not equals');
}
if (parseInt(x) === parseInt(y)) {
  console.log(x + ' equals ' + y + ' when parsed into integer.');
} else {
  console.log(x + ' and ' + y + ' are strangely still not equals after parsing into integers because arrays are objects and objects can\'t be simply compared');
}
function compareArrays(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        console.log('comparing element' + (i + 1) + ' of ' + array1 + ' with element' + (i + 1) + ' of ' + array2);
        console.log(array1[i] + ' equals ' +  array2[i]);
      } else {
        console.log(array1 + ' is not equal to ' + array2);
      }
    }
    console.log(array1 + ' equals ' + array2);
  } else {
    console.log(array1 + ' is not the same length as ' + array2);
  }
}
compareArrays(x, y);
compareArrays(y, z);
compareArrays(x, z);
