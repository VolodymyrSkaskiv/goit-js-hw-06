const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrItem = [];

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  arrItem.push(li);
  li.textContent = ingredient;
  li.classList.add("item");
}

const ul = document.querySelector("#ingredients");
ul.append(...arrItem);
