const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", useNumberButtons)
});

const clear = document.querySelector(".clear-btn");
clear.addEventListener("click", clearButton);

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", useOperatorButtons)
});

const percentButton = document.querySelector(".percent-btn");
percentButton.addEventListener("click", () => {
  let num = Number(display.textContent);
  if (num === 0) {
    display.textContent = "0";
  } else {
    display.textContent = num*0.01; 
  }
  displayValue = display.textContent;
});

const decimalPointButton = document.querySelector(".point-btn");
decimalPointButton.addEventListener("click", function() {
  let num = Number(display.textContent);
  if (num === 0 || !numberConcatenates || display.textContent === "LOL!" || equalsButtonWasLast === true) {
    display.textContent = "0."
    numberConcatenates = true;
    equalsButtonWasLast = false;
  } else if (Array.from(display.textContent).includes(".")) {
    display.textContent = display.textContent;
  } else {
    display.textContent += ".";
  }
});

const backSpace = document.querySelector(".back-space");
backSpace.addEventListener("click", () => {
  let string = display.textContent;
  if (string === "0" || string === "LOL!") {
    display.textContent = display.textContent;
  } else if (string === "LOL!" || string.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = string.slice(0, -1);
  }
});

const display = document.querySelector(".display");

let displayValue = "";
let num1 = 0;
let num2 = 0;
let operator = "";
let operating = false;
let numberConcatenates = true;
let equalsButtonWasLast = false;

function useNumberButtons() {
  if (display.textContent === "0" || !numberConcatenates || display.textContent === "LOL!" || equalsButtonWasLast === true) {
    display.textContent = this.textContent;
    numberConcatenates = true;
    equalsButtonWasLast = false;
  } else {
    display.textContent += this.textContent;
  }
  displayValue = display.textContent;
}

function clearButton() {
  display.textContent = "0";
  num1, num2 = 0;
  operator = "";
  displayValue = display.textContent;
  operating = false;
  equalsButtonWasLast = false;
  operatorButtons.forEach((button) => {
    button.classList.remove("active")
  });
  operating = false;
}

function useOperatorButtons() {
  if (this.textContent === "=" && operating === false) {
    alert("That's not how you use a calculator. Input numbers first, select an operator, then click another operator or the equals button to compute.");
    clearButton();

  } else if (display.textContent === "LOL!") {
    clearButton();
    
  } else if (operating) {
    num2 = display.textContent;

    num1 = operate(+num1, +num2, operator);
    display.textContent = processDecimals(num1).toString();

    operatorButtons.forEach((button) => {
      button.classList.remove("active")
    });

    if (this.textContent === "=") {
      operating = false;
      equalsButtonWasLast = true;
    } else {
      this.classList.add("active");
      numberConcatenates = false;
      operator = this.textContent;
    }

  } else if (!operating){
    displayValue = display.textContent;
    num1 = +displayValue;
    operator = this.textContent;
    
    operating = true;
    numberConcatenates = false;
    this.classList.add("active");

  }
}

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*": 
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "LOL!"
  } 
  return num1 / num2;
}

function processDecimals(num) {
  let index = num.toString().indexOf(".");
  if (index < 0) {
    return num;
  } else {
  let decimal = num.toString().substring(index + 1);

  if (decimal.length > 2) {
    return num.toFixed(2);
  } else {
    return num;
  }
 }
}