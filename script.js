const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(prevNumber + calculationOperator + currentNumber);
  });
});

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(prevNumber + calculationOperator + currentNumber);
  });
});

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

// All Clear

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// Desimal

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(prevNumber + calculationOperator + currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

// Backspace

const backSpace = document.querySelector(".back-space");

backSpace.addEventListener("click", () => {
  back();
  updateScreen(currentNumber);
});

const back = () => {
  if (currentNumber === "0") {
    return;
  } else if (currentNumber.length < 2) {
    currentNumber = "0";
    prevNumber = "";
    calculationOperator = "";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
};

// +/-

const minus = document.querySelector(".minus");

minus.addEventListener("click", () => {
  plus();
  updateScreen(prevNumber + calculationOperator + currentNumber);
});

const plus = () => {
  if (currentNumber === "0") {
    return;
  }
  currentNumber = currentNumber * -1;
};

// pecentage

const percentage = document.querySelector(".percentage");

percentage.addEventListener("click", () => {
  persen();
  updateScreen(prevNumber + calculationOperator + currentNumber);
});

const persen = () => {
  if (currentNumber === "0") {
    return;
  }
  currentNumber = currentNumber / 100;
};
