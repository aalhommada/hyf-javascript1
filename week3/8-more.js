'use strict';
function advertisement(vehicleNames) {
  let servicesWeProvide = '';

  for (let i = 0; i < vehicleNames.length; i++) {
    const serviceInPlural = vehicleNames[i] + 's';
    if (i === (vehicleNames.length - 1)) {

      servicesWeProvide += 'and ' + serviceInPlural + '.';
    } else {
      servicesWeProvide += serviceInPlural + ', ';
    }
  }

  return 'Amazing Joe\'s Garage, we service ' + servicesWeProvide;

}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];

const text = advertisement(vehicles);
console.log(text);
