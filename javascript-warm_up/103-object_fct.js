#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12
};
  
console.log(myObject);

myObject.incr = function() {
this.value += 1;
};

myObject.incr.toString = function() {
return '[Function]';
};

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);