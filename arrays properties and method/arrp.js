let names = ["aditya", "ankit", "raj", "peter", "john", "brad"];

console.log(names[names.length - 1]);
console.log(names[0]);

// if concatination the array into another array
const anothername = ["birju", "bittu", "cittu", "sonu"];
const allName = names.concat(anothername);
console.log(allName);

// we can reverese the all Name array

// add .reverse() syntax

console.log(allName.reverse());

// if want to add some thing new names in the begining of the array
// then use .unshift("variable")

allName.unshift("raghu");
console.log(allName);

// if want to remove the unshift name to array

// we can use .shift()

allName.shift();
console.log(allName);

// if we want to addd some name to last index of array
// then we have to use .push("varaible")
allName.push("raghu");
console.log(allName);

//  if to remove something from an array
allName.pop();
console.log(allName);
