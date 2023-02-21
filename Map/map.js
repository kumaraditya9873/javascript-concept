let arr = [
  { name: "Adi", skill: "Java", Exp: 2 },
  { name: "Raj", skill: "Java", Exp: 2 },
  { name: "Kumar", skill: "Java", Exp: 2 },
];

const newPeople = arr.map(function (arr) {
  return {
    firstName: arr.name.toLocaleUpperCase(),
  };
});

console.log(newPeople);

let empDetailes = [
  { Name: "Brad", age: 35, Salary: 1000000 },
  { Name: "Reyan", age: 30, Salary: 200000 },
  { Name: "Shanu", age: 25, Salary: 50000 },
];

const ages = empDetailes.map(function (Person) {
  return Person.age + 20;
});

console.log(ages);
