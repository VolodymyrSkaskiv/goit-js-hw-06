function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector('[data-create="create"]'),
  btnDestroy: document.querySelector('[data-destroy="destroy"]'),
  divBoxes: document.querySelector("#boxes"),
};

let count;
const arrCreateDiv = [];

refs.input.addEventListener("input", onInputNumber);
refs.btnCreate.addEventListener("click", createDivs);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onInputNumber() {
  return (count = Number(refs.input.value));
}

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
}

function createDivs() {
  createBoxes(count);
  count = 0;
  refs.input.value = 0;
  arrCreateDiv.length = 0;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const refsDiv = document.createElement("div");
    arrCreateDiv.push(refsDiv);

    const boxSize = i * 10 + 30;
    refsDiv.textContent = i + 1;
    refsDiv.style.width = `${boxSize}px`;
    refsDiv.style.height = `${boxSize}px`;
    refsDiv.style.backgroundColor = getRandomHexColor();
  }
  refs.divBoxes.append(...arrCreateDiv);
}
