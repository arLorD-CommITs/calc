function operate (num1, operator, num2) {
    switch (operator) {
     case '+':
         return operators["+"](num1, num2);
     case '-':
         return operators['-'](num1, num2);
     case '*':
         return operators['*'](num1, num2);
     case '/':
         return operators['/'](num1, num2);
    }
 }
 
 function logHello() {
    const text = document.createTextNode(this.textContent); 
    console.log(text);
    display.appendChild(text);
     
 }

let num1 = 120;
let num2 = 3;
let opString = "*";
let operators = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
};

const buttons = document.querySelectorAll('.keypad button');
buttons.forEach((btn) => {
    btn.addEventListener("click", logHello);
});
const display = document.querySelector('.display');


