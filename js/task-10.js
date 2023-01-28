function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector('[data-create="create"]'),
  btnDestroy: document.querySelector('[data-destroy="destroy"]'),
  divBoxes: document.querySelector("#boxes"),
};

console.log(refs.input);
console.log(refs.btnCreate);
console.log(refs.btnDestroy);
console.log(refs.divBoxes);

refs.input.addEventListener("input", onInputNumber);
refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onInputNumber() {
  console.log("input");
}

function createBoxes(amount) {
  console.log("createBoxes");
}

function destroyBoxes() {
  console.log("destroyBoxes");
  console.log(refs.divBoxes.innerHTML);
  refs.divBoxes.innerHTML = "";
  console.log(refs.divBoxes.innerHTML);
}
