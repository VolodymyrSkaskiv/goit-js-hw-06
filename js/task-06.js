const input = document.querySelector("#validation-input");
console.log(input);
console.dir(input.attributes);
console.log(input.getAttribute("data-length"));

let resultLength;

input.addEventListener("input", onInputChange);
input.addEventListener("blur", onInputValidation);

function onInputChange(event) {
  resultLength = event.currentTarget.value.length;
}

function onInputValidation(event) {
  if (resultLength >= 6) {
    input.classList.add("invalid");
    return;
  }

  if (resultLength < 0) {
    input.classList.add("valid");
    return;
  }

  input.classList.add("valid");
}
