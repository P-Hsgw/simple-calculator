let displayValue = "";
let userChoice = "";

const btns = document.querySelectorAll(".btn")
const display = document.querySelector(".display__item")

function sum (...number) {
  return number.reduce((totalValue, value) => {
     return totalValue + value;
  })
}

function substract (...number) {
  return number.reduce((totalValue, value) => {
    return totalValue - value;
 })
}

function multiply (...number) {
  return number.reduce((totalValue, value) => {
    return totalValue * value;
 })
}

function divide (...number) {
  return number.reduce((totalValue, value) => {
    return totalValue / value;
 })
}

function operate (operator, number1, number2) {
  if (operator == "+") {
    return sum(number1, number2)
  } else if (operator == "-") {
    return substract(number1, number2)
  } else if (operator == "*") {
    return multiply(number1, number2) 
  } else if (operator == "/") {
    return divide(number1, number2)
  }

}

function displayUserChoice (userChoice) {
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
  btn.addEventListener('click', e => {
    userChoice = e.target.dataset.operator;
    displayUserChoice(userChoice)
    display.innerHTML = displayValue
  })
}


// PUSH value to array and display array in innerHTML