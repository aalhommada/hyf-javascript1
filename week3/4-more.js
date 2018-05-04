'use strict';
function vehicleType(color, type) {
  if (type === 1) {
    return 'a ' + color + ' car';
  } else if (type === 2) {
    return 'a ' + color + ' motorbike';
  }
}
console.log(vehicleType('blue', 2));
