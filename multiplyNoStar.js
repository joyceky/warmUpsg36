"use strict";

//Warmups -
// Write a function that takes two numbers and multiplies them without using *
//Stretch: write a curried version
multiplyNoStar(3)(4);
multiplyNoStar(10)(4);
multiplyNoStar(10)(9);

function multiplyNoStar(x) {
  var original = x;
  return function(y) {
    for (var i = 0; i < y-1; i++) {
      x += original;
    }
    console.log(x);
    return x;
  }
}

// Write a function that takes two arrays and returns a
// new array with all items in alphabetical order.
var array1 = ["Doug", "Glib", "Sea", "Nest", "Rodent"];
var array2 = ["Rug", "Apple", "Hippo", "Candy", "Zoo"];

console.log(arrayOrder(array1, array2));

// function arrayOrder(arr1, arr2) {
//   var arr3 = arr1.concat(arr2).sort();
//  console.log(arr3);
//  return arr3;
// }

function arrayOrder(arr1, arr2) {
  return [...arr1,...arr2].sort();
}
