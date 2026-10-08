const display = document.querySelector(".display");

const controls = document.querySelector(".controls");

const sum = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mult = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  if (b === 0) {
    return "На 0 Ділити не можна";
  }
  return a / b;
};

let a = 0;
let b = 0;
let action = "";

const handleCalculate = function (event) {
  if (event.target.hasAttribute("data-num")) {
    display.value += event.target.dataset.num;
  }

  if (!event.target.hasAttribute("data-action")) {
    return;
  }
  if (display.value === "") {
    action = event.target.dataset.action;
    return;
  }
  if (event.target.dataset.action === "+") {
    action = "+";
    a = Number.parseFloat(display.value);
    display.value = "";
  }
  if (event.target.dataset.action === "-") {
    action = "-";
    a = Number.parseFloat(display.value);
    display.value = "";
  }
  if (event.target.dataset.action === "*") {
    action = "*";
    a = Number.parseFloat(display.value);
    display.value = "";
  }
  if (event.target.dataset.action === "/") {
    action = "/";
    a = Number.parseFloat(display.value);
    display.value = "";
  }

  if (event.target.dataset.action === "=") {
    b = Number.parseFloat(display.value);
    console.log(action);
    if (action === "+") {
      a = sum(a, b);
      console.log(a);
    }

    if (action === "-") {
      a = sub(a, b);
    }

    if (action === "*") {
      a = mult(a, b);
    }

    if (action === "/") {
      a = div(a, b);
    }

    display.value = `${a}`;
  }
};

controls.addEventListener("click", handleCalculate);
