const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

/// 1 variant for
// const arrLi = [];

// for (const image of images) {
//   const liEl = document.createElement("li");
//   arrLi.push(liEl);
//   liEl.classList.add("gallery-item");
//   console.log(liEl);

//   const imgEl = document.createElement("img");
//   imgEl.classList.add("gallery-img");
//   console.log(image.url);
//   imgEl.url = image.url;
//   imgEl.alt = image.alt;
//   console.log(imgEl);
//   console.log(liEl);
//   liEl.appendChild(imgEl);
// }
// const ulEl = document.querySelector(".gallery");
// ulEl.append(...arrLi);

//----------2 variant map
// const makeItemOptions = (options) => {
//   return options.map((option) => {
//     const liEl = document.createElement("li");
//     // arrLi.push(liEl)
//     liEl.classList.add("gallery-item");

//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery-img");
//     imgEl.src = option.url;
//     imgEl.alt = option.alt;
//     liEl.appendChild(imgEl);

//     return liEl;
//   });
// };

// const elements = makeItemOptions(images);
// console.log(elements);
// const ulEl = document.querySelector(".gallery");

// ulEl.append(...elements);

const makeItemOptions = (options) => {
  return options.map((option) => {
    const imgEl = `<li class="gallery-item"><img src=${option.url} alt=${option.alt} class="gallery-img"></li>`;
    return imgEl;
  });
};

const elements = makeItemOptions(images);
console.log(elements);
const ulEl = document.querySelector(".gallery");

ulEl.insertAdjacentHTML("beforeend", elements.join(""));
