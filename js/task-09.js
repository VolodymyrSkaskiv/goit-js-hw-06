function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  btn: document.querySelector("button.change-color"),
  span: document.querySelector("span.color"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", onChangeBackground);

function onChangeBackground() {
  refs.span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = refs.span.textContent;
}
