const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const validate = document.getElementById("validate");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const showAnswer = document.getElementById("showAnswer");
const operatorDisplay = document.getElementById("operatorDisplay");
const reset = document.getElementById("reset");
// Operators Display
addition.addEventListener("click", () => {
  operatorDisplay.textContent = "+";
  validate.textContent = "";
});
subtraction.addEventListener("click", () => {
  operatorDisplay.textContent = "-";
  validate.textContent = "";
});
multiply.addEventListener("click", () => {
  operatorDisplay.textContent = "*";
  validate.textContent = "";
});
divide.addEventListener("click", () => {
  operatorDisplay.textContent = "/";
  validate.textContent = "";
});

equal.addEventListener("click", (event) => {
  //stop the page from refreshing
  event.preventDefault();
  //Trim input for whitespace
  const inputOneTrim = inputOne.value.trim();
  const inputTwoTrim = inputTwo.value.trim();
  // Input one number convertion
  const inputDigitOneNumber = Number(inputOneTrim);
  //parse input two
  const inputDigitTwoNumber = Number(inputTwoTrim);

  //Validation calls

  if (inputOne.value === "") {
    validate.textContent = "**Please Enter a value in the first box";
    validate.style.color = "red";
  } else if (inputTwo.value === "") {
    validate.textContent = "**Please Enter a value in the second input box";
    validate.style.color = "red";
  } else if (isNaN(inputDigitOneNumber)) {
    validate.textContent =
      "**Please enter a valid number in the first box, not a string or symbol";
    validate.style.color = "red";
  } else if (isNaN(inputDigitTwoNumber)) {
    validate.textContent =
      "**Please enter a valid number in the second box, not a string or symbol";
    validate.style.color = "red";
  }
  //Perform arithmetic Operations
  else {
    let result;
    const operator = operatorDisplay.textContent;

    switch (operator) {
      case "+":
        result = inputDigitOneNumber + inputDigitTwoNumber;
        break;
      case "-":
        result = inputDigitOneNumber - inputDigitTwoNumber;
        break;
      case "*":
        result = inputDigitOneNumber * inputDigitTwoNumber;
        break;
      case "/":
        if (inputDigitTwoNumber === 0) {
          validate.textContent = "**Cannot divide by zero";
          validate.style.color = "red";
          return;
        }
        result = inputDigitOneNumber / inputDigitTwoNumber;
        break;

      default:
        validate.textContent = "**Please select an operator";
        validate.style.color = "red";
        return;
    }

    showAnswer.textContent = result;
  }
});
//Clear validation and display
inputOne.addEventListener("click", () => {
  showAnswer.textContent = "";
  validate.textContent = "";
  operatorDisplay.textContent = "";
});
inputTwo.addEventListener("click", () => {
  showAnswer.textContent = "";
  validate.textContent = "";
  operatorDisplay.textContent = "";
});

//Reset button
reset.addEventListener("click", () => {
  inputOne.value = "";
  inputTwo.value = "";
  showAnswer.textContent = "";
  validate.textContent = "";
  operatorDisplay.textContent = "";
});
