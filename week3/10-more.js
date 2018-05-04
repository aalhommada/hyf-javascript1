'use strict';
let listOfVehicles = ['motorbike', 'caravan', 'bike'];
listOfVehicles.unshift('car');
listOfVehicles.pop();
console.log('Amazing Joe\'s Garage, we service ' + listOfVehicles.join('s, ') + ' and bikes.');
