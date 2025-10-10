// Variables
const body = document.querySelector("body");
// const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
const keys = document.querySelector(".keys");
const key = document.querySelector(".key");
const clearDisplay = document.querySelector("#clear");
const percentage = document.querySelector("#percent");
const deleteValue = document.querySelector("#deleteValue");

// Global variables
let result = 0;
let num1 = 0;
let num2 = 0;
let operator = "";

function calculator() {
  // Arithmetic functions
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

  // Operate function for calculation
  function operate(operand1, operator, operand2) {
    num1 = operand1;
    num2 = operand2;

    switch (operator) {
      case "+":
        result = add(num1, num2);
        displayValue(result);
        num1 = result;
        break;
      case "-":
        result = subtract(num1, num2);
        displayValue(result);
        num1 = result;

        break;
      case "*":
        result = multiply(num1, num2);
        displayValue(result);
        num1 = result;
        break;
      case "/":
        result = divide(num1, num2);
        displayValue(result);
        num1 = result;

        break;
      case "^":
        result = power(num1, num2);
        displayValue(result);
        num1 = result;
        break;

      case "%":
        result = percent(num1);
        displayValue(result);
        num1 = result;
        break;
      default:
        console.log("Not a valid operation!");
    }
  }

  // Function to display values on screen
  function displayValue(number) {
    display.textContent = "";
    const value = document.createElement("h1");
    const insertionPoint = document.createElement("h1");
    value.innerText = `${number} `;
    insertionPoint.classList.add("insertionPoint");
    insertionPoint.innerText = "|";
    display.appendChild(value);
    display.appendChild(insertionPoint);
  }

  // Clear function to empty display
  function clear() {
    display.textContent = "|";
    display.classList.add("insertionPoint");
  }

  function percent(number) {
    number /= 100;
    result = number.toFixed(2);
    return result;
  }

  function clearPreviousValue(){
    let length = num1.length;
    //removing the last element
    num1 = num1.toString().slice(0,length-1);
    //displaying the new value
    displayValue(num1);
  }


  clearDisplay.addEventListener("click", clear);
  percentage.addEventListener("click", ()=>operate(num1, "%"));

  // Test cases
  operate(100, "*", "6");
  console.log(num1);
  operate(10000, "*", "9");

    operate(num1,"-",3);
    operate(num1,"*",3);
    operate(num1,"/",2);

//   clearPreviousValue();

  deleteValue.addEventListener('click', clearPreviousValue);
}

calculator();
