
const myObject = {
    type: 'object',
    value: 12
};
  
console.log(myObject);

function incrFunction() {
this.value += 1;
}

myObject.incr = incrFunction;

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);