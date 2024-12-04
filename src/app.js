const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const validateOne = document.getElementById("validateOne");
const validateTwo = document.getElementById("validateTwo");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const modulus = document.getElementById("modulus");
const equal = document.getElementById("equal");
const showAnswer = document.getElementById("showAnswer");
const operatorDisplay = document.getElementById("operatorDisplay");
const reset = document.getElementById("reset");
// Operators Display
addition.addEventListener("click", () => {
  operatorDisplay.textContent = "+";
  validateOne.textContent = "";
});
subtraction.addEventListener("click", () => {
  operatorDisplay.textContent = "-";
  validateOne.textContent = "";
});
multiply.addEventListener("click", () => {
  operatorDisplay.textContent = "*";
  validateOne.textContent = "";
});
divide.addEventListener("click", () => {
  operatorDisplay.textContent = "/";
  validateOne.textContent = "";
});

equal.addEventListener("click", (event) => {
  //stop the page from refreshing
  event.preventDefault();
  // parse input one
  const inputDigitOneFloat = parseFloat(inputOne.value);

  //parse input two
  const inputDigitTwoFloat = parseFloat(inputTwo.value);
  //Validation calls

  if (inputOne.value === "") {
    validateOne.textContent = "**Please Enter a value in the first box";
    validateOne.style.color = "red";
  } else if (inputTwo.value === "") {
    validateOne.textContent = "**Please Enter a value in the second input box";
    validateOne.style.color = "red";
  } else if (isNaN(inputDigitOneFloat)) {
    validateOne.textContent =
      "**Please enter a valid number in the first box, not a string or symbol";
    validateOne.style.color = "red";
  } else if (isNaN(inputDigitTwoFloat)) {
    validateOne.textContent =
      "**Please enter a valid number in the second box, not a string or symbol";
    validateOne.style.color = "red";
  }
  //Perform arithmetic Operations
  else {
    let result;
    const operator = operatorDisplay.textContent;

    switch (operator) {
      case "+":
        result = inputDigitOneFloat + inputDigitTwoFloat;
        break;
      case "-":
        result = inputDigitOneFloat - inputDigitTwoFloat;
        break;
      case "*":
        result = inputDigitOneFloat * inputDigitTwoFloat;
        break;
      case "/":
        if (inputDigitTwoFloat === 0) {
          validateOne.textContent = "**Cannot divide by zero";
          validateOne.style.color = "red";
          return;
        }
        result = inputDigitOneFloat / inputDigitTwoFloat;
        break;

      default:
        validateOne.textContent = "**Please select an operator";
        validateOne.style.color = "red";
        return;
    }

    showAnswer.textContent = result;
  }
});
//Clear validation and display
inputOne.addEventListener("click", () => {
  showAnswer.textContent = "";
  validateOne.textContent = "";
  operatorDisplay.textContent = "";
});
inputTwo.addEventListener("click", () => {
  showAnswer.textContent = "";
  validateOne.textContent = "";
  operatorDisplay.textContent = "";
});

//Reset button
reset.addEventListener("click", () => {
  inputOne.value = "";
  inputTwo.value = "";
  showAnswer.textContent = "";
  validateOne.textContent = "";
  operatorDisplay.textContent = "";
});
