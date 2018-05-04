'use strict';
function vehicle(color, type, age) {
  if ( type === 1 && age > 1) {
    return 'a ' + color + ' used car';
  } else if (type === 1 && age === 1) {
    return 'a ' + color + ' new car';
  } else if (type === 2 && age > 1) {
    return 'a ' + color + ' used motorbike';
  } else if (type === 2 && age === 1) {
    return 'a ' + color + ' new motorbike';
  } else {
    return 'please choose type 1 or 2';
  }
}
console.log(vehicle("blue", 1, 5));
