'use strict';
function advertisement(vehicleNames) {
  let servicesWeProvide = '';

  for (let i = 0; i < vehicleNames.length; i++) {
    const serviceInPlural = vehicleNames[i] + 's';
    if (i === (vehicleNames.length - 1)) {

      servicesWeProvide += 'and ' + serviceInPlural + '.';
    } else if (i === (vehicleNames.length - 2)) {
      servicesWeProvide += serviceInPlural + ' ';
    } else {
      servicesWeProvide += serviceInPlural + ', ';
    }
  }

  return 'Amazing Joe\'s Garage, we service ' + servicesWeProvide;

}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
vehicles.push('scooter');
const text = advertisement(vehicles);
console.log(text);
