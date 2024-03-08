const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", useNumberButtons)
});

const display = document.querySelector(".display");

let displayValue;
let num1 = 0;
let num2 = 0;
let op;


function useNumberButtons() {
  if (display.textContent === "0") {
    display.textContent = this.textContent;
  } else {
    display.textContent += this.textContent;
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
  return num1 / num2;
}




