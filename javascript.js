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
    return add(first, sec);
  } else if (operate === "-") {
    return subtract(first, sec);
  } else if (operate === "*") {
    return multiply(first, sec);
  } else if (operate === "/") {
    return divide(first, sec);
  }
};

const numberDisplay = function () {
  if (event.target.tagName === "BUTTON") {
    if (event.target.innerText === "=") {
      calcDisplay.textContent = "";
      operator = numberPressed.find(
        (item) => item === "+" || item === "-" || item === "*" || item === "/"
      );
      console.log(operator);
      const index = numberPressed.indexOf(operator);
      console.log(index);
      firstNum = numberPressed.slice(0, index).join("");
      console.log(firstNum);
      secNum = numberPressed.slice(index + 1).join("");
      console.log(secNum);
      const resultNum = operate(firstNum, secNum, operator);
      console.log(resultNum);
      calcDisplay.textContent = resultNum;
    } else {
      numberPressed.push(event.target.innerText);
      console.log(numberPressed);
      let numStr = numberPressed.join("");
      calcDisplay.textContent = numStr;
    }
  }
};
numberDisplay.textContent = "Hello";
numberContainer.addEventListener("click", numberDisplay);

isEqualTo.addEventListener("click", function () {
  const resultNum = operate(firstNum, secNum, operator);
  calcDisplay.textContent = resultNum;
});
