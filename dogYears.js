"use strict";

// Part 1: Write a function that takes an object that has dogs and
// their ages and returns an object with the ages(as integers)
// converted to dog years (multiply each age by 7).
// Example: {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8}
// will return {'sparky': 7, 'zion':21, 'henry':35, 'lucky':56}

var dogs = {'sparky': 1, 'zion':3, 'henry':5, 'lucky':8};

// dogYears(dogs);
// function dogYears(obj) {
for (var key in obj) {
  // if (obj.hasOwnProperty(key)) {
    obj[key] *= 7;
  // }
}
   console.log(obj);
  return obj;
}
// Part 2: Write a function that will console.log all dog names (assume a simple object as given above).

// dogNames(dogs);
// function dogNames(obj) {
// for (var key in obj) {
//   // if (obj.hasOwnProperty(key)) {
//     console.log(key);
//   // }
// }
//   return obj;
// }
//
// printDogNames(dogs);
// function printDogNames(obj) {
//   console.log(Object.keys(obj));
// }


// Stretch: Don't change the original object. In other words, the ages in the dogs object should remain 1,3,5,8 even after your function has been called.

var dogsClone = {};
yearsNoChange(Object.assign(dogsClone, dogs));

function yearsNoChange(dogAge) {
  // var dogAge = obj;
for (var key in dogAge) {
  // if (dogAge.hasOwnProperty(key)) {
    dogAge[key] *= 7;
  // }
}
  console.log(dogAge);
  return dogAge;
}
