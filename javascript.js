const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const firstNum = 0;
const secNum = 0;
const operator = "";

const operate = function (a, b, operate) {
  //Takes numbers a and b
  //Use the operate param to figure out what operations are to be done in numbers a and b
  if (operate === "+") {
    add(a, b);
  } else if (operate === "-") {
    subtract(a, b);
  } else if (operate === "*") {
    multiply(a, b);
  } else if (operate === "/") {
    divide(a, b);
  }
};
