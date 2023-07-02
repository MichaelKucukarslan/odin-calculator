const display = document.getElementById("display");
const numbers = Array.from(document.getElementsByClassName("numbers"));
const operators = Array.from(document.getElementsByClassName("operator"));

display.value = "";
let number1 = 0;
let number2 = 0;
let number_total = "";

numbers.forEach((element) =>
    element.addEventListener('click', () => appendNumber(element.textContent))
);

operators.forEach(element =>
    element.addEventListener("click", () => setOperator(element.textContent))
);

// user presses keys to get a number
// user presses an operation
// save that number
// clear the screen to get 2nd number

// > user presses keys to get another number

// > user presses operation
// do the operation
// show the user the total
// save the total as number1, clear number2

// > users presses total key
// do the operation
// show the users the total
// save the total as number1, clear number2

// > user presses another operation to do a different operation
// change the operation without loosing number1

let savedOperation = "";
function setOperator(operation) {
    // Save the number
    savedOperation = operation;
    if (number1 === 0) {
        number1 = display.value;
        display.value = 0;
    } else if (number2 === 0 && display.value !== 0) {
        number2 = display.value;
    }
    console.log(number1 + " " + savedOperation + " " + number2)
    // do the operation if there are 2 numbers
    if (number1 !== 0 && number2 !== 0) {
        calculate(operation, number1, number2);
    }
    // display the operation
}

function calculate(operation, num1, num2) {
    if (num1 == 0 || num2 == 0) return;
    switch (operation) {
        case 'X':
            display.value = num1 * num2;
            break;
        case '-':
            display.value = num1 - num2;
            break;
        case '+':
            display.value = parseInt(num1) + parseInt(num2);
            break;
        case '%':
            display.value /= 100;
            break;
        case '/':
            if (num2 == 0){
                alert("Can not divide by 0");
                clear();
                display.value = 0;
                return;
            }
            display.value = num1 / num2;
            break;
        default:
            break;
    }
    clear();
}

const button_clear = document.getElementById("clear");
button_clear.addEventListener("click", clearButton);
function clearButton(){
    display.value = 0;
    clear();
}

function clear() {
    number1 = 0;
    number2 = 0;
    decimal_used = false;
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
    console.log("on");
}

// Handle total button
const button_total = document.getElementById("total");
button_total.addEventListener("click", button_total_func);
function button_total_func() {
    if (!number2){
        number2 = display.value;
    }
    calculate(savedOperation, number1, number2);
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
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}