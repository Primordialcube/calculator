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

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const star = document.getElementById("star");
const slash = document.getElementById("slash");
const equal = document.getElementById("equal")

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


let isClickedAdd = false;
let isClickedSubtract = false;
let isClickedMultiply = false;
let isClickedDivide = false;
let op = "";

let add = plus.addEventListener("click", function() {
    isClickedAdd = true
    isClickedSubtract = false;
    isClickedMultiply = false;
    isClickedDivide = false;
})

let subtract = minus.addEventListener("click", function() {
    isClickedSubtract = true
    isClickedAdd = false
    isClickedMultiply = false;
    isClickedDivide = false;
})

let multiply = star.addEventListener("click", function() {
    isClickedMultiply = true
    isClickedAdd = false
    isClickedSubtract = false;
    isClickedDivide = false;
})

let divide = slash.addEventListener("click", function() {
    isClickedDivide = true
    isClickedAdd = false
    isClickedSubtract = false;
    isClickedMultiply = false;
})

function checkOp() {
    if (isClickedAdd === true) {
        op = "+"
    } else if (isClickedSubtract === true) {
        op = "-"
    } else if (isClickedMultiply === true) {
        op = "*"
    } else if (isClickedDivide === true) {
        op = "/"
    }
    return op
}

let x = (Number(num1.value));
let y = (Number(num2.value));
let z = checkOp();

function calculate(operator, ...args) {
    if(operator === "+") {
        return args.reduce((x, y) => x + y, 0);
    } else if (operator === "-") {
        return args.reduce((x, y) => x - y, 0);
    } else if (operator === "*") {
        return args.reduce((x, y) => x * y);
    } else if (operator === "/") {
        return args.reduce((x, y) => x / y);
    }
  }
  
const end = calculate(z, x, y);

console.log(end);

equal.addEventListener("click", function() {
    display.value = end
})

// check current op for testing purposes
function check() {
    console.log(checkOp());
}