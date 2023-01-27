const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

console.log(refs.input.textContent);

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);

  if (event.currentTarget.value) {
    refs.span.textContent = event.currentTarget.value;
    return;
  }

  refs.span.textContent = "Anonymous";
}
