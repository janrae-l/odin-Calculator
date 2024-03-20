const numberContainer = document.querySelector(".num-container");
const calcDisplay = document.querySelector(".calcu-display");
let numberPressed = [];

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

let firstNum = 0;
let secNum = 0;
let operator = "";

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

const numberDisplay = function () {
  if (event.target.tagName === "BUTTON") {
    numberPressed.push(event.target.innerText);
    console.log(numberPressed);
    let numStr = numberPressed.join("");
    calcDisplay.textContent = numStr;
  }
};
numberDisplay.textContent = "Hello";
numberContainer.addEventListener("click", numberDisplay);

operator = numberPressed.find(
  (item) => item === "+" || item === "-" || item === "*" || item === "/"
);
const index = numberPressed.indexOf(operator);
firstNum = numberPressed.slice(0, index);
secNum = numberPressed.slice(index + 1);
