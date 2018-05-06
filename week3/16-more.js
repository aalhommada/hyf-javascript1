let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
o2.foo = 'baz';
console.log(o3); //changing o2 as a whole doesn't change o3 but changing a property of o2 changes o3 because that modifies the object that o2 points to and there for all other references that point to this object
o1.foo = 'baz';
console.log(o3); // changing o1 doesn't change o3
