'use strict';
const o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };

const o3 = o2;
console.log('o1', o1, 'o2', o2, 'o3', o3); //assigning o2 as a value to o3 doesn't change o2

o1.foo = 'baz';
o2 = o1;
console.log('o1', o1, 'o2', o2, 'o3', o3); // changing o1 doesn't change o3 because their values are not related to one another


o2.foo = 'hyf';
/*changing a property of o2 changes o3 
because that modifies the object that o2 points to 
and there for all other references that point to this object*/
console.log('o1', o1, 'o2', o2, 'o3', o3);

