function hello() {
  console.log("hello there");
  console.log("hello world");
  console.log("hello neon");
}

hello();

// adding two numbers using functions
// here x,y are the parameters
function add(x, y) {
  let sum = x + y;

  return sum; // return//
}

let results = add(5, 10);
console.log(results); // result will be 15;
// here 5,10 were arguments

function addvalues(num1, num2) {
  return num1 + num2;
}

let firstValue = addvalues(3, 4);
let secondValue = addvalues(4, 12);
let values = [firstValue, secondValue];
console.log(values);
