'use strict';
function vehicleType(color, type, age) {
  const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
  const condition = age > 1 ? 'used' : 'new';
  if (type > 0 && type <= vehicles.length) {
    return 'a ' + color + ' ' + condition + ' ' + vehicles[type - 1];
  } 
  return 'unknown vehicle';
}

console.log(vehicleType('green', 3, 1));
console.log(vehicleType('red', 5, 1));
