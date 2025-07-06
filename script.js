const result = document.getElementById("Result");

function addToInput(input) {
  result.value += input;
}

function deleteAll() {
  result.value = "";
}

function deleteLetter() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  const value = eval(result.value);
  if (!isFinite(value)) {
    result.value = "Error";
  } else {
    result.value = value;
  }
}

