const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const validateOne = document.getElementById("validateOne");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const showAnswer = document.getElementById("showAnswer");
const operatorDisplay = document.getElementById("operatorDisplay");
const reset = document.getElementById("reset");

// function to check if input is a valid number

function isValidNumber(input) {
  //remove any whitespace
  const trimmedInput = input.trim();

  //check if input is empty
  if (trimmedInput === "") return false;

  // try to convert to number
  const number = Number(trimmedInput);

  //check if conversion resulted in a valid number
  return !isNaN(number) && trimmedInput === number.toString();
}

function selectOperator(operator) {
  operatorDisplay.textContent = operator;
  validateOne.textContent = "";
}

//attach the operator selection to my buttons
addition.addEventListener("click", () => selectOperator("+"));
subtraction.addEventListener("click", () => selectOperator("-"));
divide.addEventListener("click", () => selectOperator("/"));
multiply.addEventListener("click", () => selectOperator("*"));

// reset display
function resetDisplay() {
  showAnswer.textContent = "";
  validateOne.textContent = "";
  operatorDisplay.textContent = "";
}

//attach reset to inputs
[inputOne, inputTwo].forEach((input) => {
  input.addEventListener("click", resetDisplay);
});

equal.addEventListener("click", (event) => {
  event.preventDefault();

  //reset previous validation
  validateOne.textContent = "";
  validateOne.style.color = "red";

  // validation

  if (!isValidNumber(inputOne.value)) {
    validateOne.textContent = "Please enter a valid number in box 1";
    return;
  }

  if (!isValidNumber(inputTwo.value)) {
    validateOne.textContent = "Please enter a valid number in box 2";
    return;
  }

  // if operator is selected
  const operator = operatorDisplay.textContent;
  if (!operator) {
    validateOne.textContent = "Please select an operator";
    return;
  }

  // parse floats
  const inputDigitOneFloat = parseFloat(inputOne.value);
  const inputDigitTwoFloat = parseFloat(inputTwo.value);

  //perform the task
  let result;
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
        validateOne.textContent = "Cannot divide by zero";
        return;
      }
      result = inputDigitOneFloat / inputDigitTwoFloat;
      break;
  }

  //display result
  showAnswer.textContent = result;
});

//reset button functionality
reset.addEventListener("click", () => {
  inputOne.value = "";
  inputTwo.value = "";
  resetDisplay();
});
