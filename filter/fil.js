let details = [
  { name: "john", age: 25, post: "developer" },
  { name: "cena", age: 21, post: "developer" },
  { name: "brad", age: 36, post: "developer" },
  { name: "loren", age: 50, post: "developer" },
  { name: "ceyna", age: 20, post: "developer" },
  { name: "kaira", age: 23, post: "developer" },
  { name: "melvin", age: 22, post: "developer" },
  { name: "anna", age: 63, post: "developer" },
  { name: "rhena", age: 25, post: "developer" },
  { name: "shiny", age: 36, post: "developer" },
];

let youngage = details.filter(function (person) {
  return person.age <= 25;
});

console.log(youngage);

// this method can filter out the element in which category we want
