function operate (arr) {
    switch (arr[1]) {
     case '+':
         return operators["+"](arr[0], arr[2]);
     case '-':
         return operators['-'](arr[0], arr[2]);
     case '*':
         return operators['*'](arr[0], arr[2]);
     case '/':
         return operators['/'](arr[0], arr[2]);
    }
 }
 
 function populateDisplay() {
    if (this.className === "clear-btn") {
      display.textContent = "";
    } else if (this.className === "equals-btn") {
      
      let displayValue = display.textContent;
      let newDisplayValue = [];

      if (displayValue.includes("+") === true) {
        newDisplayValue = displayValue.split("+");
        newDisplayValue.splice(1, 0, "+");
        console.log(newDisplayValue);
      } else if (displayValue.includes("-") === true) {
        newDisplayValue = displayValue.split("-");
        newDisplayValue.splice(1, 0, "-");
        console.log(newDisplayValue);
      } else if (displayValue.includes("*") === true) {
        newDisplayValue = displayValue.split("*");
        newDisplayValue.splice(1, 0, "*");
        console.log(newDisplayValue);
      } else if (displayValue.includes("/") === true) {
        newDisplayValue = displayValue.split("/");
        newDisplayValue.splice(1, 0, "/");
        console.log(newDisplayValue);
      } 



      display.textContent = operate(newDisplayValue);
    } 
    else {
        
      display.textContent += this.textContent;
    }
  }

let operators = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
};

const buttons = document.querySelectorAll('.keypad button');
buttons.forEach((btn) => {
    btn.addEventListener("click", populateDisplay);
});
const display = document.querySelector('.display');


