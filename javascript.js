const numberContainer = document.querySelector(".num-container");
const calcDisplay = document.querySelector(".calcu-display");
const isEqualTo = document.querySelector(".operate");
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
  const first = +a;
  const sec = +b;
  if (operate === "+") {
    add(first, sec);
  } else if (operate === "-") {
    subtract(first, sec);
  } else if (operate === "*") {
    multiply(first, sec);
  } else if (operate === "/") {
    divide(first, sec);
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
firstNum = numberPressed.slice(0, index).join("");
secNum = numberPressed.slice(index + 1).join("");

isEqualTo.addEventListener("click", function () {
  operate(firstNum, secNum, operator);
});
