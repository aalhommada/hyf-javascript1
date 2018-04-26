"use strict";
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log("Before: " + favoriteAnimals);
favoriteAnimals.push('turtle');
console.log("Adding Mauro's favorite animal 'turtle': " + favoriteAnimals);
favoriteAnimals.splice(2, 0, 'meerkat');
console.log("Adding Jim's favorite animal after capricorn: " + favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log("Deleting giraffe because Jason doesn't like it: " + favoriteAnimals);
let found = favoriteAnimals.findIndex(function(element) {
  return element === 'meerkat';
});
console.log("The item you are looking for is at index: " + found);
