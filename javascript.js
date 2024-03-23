const numberContainer = document.querySelector(".numbers");
const calcDisplay = document.querySelector(".calcu-display");
const isEqualTo = document.querySelector(".operate");
const operations = document.querySelector(".operations");
const clearDisplay = document.querySelector(".clear");

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

let firstNum = "";
let secNum = "";
let operator = "";
let result = 0;

const operate = function (a, b, operate) {
  //Takes numbers a and b
  //Use the operate param to figure out what operations are to be done in numbers a and b
  const first = +a;
  const sec = +b;
  switch (operate) {
    case "+":
      return add(first, sec);
      break;
    case "-":
      return subtract(first, sec);
      break;
    case "x":
      return multiply(first, sec);
      break;
    case "/":
      return divide(first, sec);
      break;
  }
};
/*
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
      //numberPressed.push(event.target.innerText);
      firstNum += event.target.innerText;
      console.log(firstNum);
      //console.log(numberPressed);
      //let numStr = numberPressed.join("");
      calcDisplay.textContent = firstNum;
    }
  }
};
*/
const numberPressed = function () {
  if (event.target.tagName === "BUTTON") {
    if (operator.length === 1) {
      secNum += event.target.innerText;
      console.log(secNum);
      calcDisplay.textContent = secNum;
    } else {
      firstNum += event.target.innerText;
      console.log(firstNum);
      calcDisplay.textContent = firstNum;
    }
  }
};

const operationPress = function () {
  if (event.target.tagName === "BUTTON") {
    if (firstNum.length > 0 && secNum.length > 0) {
      result = operate(firstNum, secNum, operator);
      console.log(result);
      calcDisplay.textContent = result;
      firstNum = String(result);
      secNum = "";
      console.log(firstNum);
      operator = event.target.innerText;
      console.log(operator);
    } else {
      operator = event.target.innerText;
      console.log(operator);
    }
  }
};
//numberDisplay.textContent = "Hello";
numberContainer.addEventListener("click", numberPressed);

operations.addEventListener("click", operationPress);

clearDisplay.addEventListener("click", function () {
  calcDisplay.textContent = "";
  firstNum = "";
  secNum = "";
  operator = "";
});

isEqualTo.addEventListener("click", function () {
  const resultNum = operate(firstNum, secNum, operator);
  calcDisplay.textContent = resultNum;
});
