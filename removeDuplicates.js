"use strict";

// Write a function named removeDupes which takes a string and removes
// all duplicate characters in the String. Here are some examples:
//   removeDupes('AABB'); // 'AB'
//   removeDupes('AaAaBbBb'); // 'AaBb'
//   removeDupes('cAtCaT'); // 'cAtCaT'

// Write a function named removeDupesCI which takes a string and removes
// all duplicate characters regardless of capitalization. Here are some examples:
//   removeDupesCI('AABB'); // 'AB'
//   removeDupesCI('AaAaBbBb'); // 'AB'
//   removeDupesCI('cAtCaT'); // 'cAt'


function removeDupes(input) {}
//     var inputArr = input.split('');
//     console.log(inputArr);
//     var removed = [];
//         var obj = {};
//         var length = inputArr.length;
//
//     for (var i = 0; i < inputArr.length; i++) {
//         obj[inputArr[i]] = 0;
//         if(inputArr.length > length) {
//           for (i in obj) {
//               removed.push(i);
//           }
//         }
//     }
//     console.log(removed);
// }

removeDupes('cAtCaT');
//CI for case insensitive
function removeDupesCI(input) {

}


    module.exports = {
        removeDupes: removeDupes,
        removeDupesCI: removeDupesCI,
        attendance: "ENTER ATTENDANCE HERE"
    };
