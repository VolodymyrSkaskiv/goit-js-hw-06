// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const numberOfCategories = document.querySelectorAll("h2");
console.log("Number of categories: ", numberOfCategories.length);
const ul = document.querySelector("#categories");

for (let i = 0; i < numberOfCategories.length; i += 1) {
  const categoryEl = ul.children[i].firstElementChild.textContent;
  const elemCount = ul.children[i].lastElementChild.children.length;

  console.log("Category:", categoryEl);
  console.log("Elements:", elemCount);
}
