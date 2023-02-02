import { data } from "./data.js";

const wrap = document.querySelector(".cards__wrapper");
const inputSearch = document.querySelector(".form__input");
const selectSearch = document.querySelector(".select");

function createCard(obj) {
  const newCard = document.createElement("div");
  newCard.className = "cards__item";
  newCard.innerHTML = `
  <img src="${obj.image}" />`;

  const text = document.createElement("div");
  text.className = "item__text";
  text.innerHTML = `  <p class="item__title">${obj.name}</p>
  <p class="item__data">Actor: ${obj.actor}</p>
  <p class="item__data">Gender: ${obj.gender}</p>
  <p class="item__data">House: ${obj.house}</p>
  <p class="item__data">Wand core: ${obj.wand.core}</p>
  <p class="item__data">Alive: ${obj.alive ? "yes" : "no"}</p>`;
  console.log(text);
  newCard.append(text);
  return newCard;
}

function inputSearchFunction(event) {
  wrap.innerHTML = "";
  console.log(event.target.value);
  let value = event.target.value.trim().toLowerCase();
  data
    .filter((elem) => elem.name.trim().toLowerCase().includes(value))
    .forEach((elem) => wrap.append(createCard(elem)));
}
inputSearch.addEventListener("input", inputSearchFunction);

function selectSearchFunction(event) {
  wrap.innerHTML = "";
  console.log(event.target.value);
  let value = event.target.value.trim().toLowerCase();
  data
    .filter((elem) => elem.house.trim().toLowerCase().includes(value))
    .forEach((elem) => wrap.append(createCard(elem)));
}
selectSearch.addEventListener("change", selectSearchFunction);

data.forEach((card) => wrap.append(createCard(card)));
