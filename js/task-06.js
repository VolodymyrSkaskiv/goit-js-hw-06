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
  if (resultLength >= Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");

    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }

    console.log(">6 .valid", input.classList.contains("valid"));
    console.log(">6 .invalid", input.classList.contains("invalid"));

    return;
  }

  if (resultLength > 0) {
    input.classList.add("invalid");
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }

    console.log(">0 .valid", input.classList.contains("valid"));
    console.log(">0 .invalid", input.classList.contains("invalid"));

    return;
  }

  input.classList.remove("invalid");

  console.log("=0 .valid", input.classList.contains("valid"));
  console.log("=0 .invalid", input.classList.contains("invalid"));
}
