'use strict';
const testEmpty = {}; //empty object
const teachers = [
  {
    firstName: 'Philip',
    lastName: 'Beau'
  },
  {
    firstName: 'Unmesh',
    lastName: 'Joshi'
  },
  {
    firstName: 'Jim',
    lastName: 'Cramer'
  }
];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].firstName === 'Philip') {
    teachers[i].languages = ['HTML', 'CSS'];
  } else if (teachers[i].firstName === 'Unmesh') {
    teachers[i].languages = ['Git', 'CLI'];
  } else if (teachers[i].firstName === 'Jim') {
    teachers[i].languages = ['JavaScript']; 
  }
}
console.log(teachers);
