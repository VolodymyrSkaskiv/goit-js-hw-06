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

const animals = ul.children[0].children[0].textContent;
console.log("Category:", animals);

//2 variant
// const animals = ul.firstElementChild.firstElementChild.textContent;
// console.log("Category:", animals);

const animalsCount = ul.children[0].children[1].children.length;
console.log("Elements:", animalsCount);

const products = ul.children[1].children[0].textContent;
console.log("Category:", products);

const productsCount = ul.children[1].children[1].children.length;
console.log("Elements:", productsCount);

// const technologies = ul.children[2].children[0].textContent;
// console.log("Category:", technologies);

//2 variant
const technologies = ul.lastElementChild.firstElementChild.textContent;
console.log("Category:", technologies);

const technologiesCount = ul.children[2].children[1].children.length;
console.log("Elements:", technologiesCount);
