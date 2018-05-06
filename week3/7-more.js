'use strict';
const Vehicles = ['car', 'motorbike', 'caravan', 'bike'];
function vehicleType(color, type, age) {

  age > 1 ? age = 'used' : age = 'new';
  for (let i = 0; i < Vehicles.length; i++) {
    if (type === (i + 1)) {
      return 'a ' + color + ' ' + age + ' ' + Vehicles[i];
    }
  } 
  return 'unknown vehicle';
}
console.log(vehicleType('green', 3, 1));
console.log(vehicleType('red', 5, 1));
