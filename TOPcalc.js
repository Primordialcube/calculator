const numbers = document.getElementsByClassName('.num');
const plus = document.getElementsByClassName('.plus');
const minus = document.getElementsByClassName('.minus');
const multi = document.getElementsByClassName('.multi');
const div = document.getElementsByClassName('.div');
const equal = document.getElementsByClassName('.equal');
const del = document.getElementsByClassName('.delete');
const clear = document.getElementsByClassName('.clear');
const display = document.getElementsByClassName('.display');


const operations = function(a, b) {
    if (operator == plus) {
        result = a + b
    } else if (operator == minus) {
        result = a - b
    } else if (operator == multi) {
        result = a * b
    } else if (operator == div) {
        result = a / b
    }
    return result
}