const numberContainer = document.querySelector(".numbers");
const calcDisplay = document.querySelector(".calcu-display");
const isEqualTo = document.querySelector(".operate");
const operations = document.querySelector(".operations");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".period");
const backspace = document.querySelector(".backspace");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".cancel");
const clearDisplay = document.querySelector(".yes");

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
let poppedVar = "";

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

function isDecimal(n) {
  const number = n - Math.floor(n) !== 0;

  if (number) {
    return n.toFixed(2);
  } else {
    return n;
  }
}

function popItem(item) {
  arr = item.split("");
  arr.pop();
  return arr;
}

const numberPressed = function () {
  if (event.target.tagName === "BUTTON") {
    if (operator.length === 1) {
      if (secNum.includes(".")) {
        decimalBtn.disabled = true;
      } else {
        decimalBtn.disabled = false;
      }
      secNum += event.target.innerText;
      console.log(secNum);
      calcDisplay.textContent = secNum;
    } else {
      if (firstNum.includes(".")) {
        decimalBtn.disabled = true;
      } else {
        decimalBtn.disabled = false;
      }
      firstNum += event.target.innerText;
      console.log(typeof firstNum, firstNum);
      calcDisplay.textContent = firstNum;
    }
  }
};

const operationPress = function () {
  if (event.target.tagName === "BUTTON") {
    if (firstNum.length > 0 && secNum.length > 0) {
      result = isDecimal(operate(firstNum, secNum, operator));

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

isEqualTo.addEventListener("click", function () {
  if (operator.length === 0 || secNum.length === 0) {
    let displayErr = `${
      operator.length === 0 ? "No operator!" : "No second number"
    }`;
    calcDisplay.textContent = displayErr;
    firstNum = "";
  } else {
    const resultNum = isDecimal(operate(firstNum, secNum, operator));

    calcDisplay.textContent = resultNum;
  }
});

backspace.addEventListener("click", function () {
  if (event.target.tagName === "BUTTON") {
    if (operator.length > 0) {
      poppedVar = popItem(secNum).join("");
      calcDisplay.textContent = poppedVar;
      secNum = poppedVar;
    } else {
      poppedVar = popItem(firstNum).join("");
      calcDisplay.textContent = poppedVar;
      firstNum = poppedVar;
    }
  }
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  console.log();
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  console.log("closeModal clicked");
  for (let items of modal.classList) {
    console.log(items);
  }
};
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

clearBtn.addEventListener("click", function () {
  if (firstNum.length > 0 || operator.length > 0 || secNum.length > 0) {
    openModal();
  } else {
    calcDisplay.textContent = "";
    firstNum = "";
    secNum = "";
    operator = "";
  }
});

clearDisplay.addEventListener("click", function () {
  calcDisplay.textContent = "";
  firstNum = "";
  secNum = "";
  operator = "";
  closeModal();
});
