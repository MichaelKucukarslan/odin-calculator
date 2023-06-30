const display = document.getElementById("display");

const button_clear = document.getElementById("clear");
button_clear.addEventListener("click", clear);
function clear() {
    display.value = "";
}

const button_delete = document.getElementById("delete");
button_delete.addEventListener("click", delete_func);
function delete_func(){
    display.value = display.value.substr(0, display.value.length - 1);
}

const button_on = document.getElementById("on");
button_on.addEventListener("click", delete_on);
function delete_on(){
    console.log("on");
}

const button_multiply = document.getElementById("multiply");
button_multiply.addEventListener("click", button_multiply_func);
function button_multiply_func(){
    console.log("multiply");
}

const button_percent = document.getElementById("percent");
button_percent.addEventListener("click", button_percent_func);
function button_percent_func(){
    console.log("percent");
}

const button_subtract = document.getElementById("subtract");
button_subtract.addEventListener("click", button_subtract_func);
function button_subtract_func(){
    console.log("subtract");
}

const button_divide = document.getElementById("divide");
button_divide.addEventListener("click", button_divide_func);
function button_divide_func(){
    console.log("divide");
}

const button_add = document.getElementById("add");
button_add.addEventListener("click", button_add_func);
function button_add_func(){
    console.log("add");
}

const button_total = document.getElementById("total");
button_total.addEventListener("click", button_total_func);
function button_total_func(){
    console.log("total");
}

let decimal_used = false;
const button_decimal = document.getElementById("decimal");
button_decimal.addEventListener("click", button_decimal_func);
function button_decimal_func(){
    if (!decimal_used){
        display.value += "."
    }
    decimal_used = true;
}

const button_0 = document.getElementById("0");
button_0.addEventListener("click", button_0_func);
function button_0_func(){
    display.value += 0;
}

const button_00 = document.getElementById("00");
button_00.addEventListener("click", button_00_func);
function button_00_func(){
    display.value += 0;
    display.value += 0;
}

const button_1 = document.getElementById("1");
button_1.addEventListener("click", button_1_func);
function button_1_func(){
    display.value += 1;
}

const button_2 = document.getElementById("2");
button_2.addEventListener("click", button_2_func);
function button_2_func(){
    display.value += 2;
}

const button_3 = document.getElementById("3");
button_3.addEventListener("click", button_3_func);
function button_3_func(){
    display.value += 3;
}

const button_4 = document.getElementById("4");
button_4.addEventListener("click", button_4_func);
function button_4_func(){
    display.value += 4;
}

const button_5 = document.getElementById("5");
button_5.addEventListener("click", button_5_func);
function button_5_func(){
    display.value += 5;
}

const button_6 = document.getElementById("6");
button_6.addEventListener("click", button_6_func);
function button_6_func(){
    display.value += 6;
}

const button_7 = document.getElementById("7");
button_7.addEventListener("click", button_7_func);
function button_7_func(){
    display.value += 7;
}

const button_8 = document.getElementById("8");
button_8.addEventListener("click", button_8_func);
function button_8_func(){
    display.value += 8;

}

const button_9 = document.getElementById("9");
button_9.addEventListener("click", button_9_func);
function button_9_func(){
    display.value += 9;
}