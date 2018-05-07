'use strict';

function printObject(object) {
  for (const key in object) {
    console.log('Property: ' + key + '\tValue: ' + object[key]);
  }
}

const person = {
  firstName: 'Neveen',
  lastName: 'Atik',
  education: 'Economics',
  yearsExperience: 10,
  city: 'Amsterdam'
};

printObject(person);
