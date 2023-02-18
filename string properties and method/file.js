//  string properties and methods

let name1 = "Aditya Kumar 123";
let result = name1.length;
// here the blank spaces will aslo gonna count

console.log(result);
// result will be 16

// lowercase,uppercase

let name2 = "Ajeet";
console.log(name2.toLowerCase());
console.log(name2.toUpperCase());

// to get positon of the alphabhet in a string

let name3 = " peter";
console.log(name3.charAt(name3.length - 1));

console.log(name3.charAt(2));
console.log(name3.indexOf("e"));
// trim the string

console.log(name3.trim());
// console.log(name3.startsWith("peter"));

// to know the place of index

let person = "parth";

console.log(person.indexOf("p"));
