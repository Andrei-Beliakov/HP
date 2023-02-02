import { data } from "./data.js";

const wrap = document.querySelector(".cards__wrapper");

function createCard(obj) {
  console.log(obj.wand);
  const newCard = document.createElement("div");
  newCard.className = "cards__item";
  newCard.innerHTML = `
  <img src="${obj.image}"/> 
  <p class="item__title">${obj.name}</p>
  <p class="item__data">Actor: ${obj.actor}</p>
  <p class="item__data">Gender:${obj.gender}</p>
  <p class="item__data">House:${obj.house}</p>
  <p class="item__data">Wand core:${obj.wand}</p>
  <p class="item__data">Alive:${obj.alive}</p>`;

  return newCard;
}

data.forEach((card) => wrap.append(createCard(card)));

// import { data } from "./data.js";
// const wrap = document.querySelector(".cards__wrapper");
// const search = document.querySelector(".cards__input");

// function createCard(obj) {
//   let checkedKeywords = [...new Set(obj.keywords.split(" "))].join(" ");
//   const newCard = document.createElement("div");
//   newCard.className = "cards__item";
//   newCard.innerHTML = `<p class="item__emoji">${obj.symbol}</p>
//      <p class="item__title">${obj.title}</p>
//      <p class="item__keywords">${checkedKeywords}</p>`;
//   return newCard;
// }

// function searchFunction(event) {
//   wrap.innerHTML = "";
//   console.log(event.target.value);
//   let value = event.target.value.trim().toLowerCase();
//   data
//     .filter(
//       (elem) =>
//         elem.title.trim().toLowerCase().includes(value) ||
//         elem.keywords.trim().toLowerCase().includes(value)
//     )
//     .forEach((elem) => wrap.append(createCard(elem)));
// }
// search.addEventListener("input", searchFunction);
// data.forEach((newCard) => wrap.append(createCard(newCard)));
