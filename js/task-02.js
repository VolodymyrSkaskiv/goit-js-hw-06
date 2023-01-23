const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
console.log(ul);

const li = document.createElement("li");
li.textContent = ingredients[0];
li.classList.add("item");
console.log(li);

ul.append(li);
