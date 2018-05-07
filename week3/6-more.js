'use strict';
function vehicleType(color, type, age) {
  const status = age > 1 ? age = 'used' : age = 'new';
  if (type === 1) {
    return 'a ' + color + ' ' + status + ' car';
  } else if (type === 2) {
    return 'a ' + color + ' ' + status + ' motorbike';
  } else {
    return 'please choose type 1 or 2';
  }
}
console.log(vehicleType('blue', 1, 5));
