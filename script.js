let num1 = 5;
let num2 = 6;
let operators = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
};

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