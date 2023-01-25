const refs = {
  btn_dec: document.querySelector('[data-action="decrement"]'),
  btn_inc: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};

let counterValue = 0;

refs.btn_dec.addEventListener("click", decrementValue);
refs.btn_inc.addEventListener("click", incrementValue);

function incrementValue() {
  console.log(+1);
  counterValue += 1;
  refs.span.textContent = counterValue;
}

function decrementValue() {
  console.log("-1");
  counterValue -= 1;
  refs.span.textContent = counterValue;
}
