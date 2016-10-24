"use strict";

var people = [{
    name: 'A',
    age: 20
}, {
    name: 'B',
    age: 30
}, {}, {
    name: '',
    age: 10
}];

// removeBadPeople(people);
// // => [{name:'A', age: 20}, {name:'B', age: 30}];
//
// sumAgesValid(people);
// // => 50
//
// sumAgesAll(people);
// // => 60

function removeBadPeople(people) {
    var i = 0;
    for (var key in people) {
        if (people.hasOwnProperty(key)) {
            if (people[i]['name'] === '') {
                delete people[i];
            } else if (Object.keys(people[i]).length == 0) {
                delete people[i];
            }
        }
        i++;
    }
    console.log(people.filter(Boolean));
    return people.filter(Boolean);
}

function sumAgesValid(people) {
  var goodPeople = removeBadPeople(people);
  var myAge = 0;
  var i = 0;
  for (var key in goodPeople) {
      if (goodPeople.hasOwnProperty(key)) {
          myAge += goodPeople[i]['age'];
          }
          i++;
      }
      console.log(myAge);
  }


function sumAgesAll(people) {}
