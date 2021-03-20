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

console.log (operate("-", 10, 5))
console.log (operate("+", 10, 5))
console.log (operate("/", 10, 5))
console.log (operate("*", 10, 5))