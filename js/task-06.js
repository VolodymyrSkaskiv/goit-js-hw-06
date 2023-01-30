const input = document.querySelector("#validation-input");
// console.log(input);
// console.dir(input.attributes);
// console.log(input.getAttribute("data-length"));

let resultLength;

input.addEventListener("input", onInputChange);
input.addEventListener("blur", onInputValidation);

function onInputChange(event) {
  resultLength = event.currentTarget.value.length;
}

function onInputValidation(event) {
  if (resultLength > 0) {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
  }

  if (resultLength == Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }
}
