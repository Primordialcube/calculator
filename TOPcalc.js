const num0 = document.getElementById("num0");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");

const operator = document.getElementById("op")
const equal = document.getElementById("equal");
const del = document.getElementById("delete");
const clear = document.getElementById("clear");
const display = document.getElementById("display");
const decimal = document.getElementById("decimal");


function appendDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = ""
}

function deleteStuff() {
    display.value = display.value.slice(0,-1);
}

let bill = num9.value;
let currentVal9 = (Number(bill));

let llib = num8.value;
let currentVal8 =(Number(llib));

function calculate(operator, ...args) {
    if(operator === '+') {
        return args.reduce((x, y) => x + y, 0);
    } else if (operator === '-') {
        return args.reduce((x, y) => x - y, 0);
    } else if (operator === '*') {
        return args.reduce((x, y) => x * y);
    } else if (operator === '/') {
        return args.reduce((x, y) => x / y);
    }
  }
  
  const result = calculate('*', currentVal9, currentVal8);



console.log(result);

  
  

