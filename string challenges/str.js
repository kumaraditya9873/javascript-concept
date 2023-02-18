// function fullName(firstName, lastName) {
//   //   let name = firstName + " " + lastName;
//   //or
//   let name = `${firstName} ${lastName}`;
//   return name.toUpperCase();
// }

// let result = fullName("Aditya", "kumar");

// console.log(result);

// changing  it into object

function fullName({ initialName, secondName }) {
  const name1 = `${initialName} ${secondName}`;
  return name1;
}

console.log(fullName({ secondName: "Kumar", initialName: "Aditya" }));
