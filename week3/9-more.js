'use strict';
function vehicle(color, type, age) {
  let listOfVehicles = ["motorbike", "caravan", "bike"];
  if (type === 1 && age > 1) {
    return 'a ' + color + ' used motorbike';
  } else if (type === 1 && age === 1) {
    return 'a ' + color + ' new motorbike';
  } else if (type === 2 && age > 1) {
    return 'a ' + color + ' used caravan';
  } else if (type === 2 && age === 1) {
    return 'a ' + color + ' new caravan';
  } else if (type === 3 && age > 1) {
    return 'a ' + color + ' used bike';
  } else if (type === 3 && age === 1) {
    return 'a ' + color + ' new bike';
  } else {
    return 'please choose type 1, 2 or 3';
  }
}
console.log(vehicle("green", 3, 1));
