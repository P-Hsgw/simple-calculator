let displayValue = ""
let computingValue = [];
let operator = ""
let compute = false;
let result;

const btns = document.querySelectorAll(".btn");
const display = document.querySelector(".display__item");
const displayResult = document.querySelector(".display__result")

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

function addOperator (userChoice) {
  if (userChoice === "plus" && displayValue) {
    operator = "+";
    computingValue.push(parseInt(displayValue))
    displayValue = ""; 
  }
  if (userChoice === "minus" && displayValue) {
    operator = "-";
    computingValue.push(parseInt(displayValue));
    displayValue = ""; 
  }
  if (userChoice === "divide" && displayValue) {
    operator = "/";
    computingValue.push(parseInt(displayValue))
    displayValue = ""; 
  }
  if (userChoice === "multiply" && displayValue) {
    operator = "*";
    computingValue.push(parseInt(displayValue))
    displayValue = ""; 
  }
  if (userChoice === "equals") {
    computingValue.push(parseInt(displayValue))
    compute = true;
    displayValue = ""; 
    setTimeout (function() {compute = false;}, 0)
  }
}

function displayNumbers (userChoice) {
  if (userChoice === "one") {
    displayValue += 1;
  }
  if (userChoice === "two") {
    displayValue += 2;
  }
  if (userChoice === "three") {
    displayValue += 3;
  }
  if (userChoice === "four") {
    displayValue += 4
  }
  if (userChoice === "five") {
    displayValue += 5
  }
  if (userChoice === "six") {
    displayValue += 6
  }
  if (userChoice === "seven") {
    displayValue += 7
  }
  if (userChoice === "eight") {
    displayValue += 8
  }
  if (userChoice === "nine") {
    displayValue += 9
  }
  if (userChoice === "dot" && displayValue.indexOf(".") === -1 ) {
    displayValue += "."
  }
  if (userChoice === "zero" && displayValue ) {
    displayValue += 0
  }
  if (userChoice === "clear") {
    displayValue = ""
  }
  if (userChoice === "backspace") {
    displayValue = displayValue.slice(0, -1)
  }
}

for (const btn of btns) {
  let userChoice = "";
  btn.addEventListener('click', e => {
    userChoice = e.target.dataset.operator;
    displayNumbers(userChoice)
    addOperator(userChoice)
    console.log(operate(operator, computingValue[0], computingValue[1]))
    console.log(operator)
    console.log(computingValue)
    console.log(compute)
    display.innerHTML = displayValue
    if (result != undefined) {
      displayResult.innerHTML = result;
    } 
  })
}