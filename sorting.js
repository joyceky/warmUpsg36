"use strict";
// warmup: // Write functions to sort the following in ascending order. Include at least 1 what if/assumption you are working with:
var array1 = ["zoe", "nicole", "lyric", "nancy", "anna"]; // [Anna","Lyric","Nancy", "Nicole", "Zoe"]
var array2 = [5, 2, 7, 3]; //[2,3,5,7]
var array3 = [10, 2, 100, 3]; //[2,3,10,100]

// Stretch, sort this array of objects in ascending order by age.:
var array4 = [];
array4[0] = {
    name: "Zoe",
    age: 10,
    numDogs: 2
};
array4[1] = {
    name: "Nick",
    age: 2,
    numDogs: 3
};
array4[2] = {
    name: "Lyric",
    age: 34,
    numDogs: 4
};
array4[3] = {
    name: "Nancy",
    age: 100,
    numDogs: 1
};
array4[4] = {
    name: "Anna",
    age: 7,
    numDogs: 2
};
array4[5] = {
    name: "Edward",
    age: 59,
    numDogs: 0
};

sortByAge(array4);
function sortByAge(array) {
  array.sort(function(x, y) {
    return x.age - y.age;
  });
  console.log(array);
  return array;
}

// sortNames(array1);

function sortNames(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(array[i][0].toUpperCase() + array[i].slice(1));
    }
    result.sort();
    console.log(result);
    return result;
}

// sortNums(array2);
// sortNums(array3);
function sortNums(array) {
  console.log(array.sort(function(a, b) {
  return a-b;
}));
  return array.sort();
}
