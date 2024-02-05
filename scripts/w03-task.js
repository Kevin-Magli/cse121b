/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(x, y) {
  return x - y;
}

function subtractNumbers() {
  let subNumber1 = Number(document.querySelector("#subtract1").value);
  let subNumber2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(
    subNumber1,
    subNumber2
  );
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (x, y) => x * y;

function multiplyNumbers() {
  let multiNumber1 = Number(document.querySelector("#factor1").value);
  let multiNumber2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(
    multiNumber1,
    multiNumber2
  );
}

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (x, y) => x / y;

function divideNumbers() {
  let dividendNumber = Number(document.querySelector("#dividend").value);
  let divisorNumber = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(
    dividendNumber,
    divisorNumber
  );
}

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click", function () {
  let userSubtotal = Number(document.querySelector("#subtotal").value);
  let memberCheck = document.getElementById("member");
  let totalElement = document.querySelector("#total");

  if (memberCheck.checked) {
    userSubtotal = userSubtotal * 0.8;
  }

  totalElement.textContent = "$ " + userSubtotal.toFixed(2);
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from(Array(13).keys()).map((num) => num + 1);
document.querySelector("#array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */
const odds = numbersArray.filter((number) => number % 2 !== 0);
document.querySelector("#odds").textContent = odds.join(", ");
/* Output Evens Only Array */
const evens = numbersArray.filter((number) => number % 2 == 0);
document.querySelector("#evens").textContent = evens.join(", ");

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => {
  return sum + number;
}, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray.toString();

/* Output Multiplied by 2 Array */
const multipliedOutput = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").textContent = multipliedOutput.toString();

/* Output Sum of Multiplied by 2 Array */
let sumOfMulti = multipliedOutput.reduce((sum, number) => {
  return sum + number
})
document.querySelector("#sumOfMultiplied").textContent = sumOfMulti.toString();