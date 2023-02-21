// a function which is use another function as a argument or returns another function a results is known as a higher order function

//  a function is passed to a another function as an argument and executed inside that function

// function hello() {
//   console.log("hello world");
// }

// hello();

// function hellosystem() {
//   console.log("Welcome to the world of programming");
// }

// hello();
// hellosystem();

// if using callback function

function hello(name, callBack) {
  console.log(`hello ${name} ,`);
  callBack();
}

function hellosystem() {
  console.log("Welcome to the world of programming");
}

hello("Aditya", hellosystem);

//////////////////////////////////////////////////////////////////////////////////

// higher order function : the function in which function is used as a arguments or returns function as thier results

function intro(name) {
  if (name === "Aditya") {
    return function (topic) {
      console.log(`Hi my name is ${name},and i am good in ${topic}.`);
    };
  }
  if (name === "Raj") {
    return function (topic) {
      console.log(`Hi my name is ${name},and i am good in ${topic}.`);
    };
  }
  if (name === "Mukul") {
    return function (topic) {
      console.log(`Hi my name is ${name},and i am good in ${topic}.`);
    };
  }
}

// here the function which  is annynomous is written inside a function

// at the same time return as a function

// and also used in arguments also...(is known as a higher order function).

intro("Aditya")("UI");
intro("Raj")("UX");
intro("Mukul")("Front end developing");
