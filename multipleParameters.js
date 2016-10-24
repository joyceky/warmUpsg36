"use strict";
// Define a JavaScript function add that can be used like so:

add(1)(1);   // returns 2
add(20)(20); // returns 40
add(20)(20)(20);

function add(x){
    return function add(y){
      console.log(x + y);
        return x + y;
  };
}
