// CHANGE BEHAVIOR OF EQUALS AND FIGURE OUT WHAT'S GOING ON WITH NaN IN RESULT

let displayValue = "";
let computingValue = [];
let operator = "";
let compute = false;
let result;

const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display__item");
const displayResult = document.querySelector(".display__result");

function sum (number1, number2) {
  return result=number1 + number2;
}

function substract (number1, number2) {
  return result= number1 - number2;
}

function multiply (number1, number2) {
  return result= number1 * number2;
}

function divide (number1, number2) {
  return result=number1 / number2;
}

function operate (operator, number1, number2) {
  if (operator == "+" && compute) {
    return sum(number1, number2)
  } else if (operator == "-" && compute) {
    return substract(number1, number2)
  } else if (operator == "*" && compute) {
    return multiply(number1, number2) 
  } else if (operator == "/" && compute) {
    return divide(number1, number2)
  }
}
function addOperator (choice) {
  if (choice === "plus" && displayValue && computingValue.length == 1) {
    operator = "+";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    compute = true;
    setTimeout (() => {computingValue.length = 0;}, 0)
    setTimeout (() => {computingValue.push(parseInt(result))}, 0)
    console.log(computingValue)
  } else if (choice === "plus" && displayValue) {
    operator = "+";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    console.log(computingValue)
  }
  if (choice === "minus" && displayValue && computingValue.length == 1) {
    operator = "-";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    compute = true;
    setTimeout (() => {computingValue.length = 0;}, 0)
    setTimeout (() => {computingValue.push(parseInt(result))}, 0)
    console.log(computingValue)
  }else if (choice === "minus" && displayValue) {
    operator = "-";
    computingValue.push(parseFloat(displayValue));
    displayValue = ""; 
  }
  if (choice === "divide" && displayValue && computingValue.length == 1) {
    operator = "/";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    compute = true;
    setTimeout (() => {computingValue.length = 0;}, 0)
    setTimeout (() => {computingValue.push(parseInt(result))}, 0)
    console.log(computingValue)
  }else if (choice === "divide" && displayValue) {
    operator = "/";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
  }
  if (choice === "multiply" && displayValue && computingValue.length == 1) {
    operator = "*";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    compute = true;
    setTimeout (() => {computingValue.length = 0;}, 0)
    setTimeout (() => {computingValue.push(parseInt(result))}, 0)
    console.log(computingValue)
  }else if (choice === "multiply" && displayValue) {
    operator = "*";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
  }
  if (choice === "equals" && displayValue && computingValue.length == 1) {
    operator = "=";
    computingValue.push(parseFloat(displayValue))
    displayValue = ""; 
    compute = true;
    setTimeout (() => {computingValue.length = 0;}, 0)
    setTimeout (() => {computingValue.push(parseInt(result))}, 0)
    console.log(computingValue)
  }else if (choice === "equals") {
    computingValue.push(parseFloat(displayValue))
    compute = true;
    displayValue = ""; 
    setTimeout (() => {compute = false}, 0)
  }
}

function displayNumbers (choice) {
  if (choice === "one") {
    displayValue += 1;
  }
  if (choice === "two") {
    displayValue += 2;
  }
  if (choice === "three") {
    displayValue += 3;
  }
  if (choice === "four") {
    displayValue += 4
  }
  if (choice === "five") {
    displayValue += 5
  }
  if (choice === "six") {
    displayValue += 6
  }
  if (choice === "seven") {
    displayValue += 7
  }
  if (choice === "eight") {
    displayValue += 8
  }
  if (choice === "nine") {
    displayValue += 9
  }
  if (choice === "dot" && displayValue.indexOf(".") === -1 && displayValue ) {
    displayValue += "."
  }
  if (choice === "zero" && displayValue ) {
    displayValue += 0
  }
  if (choice === "clear") {
    displayValue = "";
    computingValue = [];
    operator = "";
    compute = false;
    result = ""
  }
  if (choice === "backspace") {
    displayValue = displayValue.slice(0, -1)
  }
}

for (const btn of btns) {
  let userChoice = "";
  btn.addEventListener('click', e => {
    userChoice = e.target.dataset.operator;
    displayNumbers(userChoice)
    addOperator(userChoice)
    operate(operator, computingValue[0], computingValue[1])
    display.innerHTML = displayValue
    if (result != undefined) {
      displayResult.innerHTML = result;
    } 
  })
}