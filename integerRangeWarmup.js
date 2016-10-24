"use strict";

// Write a Js program to get the integers in range(x,y)
// example: range(2,9) // [2,3,4,5,6,7,8]

function getRange(x, y) {
  if(typeof x === 'number' && typeof y === 'number'){
  var greater = Math.ceil(y);
  var lesser = Math.ceil(x);
  var range = [];
  if(greater === lesser) {
    return range;
  }
  else if(x > y) {
    greater = x;
    lesser = y;
  }
 for (var i = lesser; i < greater; i++) {
   range.push(i);
 }
 console.log(range);
 }
 else {
   console.log('invalid input');
 }
}


function range(x, y) {
  if(typeof x === 'number' && typeof y === 'number'){
  x = Math.ceil(x);
  y = Math.floor(y);
  var rangeArr = [];
  if(x === y) {
    return rangeArr;
  }
  if(x > y) {
    console.log('invalid input');
  }
 for (var i = x; i < y; i++) {
   rangeArr.push(i);
 }
 console.log(rangeArr);
 }
 else {
   console.log('invalid input');
 }
}


range(2,9) // [2,3,4,5,6,7,8]
range(9,9) // []
range(9,2) // "invalid input"–
range(-1,3) // [-1,0,1,2]
range("A","B")// "invalid input"
range("B","A")// "invalid input"
range(5.1,10) // [6,7,8,9]
range(2,3)// [2]
