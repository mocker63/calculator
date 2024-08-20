let display = document.getElementById("display");
let expr = "";
let num1 = "";
let num2 = "";
let operator = "";

function calc(char) {
  if (char === "=") {
    calculate();
  } else if (char === "+" || char === "-" || char === "*" || char === "/") {
    if (operator !== "") {
      calculate();
    }
    operator = char;
    expr += char;
    display.value = expr;
  } else {
    if (operator === "") {
      num1 += char;
    } else {
      num2 += char;
    }
    expr += char;
    display.value = expr;
  }
}

function calculate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "-":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "*":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "/":
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
  display.value = result;
  expr = "";
  num1 = "";
  num2 = "";
  operator = "";
}

function del() {
  expr = expr.slice(0, -1);
  display.value = expr;
}

function clearCalc() {
  expr = "";
  num1 = "";
  num2 = "";
  operator = "";
  display.value = "";
}
