const display = document.getElementById("display");
const numbers = Array.from(document.getElementsByClassName("numbers"));
const operators = Array.from(document.getElementsByClassName("operator"));

display.value = "";
let number1 = null;
let number2 = null;
let number_total = null;
let clearScreen = false;
let savedOperation = null;

numbers.forEach((element) =>
    element.addEventListener('click', () => appendNumber(element.textContent))
);

operators.forEach(element =>
    element.addEventListener("click", () => setOperator(element.textContent))
);

function setOperator(operation) {
    // Save the number
    console.log(number1 + " " + operation + " " + number2 + " ClearScreen? " + clearScreen + " savedOperation: " + operation );
    savedOperation = operation;
    if (number1 === null) {
        number1 = display.value;
        clearScreen = true;
    } else if (number2 === null && !clearScreen) {
        number2 = display.value;
        display.value = calculate(operation, number1, number2);
        continueNewCalculation();
    }
    console.log(number1 + " " + operation + " " + number2 + " ClearScreen? " + clearScreen + " savedOperation: " + operation );
}

function calculate(operation, num1, num2) {
    switch (operation) {
        case 'X':
            return (num1 * num2);
        case '-':
            return (num1 - num2);
        case '+':
            return (parseInt(num1) + parseInt(num2)); // Need to get decimals
        case '%':
            return (display.value / 100);
        case '/':
            if (num2 == 0) {
                alert("Can not divide by 0");
                clear();
                return (0);
            }
            return  (num1 / num2);
        default:
            return 0;
    }
}

function continueNewCalculation() {
    savedOperation = null;
    clearScreen = true;
    number1 = display.value;
    number2 = null;
}

// Handle total button
const button_total = document.getElementById("total");
button_total.addEventListener("click", button_total_func);
function button_total_func() {
    if (number1 != null && number2 == null){
        console.log("Here")
        number2 = display.value;
        display.value = calculate(savedOperation, number1, number2);
        // return;
    }
    continueNewCalculation();
    // console.log(number1 + " " + operation + " " + number2 + " ClearScreen? " + clearScreen + " savedOperation: " + operation );
}

// Handle decimal button
let decimal_used = false;
const button_decimal = document.getElementById("decimal");
button_decimal.addEventListener("click", button_decimal_func);
function button_decimal_func() {
    if (!decimal_used) {
        display.value += "."
    }
    decimal_used = true;
}

function appendNumber(number) {
    if (!savedOperation && clearScreen){
        number1 = null;
    }
    if (clearScreen) {
        display.value = number;
    } else if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
    clearScreen = false;
}

const button_delete = document.getElementById("delete");
button_delete.addEventListener("click", delete_func);
function delete_func() {
    display.value = display.value.substr(0, display.value.length - 1);
}

const button_on = document.getElementById("on");
button_on.addEventListener("click", delete_on);
function delete_on() {
    display.value = 0;
}

const button_clear = document.getElementById("clear");
button_clear.addEventListener("click", clearButton);
function clearButton() {
    display.value = 0;
    clear();
}

function clear() {
    number1 = null;
    number2 = null;
    number_total = null;
    decimal_used = false;
    savedOperation = null;
    clearScreen = true;
}

module.exports = {
    appendNumber,
    button_decimal_func,
    button_total_func,
    calculate,
    setOperator
};
