function getA() {
  let a = parseFloat(document.getElementById("input1").value);
  return a;
}
function getB() {
  let b = parseFloat(document.getElementById("input2").value);
  return b;
}

let sum = document.getElementById("Sum");
sum.addEventListener("click", () => {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("Result").innerHTML = "Please enter valid number";
  } else {
    document.getElementById("Result").innerHTML =
      "The result of the calculation A+B is: " + (a + b).toFixed(2);
  }
});

let sub = document.getElementById("Sub");
sub.addEventListener("click", () => {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("Result").innerHTML = "Please enter valid number";
  } else {
    document.getElementById("Result").innerHTML =
      "The result of the calculation A-B is: " + (a - b).toFixed(2);
  }
});

let mul = document.getElementById("Mul");
mul.addEventListener("click", () => {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("Result").innerHTML = "Please enter valid number";
  } else {
    document.getElementById("Result").innerHTML =
      "The result of the calculation A*B is: " + (a * b).toFixed(5);
  }
});

let div = document.getElementById("Div");
div.addEventListener("click", () => {
  let a = getA();
  let b = getB();
  if (isNaN(a) || isNaN(b)) {
    document.getElementById("Result").innerHTML = "Please enter valid number";
  } else {
    if (b === 0) {
      document.getElementById("Result").innerHTML =
        "b must be different from 0";
      return;
    }
    document.getElementById("Result").innerHTML =
      "The result of the calculation A/B is: " + (a / b).toFixed(5);
  }
});
