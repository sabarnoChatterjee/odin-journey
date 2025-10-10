// Variables
const body = document.querySelector("body");
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const keys = document.querySelector(".keys");
const key = document.querySelector(".key");

result = 0;

function add(operand1, operand2) {
  return (Number(operand1) + Number(operand2)).toFixed(2);
}
function subtract(operand1, operand2) {
  return (Number(operand1) - Number(operand2)).toFixed(2);
}
function multiply(operand1, operand2) {
  return (Number(operand1) * Number(operand2)).toFixed(2);
}
function divide(operand1, operand2) {
  return (Number(operand1) / Number(operand2)).toFixed(2);
}

function power(base, exponent) {
  return Math.pow(base, exponent).toFixed(2);
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      result = add(num1, num2);
      console.log(result);
      break;
    case "-":
      result = subtract(num1, num2);
      console.log(result);
      break;
    case "*":
      result = multiply(num1, num2);
      console.log(result);
      break;
    case "/":
      result = divide(num1, num2);
      console.log(result);
      break;
    case "^":
      result = power(num1, num2);
      console.log(result);
      break;
    default:
      console.log("Not a valid operation!");
  }
}


