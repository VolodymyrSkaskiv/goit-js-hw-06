const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

//початкове значення
refs.span.style.fontSize = refs.input.value + "px";

refs.input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  refs.span.style.fontSize = refs.input.value + "px";
}
