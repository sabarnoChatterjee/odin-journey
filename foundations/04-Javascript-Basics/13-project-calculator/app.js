// Variables
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const keys =document.querySelector(".keys");
const key =document.querySelector(".key");

function add(operand1,operand2){
    return (Number(operand1)+Number(operand2)).toFixed(2);
}
function subtract(operand1,operand2){
    return (Number(operand1)-Number(operand2)).toFixed(2);
}
function multiply(operand1,operand2){
    return (Number(operand1)*Number(operand2)).toFixed(2);
}
function divide(operand1,operand2){
    return (Number(operand1)/Number(operand2)).toFixed(2);
}

function power(base,exponent){
    return (Math.pow(base,exponent)).toFixed(2);
}


